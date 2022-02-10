import React from "react";
import Hero from './Hero';
import Articles from './Articles';
import Aside from './Aside';
import Loader from './Loader';
import Pagination from './Pagination';

let baseUrl = 'https://mighty-oasis-08080.herokuapp.com/api/articles';

export default class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      selectedTag: '',
      offset: 0,
      articles: null,
      filteredArticles: null,
      articlesCount: 0
    }
  }

  componentDidMount(){
    fetch(baseUrl).then(res => res.json()).then(({articlesCount,articles}) => this.setState({
      articles: articles,
      articlesCount: articlesCount
    }));
  }

  generateUrlAndFetch = (tag) => {
    fetch(baseUrl + '?tag=' + tag).then(res => res.json()).then(({articlesCount,articles}) => this.setState({
      filteredArticles: articles,
      articlesCount: articlesCount
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
          <Pagination />
        </>
      )
    }
  }
}