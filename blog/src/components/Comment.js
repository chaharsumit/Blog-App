import {Link} from 'react-router-dom';

export default function Comment(){
  return (
    <section className='comment-section'>
      <div className='container flex'>
        <p>Sign up or Sign in to add comments to this article</p>
        <ul className='comment-cards-list flex'>
          <li className='comment-card'>
            <p className='text-xsm comment-description'>this is the comment for this article created by me</p>
            <div className='comment-author-info flex'>
              <img src='logo512.png' className='user-icon-sm' />
              <p className='text-xsm text-light'>Gerome</p>
              <time className='text-xsm text-light'>Wed 29 Nov 2021</time>
            </div>
          </li>
          <li className='comment-card'>
            <p className='text-xsm comment-description'>this is the comment for this article created by me</p>
            <div className='comment-author-info flex'>
              <img src='logo512.png' className='user-icon-sm' />
              <p className='text-xsm text-light'>Gerome</p>
              <time className='text-xsm text-light'>Wed 29 Nov 2021</time>
            </div>
          </li>
          <li className='comment-card'>
            <p className='text-xsm comment-description'>this is the comment for this article created by me</p>
            <div className='comment-author-info flex'>
              <img src='logo512.png' className='user-icon-sm' />
              <p className='text-xsm text-light'>Gerome</p>
              <time className='text-xsm text-light'>Wed 29 Nov 2021</time>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}