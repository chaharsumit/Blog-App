import { useState, useEffect } from "react";
import Loader from './Loader';

export default function Comment(props){
  const [comments, setComment] = useState(null);
  let article = props.article.article.article;

  useEffect(() => {
    fetch(props.baseUrl + '/' + article.slug + '/comments').then(res => res.json()).then(comments => setComment({
      comments
    }));
  },[])

  function getComments(){
    if(!comments){
      return <p>Loading Comments...</p>
    }else{
      console.log(comments.comments.comments);
      return (
        <>
          <p>Sign up or Sign in to add comments to this article</p>
          <ul className='comment-cards-list flex'>
            {
              comments.comments.comments.map(comment => (
                <li className='comment-card'>
                  <p className='text-xsm comment-description'>{comment.body}</p>
                  <div className='comment-author-info flex'>
                    <img src={comment.author.image} className='user-icon-sm' />
                    <p className='text-xsm text-light'>{comment.author.username}</p>
                    <time className='text-xsm text-light'>{props.getDate(comment.createdAt)}</time>
                  </div>
                </li>
              )) 
            }
          </ul>
        </>
      )
    }
  }

  return (
    <section className='comment-section'>
      <div className='container flex'>
        {
          getComments()
        }
      </div>
    </section>
  )
}