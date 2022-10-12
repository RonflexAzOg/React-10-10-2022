import React, {  useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import useInput from '../../hooks/useInput'

import facebook from '../../img/login/facebook.png';
import twitter from '../../img/login/twitter.png';
import googleplus from '../../img/login/google-plus.png';

import '../styles/LoginForm.scss';


export default function LoginForm() {

  const navigate = useNavigate();

  const { 
      value: enteredEmail, 
      isValid: enteredEmailIsValid, 
      hasError: emailInputHasError, 
      valueChangeHandler: emailChangedHandler, 
      inputBlurHandler: emailBlurHandler, 
      reset: resetEmailInput 
  } = useInput(value => value.trim() !== '' && value.includes('@')); 
  // Add condition for email input

  const { 
      value: enteredPassword, 
      isValid: enteredPasswordIsValid, 
      hasError: passwordInputHasError, 
      valueChangeHandler: passwordChangedHandler, 
      inputBlurHandler: passwordBlurHandler, 
      reset: resetPasswordInput 
  } = useInput(value => value.trim() !== '' && value.length >= 8); 
  // Add condition for password input"


  // By default formIsValid is false
  let formIsValid = false; 

  // If all condition is true then the formIsValid is true
  if (enteredEmailIsValid && enteredPasswordIsValid) { 
      formIsValid = true; 
  } 
 
  //  Form
  const formSubmissionHandler = (event) => {
    event.preventDefault()

    if (!enteredEmailIsValid) { 
      return; 
    } 

    if (!enteredPasswordIsValid) { 
      return; 
    } 

    resetPasswordInput(); 
    resetEmailInput();
    
    navigate('/dashboard')
  }

  // Email
  const emailInputClasses = emailInputHasError ? 'form-control invalid' : 'form-control';

  // Password
  const passwordInputClasses = passwordInputHasError ? 'form-control invalid' : 'form-control';


  return (
    <div className='form'>
      <div className="form-text">
        <h1>Welcome Back !</h1>
        <p>Sign in to continue to API Monitoring.</p>
        <form onSubmit={formSubmissionHandler}>
            <label htmlFor='email' className='email-label'>
              Email
              <input 
              value={enteredEmail}
              onChange={emailChangedHandler} 
              onBlur={emailBlurHandler}
              type='email' 
              id='email' 
              className={emailInputClasses} 
              placeholder='Enter Email'/>
            </label>

            {emailInputHasError && (
              <p className='error-text'>Email cannot be empty</p>
            )}

            <label className='password-label'>
              <div className='password'>
                Password
                <a href="/#">Forgot password ?</a>
              </div>
              <input 
                value={enteredPassword}
                onChange={passwordChangedHandler} 
                onBlur={passwordBlurHandler}
                type='password' 
                id='password' 
                className={passwordInputClasses} 
                placeholder='Enter password'/>

              {passwordInputHasError && (
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
