import {NavLink} from 'react-router-dom';


export default function Register(){
  return (
    <section className="form-container flex container">
      <h1 className='text-lg'>Sign up</h1>
      <NavLink to='/login'>Have an account?</NavLink>
      <form className='form flex'>
        <input type='text' name='name' placeholder='Your Name' className='form-control' />
        <input type='email' name='email' placeholder='Email' className='form-control' />
        <input type='password' name='password' placeholder='Password' className='form-control' />
        <input type='submit' value="Sign up" className='form-control submit-btn' />
      </form>
    </section>
  )
}