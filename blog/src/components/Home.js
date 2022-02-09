import React from "react";
import Hero from './Hero';
import Articles from './Articles';
import Aside from './Aside';

export default class Home extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <>
        <Hero />
        <div className='main-wrapper container flex'>
          <Articles articles={this.props.articles} />
          <Aside articles={this.props.articles} />
        </div>
      </>
    )
  }
}