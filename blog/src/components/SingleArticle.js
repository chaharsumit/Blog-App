import React from 'react';
import ArticleHero from './ArticleHero';
import ArticleBody from './ArticleBody';
import Comment from './Comment';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Loader from './Loader';

export default function SingleArticle(props){
  const [article, setArticle] = useState(null);
  let slug = useParams().slug;

  useEffect(() => {
    fetch(props.baseUrl + '/' + slug).then(res => res.json()).then(article => setArticle({
      article
    }));
  }, []);

  function getUi(){
    if(!article){
      return <Loader />
    }else{
      return (
        <>
          <ArticleHero article={article} getDate={props.getDate} />
          <ArticleBody article={article} />
          <Comment article={article} baseUrl={props.baseUrl} getDate={props.getDate} />
        </>
      )
    }
  }

  return (
    getUi()
  )
}