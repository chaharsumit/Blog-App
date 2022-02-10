import React from 'react';

export default class Pagination extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <section className='pagination'>
        <div className='container flex'>
          <p>≪Prev</p>
          <ul className='pagination-menu flex'>
            <li className='pagination-menu-item'>1</li>
            <li className='pagination-menu-item'>1</li>
            <li className='pagination-menu-item'>1</li>
            <li className='pagination-menu-item'>1</li>
            <li className='pagination-menu-item'>1</li>
            <li className='pagination-menu-item'>1</li>
            <li className='pagination-menu-item'>1</li>
            <li className='pagination-menu-item'>1</li>
            <li className='pagination-menu-item'>1</li>
            <li className='pagination-menu-item'>1</li>
            <li className='pagination-menu-item'>1</li>
            <li className='pagination-menu-item'>1</li>
            <li className='pagination-menu-item'>1</li>
            <li className='pagination-menu-item'>1</li>
            <li className='pagination-menu-item'>1</li>
            <li className='pagination-menu-item'>1</li>
          </ul>
          <p>Next≫</p>
        </div>
      </section>
    )
  }
}