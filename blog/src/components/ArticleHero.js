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
          </div>
        </div>
      </div>
    </section>
  )
}