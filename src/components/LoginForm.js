import React, {  useState, useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import './styles/LoginForm.scss'

import facebook from '../img/login/facebook.png'
import twitter from '../img/login/twitter.png'
import googleplus from '../img/login/google-plus.png'


export default function LoginForm() {

  const navigate = useNavigate();

  // Email
  const [emailState, setEmailState] = useState('')
  const [emailIsValid, setEmailIsValid] = useState(false)
  const [emailIsTouched, setEmailIsTouched] = useState(false)

  useEffect(()=>{
    if (emailIsValid) console.log('email is Valid')
  }, [emailIsValid])

  const emailChangeHandler = (e) => {
    setEmailState(e.target.value)
  }

  const emailBlurHandler = (e) => {
    setEmailIsTouched(true);

    if(emailState.trim() === '') {
      setEmailIsValid(false)
      return;
    }
  }

  // Password
  const [passwordState, setPasswordState] = useState('')
  const [passwordIsValid, setPasswordIsValid] = useState(false)
  const [passwordIsTouched, setPasswordIsTouched] = useState(false)
 
  useEffect(()=>{
    if (passwordIsValid) console.log('password is Valid')
  }, [passwordIsValid])

  const passwordChangeHandler = (e) => {
    setPasswordState(e.target.value)
  }

  const passwordBlurHandler = (e) => {
    setPasswordIsTouched(true);

    if(passwordState.trim() === '') {
      setPasswordIsValid(false)
      return;
    }
  }
 
  //  Form
  const formSubmissionHandler = (event) => {
    event.preventDefault()
    setEmailIsTouched(true);
    setPasswordIsTouched(true);

    if(emailState.trim() === '') {
      setEmailIsValid(false)
      return;
    }
    if(passwordState.trim() === '') {
      setPasswordIsValid(false)
      return;
    }
    setEmailIsValid(true);
    setPasswordIsValid(true);
    // .... traitement exemple: requete POST
    setEmailState('');
    setPasswordState('');
    
    navigate('/dashboard')
  }

  // Email
  const emailInputIsinvalid = !emailIsValid &&  emailIsTouched;
  const emailInputClasses = emailInputIsinvalid ? 'form-control invalid' : 'form-control';

  // Password
  const passwordInputIsinvalid = !passwordIsValid &&  passwordIsTouched;
  const passwordInputClasses = passwordInputIsinvalid ? 'form-control invalid' : 'form-control';


  return (
    <div className='form'>
      <div className="form-text">
        <h1>Welcome Back !</h1>
        <p>Sign in to continue to API Monitoring.</p>
        <form onSubmit={formSubmissionHandler}>
            <label htmlFor='email' className='email-label'>
              Email
              <input 
              value={emailState}
              onChange={emailChangeHandler} 
              onBlur={emailBlurHandler}
              type='email' 
              id='email' 
              className={emailInputClasses} 
              placeholder='Enter Email'/>
            </label>

            {emailInputIsinvalid && (
              <p className='error-text'>Email cannot be empty</p>
            )}

            <label className='password-label'>
              <div className='password'>
                Password
                <a href="/#">Forgot password ?</a>
              </div>
              <input 
                value={passwordState}
                onChange={passwordChangeHandler} 
                onBlur={passwordBlurHandler}
                type='password' 
                id='password' 
                className={passwordInputClasses} 
                placeholder='Enter password'/>

              {passwordInputIsinvalid && (
                <p className='error-text'>Password cannot be empty</p>
              )}
              
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
        <p>©2022 Barray Lucas. Crafted with ♥ by React</p>
      </div>
    </div>
  )
}
