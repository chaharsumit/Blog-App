export default function ArticleHero(){
  return (
    <section className="hero">
      <div className="container">
        <h1 className="text-xlg align-left">This is my new article</h1>
        <div className="user-info flex">
          <img src='logo512.png' className='user-icon' />
          <div className='article-creation-info'>
            <h6 className='text-sm text-light align-left'>Gerome</h6>
            <time className='text-xsm text-light'>{new Intl.DateTimeFormat('en-GB', { 
              weekday: 'short',
              month: 'short', 
              day: '2-digit',
              year: 'numeric', 
              }).format(new Date())}
            </time>
          </div>
        </div>
      </div>
    </section>
  )
}