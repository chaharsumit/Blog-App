import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import SingleArticle from './components/SingleArticle';


let baseUrl = 'https://mighty-oasis-08080.herokuapp.com/api/articles';
export default class App extends React.Component{
  constructor(props){
    super(props);
  }

  getDate = (date) => {
    return new Intl.DateTimeFormat('en-GB', { 
      weekday: 'short',
      month: 'short', 
      day: '2-digit',
      year: 'numeric', 
      }).format(new Date(date))
  }

  render(){
    return (
      <>
        <Header />
        <Routes>
          <Route path='/' element={<Home getDate={this.getDate} />}/>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Register />} />
          <Route path='/articles/:slug' element={<SingleArticle baseUrl={baseUrl} getDate={this.getDate} />} /> 
        </Routes>
      </>
    )
  }
}