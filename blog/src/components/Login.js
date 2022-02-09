import {NavLink} from 'react-router-dom';

export default function Login(){
  return (
    <section className="form-container flex container">
      <h1 className='text-lg'>Sign in</h1>
      <NavLink to='/register'>Need an account?</NavLink>
      <form className='form flex'>
        <input type='email' name='email' placeholder='Email' className='form-control' />
        <input type='password' name='password' placeholder='Password' className='form-control' />
        <input type='submit' value="Sign in" className='form-control submit-btn' />
      </form>
    </section>
  )
}