import React from 'react'
import './styles/form.scss'

export default function LoginForm() {
  return (
    <div className='form'>
      <h1>Welcome Back !</h1>
      <p>Sign in to continue to API Monitoring.</p>
        <form>
            <label>
              Email
              <input type="email" name="email" class="form-control" placeholder='Enter Email'/>
            </label>
            <label>
              <div className='password'>
                Password
                <a href="/#">Forgot password ?</a>
              </div>
              <input type="password" name="password" class="form-control" placeholder='Enter password'/>
            </label>
            <label>
              <input type="checkbox" name="remember-me"/>
              Reminder me
            </label>
            <input type="submit" value="Log in" />
      </form>
      <p></p>
    </div>
  )
}
