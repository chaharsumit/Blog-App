import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import SingleArticle from './components/SingleArticle';
import {getToken} from './utils/storage';
import { userURL } from './utils/constant';


let baseUrl = 'https://mighty-oasis-08080.herokuapp.com/api/articles';
export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      user: null,
    }
  }

  componentDidMount(){
    if(localStorage.token){
      this.fetchCurrentUser()
    }
  }

  fetchCurrentUser = () => {
    fetch(userURL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization" : `Token ${localStorage.token}`
      },
    }).then(res => res.json()).then(user => this.setState({user}));
  }

  getDate = (date) => {
    return new Intl.DateTimeFormat('en-GB', { 
      weekday: 'short',
      month: 'short', 
      day: '2-digit',
      year: 'numeric', 
      }).format(new Date(date))
  }

  setUser = (userData) => {
    this.setState({
      user: userData
    })
  }

  isLoggedIn = () => {
    let token = getToken();
    if(token && this.state.user){
      return true;
    }else{
      return false;
    }
  }

  Logout = () => {
    localStorage.removeItem('token');
    this.setState({
      user: null,
    })
  }

  render(){
    return (
      <>
        <Header isLoggedIn={this.isLoggedIn()} Logout={this.Logout} user={this.state.user} />
        <Routes>
          <Route path='/' element={<Home getDate={this.getDate} />}/>
            <Route path='/login' element={this.isLoggedIn() ? <Navigate to="/" replace={true} /> : <Login setUser={this.setUser} />} />
            <Route path='/signup' element={this.isLoggedIn() ? <Navigate to="/" replace={true} /> : <Register setUser={this.setUser} />} />
          <Route path='/articles/:slug' element={<SingleArticle baseUrl={baseUrl} getDate={this.getDate} />} /> 
        </Routes>
      </>
    )
  }
}