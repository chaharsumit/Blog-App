import React from 'react';

export default class Pagination extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      pageArr: null,
    }
  }

  render(){
    let totalArticles = this.props.articlesCount;
    let noOfPages = Math.ceil(totalArticles / 10);
    let i = 1;
    let arr = [];
    while(i <= noOfPages){
      arr.push(i);
      i++;
    }
    this.state.pageArr = arr;
    return (
      <section className='pagination'>
        <div className='container flex'>
          <p onClick={this.props.handlePagination}>Prev</p>
          <ul className='pagination-menu flex'>
            {
              this.state.pageArr.map(page => (
                <li onClick={this.props.handlePagination} className={this.props.activePageIndex != page ? 'pagination-menu-item' : 'pagination-menu-item active-page-menu-item'}>{page}</li>
              ))
            }
          </ul>
          <p onClick={this.props.handlePagination}>Next</p>
        </div>
      </section>
    )
  }
}