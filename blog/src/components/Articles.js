import React from 'react';
import {Link} from 'react-router-dom';
import FeedNav from './FeedNav';

export default class Articles extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    if(this.props.selectedTag){
      return (
        <section className="articles-container">
          <div className="container flex">
            <FeedNav selectedTag={this.props.selectedTag} clearTag={this.props.clearTag} />
            {
              this.props.filteredArticles?.map(article => (
                <article key={article.slug} className="article-card flex">
                  <div className="user-info flex">
                    <img src={article.author.image} className='user-icon' />
                    <div className='article-creation-info'>
                      <h6 className='text-sm text-primary'>{article.author.username}</h6>
                      <time className='text-xsm text-secondary'>{
                        this.props.getDate(article.createdAt)
                      }
                      </time>
                    </div>
                  </div>
                  <div className="article-info">
                    <h3 className='text-md text-bold text-primary'>{article.title}</h3>
                    <p className='text-sm text-secondary'>{article.description}</p>
                  </div>
                  <div className="read-info flex">
                    <Link to={`/articles/${article.slug}`} style={{textDecoration: 'none'}}>
                      <p className='text-xsm text-secondary read-link'>Read More...</p>
                    </Link>
                    <ul className='article-card-tag-list flex'>
                      {
                        article.tagList.map(tag => (
                          <li key={tag} className='text-xsm text-secondary tag-item'>{tag}</li>
                        ))
                      }
                    </ul>
                  </div>
                </article>
              ))
            }
          </div>
        </section>
      )
    }else{
      return (
        <section className="articles-container">
          <div className="container flex">
            <FeedNav />
            {
              this.props.articles.map(article => (
                <article key={article.slug} className="article-card flex">
                  <div className="user-info flex">
                    <img src={article.author.image} className='user-icon' />
                    <div className='article-creation-info'>
                      <h6 className='text-sm text-primary'>{article.author.username}</h6>
                      <time className='text-xsm text-secondary'>{
                        this.props.getDate(article.createdAt)
                      }
                      </time>
                    </div>
                  </div>
                  <div className="article-info">
                    <h3 className='text-md text-bold text-primary'>{article.title}</h3>
                    <p className='text-sm text-secondary'>{article.description}</p>
                  </div>
                  <div className="read-info flex">
                    <Link to={`/articles/${article.slug}`} style={{textDecoration: 'none'}}>
                      <p className='text-xsm text-secondary read-link'>Read More...</p>
                    </Link>
                    <ul className='article-card-tag-list flex'>
                      {
                        article.tagList.map(tag => (
                          <li key={tag} className='text-xsm text-secondary tag-item'>{tag}</li>
                        ))
                      }
                    </ul>
                  </div>
                </article>
              ))
            }
          </div>
        </section>
      )
    }
  }  
}


/*

<article className="article-card flex">
  <div className="user-info flex">
    <img src='logo192.png' className='user-icon' />
    <div className='article-creation-info'>
      <h6 className='text-sm text-primary'>Gerome</h6>
      <time className='text-xsm text-secondary'>Wed Nov 24 2021</time>
    </div>
  </div>
  <div className="article-info">
    <h3 className='text-md text-bold text-primary'>Create a new Implementation</h3>
    <p className='text-sm text-secondary'>lorem ipsum dolor sit amet consectetur dolor amet.</p>
  </div>
  <div className="read-info flex">
    <a className='text-xsm text-secondary read-link'>Read More...</a>
    <ul className='article-card-tag-list flex'>
      <li className='text-xsm text-secondary tag-item'>tag</li>
      <li className='text-xsm text-secondary tag-item'>tag</li>
    </ul>
  </div>
</article>
<article className="article-card flex">
  <div className="user-info flex">
    <img src='logo192.png' className='user-icon' />
    <div className='article-creation-info'>
      <h6 className='text-sm text-primary'>Gerome</h6>
      <time className='text-xsm text-secondary'>Wed Nov 24 2021</time>
    </div>
  </div>
  <div className="article-info">
    <h3 className='text-md text-bold text-primary'>Create a new Implementation</h3>
    <p className='text-sm text-secondary'>lorem ipsum dolor sit amet consectetur dolor amet.</p>
  </div>
  <div className="read-info flex">
    <a className='text-xsm text-secondary read-link'>Read More...</a>
    <ul className='article-card-tag-list flex'>
      <li className='text-xsm text-secondary tag-item'>tag</li>
      <li className='text-xsm text-secondary tag-item'>tag</li>
    </ul>
  </div>
</article>
<article className="article-card flex">
  <div className="user-info flex">
    <img src='logo192.png' className='user-icon' />
    <div className='article-creation-info'>
      <h6 className='text-sm text-primary'>Gerome</h6>
      <time className='text-xsm text-secondary'>Wed Nov 24 2021</time>
    </div>
  </div>
  <div className="article-info">
    <h3 className='text-md text-bold text-primary'>Create a new Implementation</h3>
    <p className='text-sm text-secondary'>lorem ipsum dolor sit amet consectetur dolor amet.</p>
  </div>
  <div className="read-info flex">
    <a className='text-xsm text-secondary read-link'>Read More...</a>
    <ul className='article-card-tag-list flex'>
      <li className='text-xsm text-secondary tag-item'>tag</li>
      <li className='text-xsm text-secondary tag-item'>tag</li>
    </ul>
  </div>
</article><article className="article-card flex">
  <div className="user-info flex">
    <img src='logo192.png' className='user-icon' />
    <div className='article-creation-info'>
      <h6 className='text-sm text-primary'>Gerome</h6>
      <time className='text-xsm text-secondary'>Wed Nov 24 2021</time>
    </div>
  </div>
  <div className="article-info">
    <h3 className='text-md text-bold text-primary'>Create a new Implementation</h3>
    <p className='text-sm text-secondary'>lorem ipsum dolor sit amet consectetur dolor amet.</p>
  </div>
  <div className="read-info flex">
    <a className='text-xsm text-secondary read-link'>Read More...</a>
    <ul className='article-card-tag-list flex'>
      <li className='text-xsm text-secondary tag-item'>tag</li>
      <li className='text-xsm text-secondary tag-item'>tag</li>
    </ul>
  </div>
</article>
<article className="article-card flex">
  <div className="user-info flex">
    <img src='logo192.png' className='user-icon' />
    <div className='article-creation-info'>
      <h6 className='text-sm text-primary'>Gerome</h6>
      <time className='text-xsm text-secondary'>Wed Nov 24 2021</time>
    </div>
  </div>
  <div className="article-info">
    <h3 className='text-md text-bold text-primary'>Create a new Implementation</h3>
    <p className='text-sm text-secondary'>lorem ipsum dolor sit amet consectetur dolor amet.</p>
  </div>
  <div className="read-info flex">
    <a className='text-xsm text-secondary read-link'>Read More...</a>
    <ul className='article-card-tag-list flex'>
      <li className='text-xsm text-secondary tag-item'>tag</li>
      <li className='text-xsm text-secondary tag-item'>tag</li>
    </ul>
  </div>
</article>

*/