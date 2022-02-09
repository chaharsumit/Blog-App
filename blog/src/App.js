import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Loader from './components/Loader';
import Home from './components/Home';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import SingleArticle from './components/SingleArticle';


let baseUrl = 'https://mighty-oasis-08080.herokuapp.com/api/articles';
export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      articles: null,
    }
  }

  componentDidMount(){
    fetch(baseUrl).then(res => res.json()).then(({articles}) => this.setState({
      articles
    }));
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
    if(!this.state.articles){
      return (
        <Loader />
      )
    }else{
      return (
        <>
          
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path='/' element={<Home articles={this.state.articles} getDate={this.getDate} />}/>
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='/articles/:slug' element={<SingleArticle baseUrl={baseUrl} getDate={this.getDate} />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </>
      )
    }
  }
}