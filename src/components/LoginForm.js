import React from 'react'
import './styles/form.scss'

import facebook from '../img/login/facebook.png'
import twitter from '../img/login/twitter.png'
import googleplus from '../img/login/google-plus.png'


export default function LoginForm() {
  return (
    <div className='form'>
      <div className="form-text">
        <h1>Welcome Back !</h1>
        <p>Sign in to continue to API Monitoring.</p>
        <form>
            <label className='email-label'>
              Email
              <input type="email" name="email" class="form-control" placeholder='Enter Email'/>
            </label>
            <label className='password-label'>
              <div className='password'>
                Password
                <a href="/#">Forgot password ?</a>
              </div>
              <input type="password" name="password" class="form-control" placeholder='Enter password'/>
            </label>
            <label className='checkbox-label'>
              <input type="checkbox" name="remember-me"/>
              Reminder me
            </label>
            <input type="submit" value="Log in" className='button'/>
        </form>
      </div>
      <div className="sign-in">
        <p>Sign in with</p>
        <div className='icon-3-column'>
          <div className='facebook'>
            <img src={facebook} alt="Se connecter avec Facebook" width={35}/>
          </div>
          <div className="twitter">
            <img src={twitter} alt="Se connecter avec Twitter" width={35}/>

          </div>
          <div className="google">
            <img src={googleplus} alt="Se connecter avec Google Plus" width={35}/>
          </div>
        </div>
        <p>Don't have an account ? <a href="/#">Signup now</a></p>
      </div>
      <div className="credit">
        <p>©2022 Barray Lucas. Crafted with by React</p>
      </div>
    </div>
  )
}
