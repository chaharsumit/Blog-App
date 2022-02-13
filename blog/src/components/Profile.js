import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { articlesURL } from "../utils/constant";
import { profileURL } from "../utils/constant";


export default function Profile(props) {
  const [activeTab, setTab] = useState("author");
  const [articles, setArticles] = useState(null);
  const [userProfile, setProfile] = useState(null);

  let params = useParams();

  useEffect(() => {
      getProfileUser();
      getProfileArticles();
  }, [activeTab]);
  

  /*
    function getAuthorArticles(){
      fetch(articlesURL + `/?limit=10&author=${props.user.username}`)
        .then(res => res.json())
        .then(({articles}) =>
          setArticles({
            articles
          })
        );
    }
  */


  function getProfileUser() {
    fetch(profileURL + params.username, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    })
      .then(res => res.json())
      .then(({profile}) => {
        setProfile(profile)
      });
  }

  function getProfileArticles() {
    let limit = 10;
    let new_url = (activeTab === 'author' ? `/?limit=${limit}&author=${params.username}` : `/?limit=${limit}&favorited=${params.username}`);
    fetch(articlesURL + new_url)
      .then(res => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then(
        ({ articles }) =>
          setArticles({
            articles: articles
          })
      )
      .catch(err => {
        this.setState({ error: "Not Able to fetch articles" });
      });
  }

  function handleArticles(value){
    setTab(
      value
    );
  }

  return (
    !userProfile ? 'Loading' : (
    <>
      <section className="profile-hero">
        <div className="container flex">
          <div className="profile-info flex">
            <img src={userProfile ? userProfile.image : 'logo512.png'} className="profile-image" />
            <h3>{userProfile ? params.username : props.user.username}</h3>
            <p>{userProfile ? userProfile.bio : props.user.bio}</p>
          </div>
          <button className="setting-btn flex">
            {
              userProfile ? <Link to="/">Follow user</Link> : <Link to="/settings">Profile Settings</Link>
            }
          </button>
        </div>
      </section>
      <section className="profile-feed-section container">
        <ul className="feed-menu flex">
          <li
            onClick={() => handleArticles('author')}
            className={
              activeTab === 'author' ? "feed-status active-feed" : "feed-status"
            }
          >
            My Articles
          </li>
          <li onClick={() => handleArticles('favourited')} className={activeTab === 'favourited' ? "feed-status active-feed" : 'feed-status'}>Favourited Articles</li>
        </ul>
      </section>
      <section className="articles-container">
          <div className="container flex">
            {
              !articles ? '' : (
                  articles.articles.map(article => (
                    <article key={article.slug} className="article-card flex">
                      <div className="user-info flex">
                        <img src={article.author.image} className='user-icon' />
                        <div className='article-creation-info'>
                          <h6 className='text-sm text-primary'>{article.author.username}</h6>
                          <time className='text-xsm text-secondary'>{
                            props.getDate(article.createdAt)
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
                            article.tagList?.map(tag => (
                              <li key={tag} className='text-xsm text-secondary tag-item'>{tag}</li>
                            ))
                          }
                        </ul>
                      </div>
                    </article>
                  ))
              ) 
            }
          </div>
        </section>
    </>)
  );
}
/*

<section className="articles-container">
          <div className="container flex">
            {
              !articles ? '' : (
                  articles.map(article => (
                    <article key={article.slug} className="article-card flex">
                      <div className="user-info flex">
                        <img src={article.author.image} className='user-icon' />
                        <div className='article-creation-info'>
                          <h6 className='text-sm text-primary'>{article.author.username}</h6>
                          <time className='text-xsm text-secondary'>{
                            props.getDate(article.createdAt)
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
                            article.tagList?.map(tag => (
                              <li key={tag} className='text-xsm text-secondary tag-item'>{tag}</li>
                            ))
                          }
                        </ul>
                      </div>
                    </article>
                  ))
              ) 
            }
          </div>
        </section>

*/
