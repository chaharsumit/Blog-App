import {Link} from 'react-router-dom';

export default function ArticleHero(props){
  let article = props.article.article;
  return (
    <section className="hero">
      <div className="container">
        <h1 className="text-xlg align-left">{article.article.title}</h1>
        <div className="user-info flex">
          <img src={article.article.author.image} className='user-icon' />
          <div className='article-creation-info'>
            <h6 className='text-sm text-light align-left'>{article.article.author.username}</h6>
            <time className='text-xsm text-light'>{
              props.getDate(article.article.createdAt)
            }
            </time>
            {props.user && props.user.username === article.article.author.username ? <button className='setting-btn flex' onClick={props.deleteArticle}>'Delete Article'</button> : ''}
            {props.user && !article.article.favorited ? <button className='setting-btn flex' onClick={props.favouriteArticle}>Favourite Article</button> : ''}
            {props.user && article.article.favorited ? <button className='setting-btn flex' onClick={props.unfavouriteArticle}>Unfavourite Article</button> : ''}
            {props.user && article.article.author.username === props.user.username ? <Link to={`/articles/editor/${article.article.slug}`}>Edit article</Link> : ''}
          </div>
        </div>
      </div>
    </section>
  )
}

//Error comes in lines 21-22 when logged in user sees his own article