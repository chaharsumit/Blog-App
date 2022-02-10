import React from "react";
import Hero from './Hero';
import Articles from './Articles';
import Aside from './Aside';
import Loader from './Loader';

let baseUrl = 'https://mighty-oasis-08080.herokuapp.com/api/articles';

export default class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      selectedTag: '',
      offset: 0,
      articles: null,
      filteredArticles: null,
    }
  }

  componentDidMount(){
    fetch(baseUrl).then(res => res.json()).then(({articles}) => this.setState({
      articles
    }));
  }

  generateUrlAndFetch = (tag) => {
    fetch(baseUrl + '?tag=' + tag).then(res => res.json()).then(({articles}) => this.setState({
      filteredArticles: articles
    }))
  }

  handleTagSelect = ({ target }) => {
    let value = target.innerText;
    this.setState({
      selectedTag: value,
      filteredArticles: this.generateUrlAndFetch(value)
    })
  }

  clearTag = ({target}) => {
    this.setState({
      selectedTag: '',
    })
  }

  render(){
    if(!this.state.articles){
      return (
        <>
          <Hero />
          <div className='main-wrapper container flex'>
            <Loader />
          </div>
        </>
      )
    }else{
      return (
        <>
          <Hero />
          <div className='main-wrapper container flex'>
            <Articles articles={this.state.articles} clearTag={this.clearTag} selectedTag={this.state.selectedTag} filteredArticles={this.state.filteredArticles} getDate={this.props.getDate} />
            <Aside articles={this.state.articles} handleTagSelect={this.handleTagSelect} />
          </div>
        </>
      )
    }
  }
}