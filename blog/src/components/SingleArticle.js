import React from 'react';
import ArticleHero from './ArticleHero';
import ArticleBody from './ArticleBody';
import Comment from './Comment';

export default class SingleArticle extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <>
        <ArticleHero/>
        <ArticleBody />
        <Comment />
      </>
    )
  }
}