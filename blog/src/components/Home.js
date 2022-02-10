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
      articlesCount: 0,
      activePageIndex: 1
    }
  }

  componentDidMount(){
    this.generateUrlAndFetch();
  }

  componentDidUpdate(_prevProps, prevState){
    if(prevState.activePageIndex !== this.state.activePageIndex || prevState.selectedTag !== this.state.selectedTag){
      this.generateUrlAndFetch();
    }
  }

  generateUrlAndFetch = () => {
    let limit = 10;
    let offset = (this.state.activePageIndex - 1) * 10;
    let tag = this.state.selectedTag;
    fetch(baseUrl + `/?limit=${limit}&offset=${offset}` + (tag && `&tag=${tag}`) ).then(res => res.json()).then(({articlesCount,articles}) => this.setState({
      articles: articles,
      articlesCount: articlesCount
    }))
  }

  handleTagSelect = ({ target }) => {
    let value = target.innerText;
    if(value === this.state.selectedTag){
      return null;
    }else{
      this.setState({
        selectedTag: value,
        activePageIndex: 1
      })
    }
  }

  clearTag = ({target}) => {
    this.setState({
      selectedTag: '',
      activePageIndex: 1
    })
  }

  handlePagination = ({target}) => {
    let value = target.innerText;
    if(value === 'Prev'){
      this.setState((prevState) => {
        return {
          activePageIndex: prevState.activePageIndex - 1
        }
      })
    }else if(value === 'Next'){
      this.setState((prevState) => {
        return {
          activePageIndex: prevState.activePageIndex + 1
        }
      })
    }else{
      this.setState({
        activePageIndex: value
      })
    }
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
            <Aside handleTagSelect={this.handleTagSelect} />
          </div>
          <Pagination articlesCount={this.state.articlesCount} handlePagination={this.handlePagination} activePageIndex={this.state.activePageIndex}  />
        </>
      )
    }
  }
}