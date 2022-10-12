import { useState } from 'react'; 

import useInput from '../hooks/useInput'; 


const SimpleInput = (props) => { 

  const { 
    value: enteredName, 
    isValid: enteredNameIsValid, 
    hasError: nameInputHasError, 
    valueChangeHandler: nameChangedHandler, 
    inputBlurHandler: nameBlurHandler, 
    reset: resetNameInput 
  } = useInput(value => value.trim() !== ''); 
  // Remove the space with the ".trim()" and try if is not empty with "!== ''"

  // State of email input by default is empty 
  const [enteredEmail, setEnteredEmail] = useState(''); 
  // Check if user is in email input 
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false); 

  // Check if user use an @ in the email input
  const enteredEmailIsValid = enteredEmail.includes('@'); 
  const enteredEmailIsInvalid = !enteredEmailIsValid && enteredEmailTouched; 

  // By default formIsValid is false
  let formIsValid = false; 

  // If all condition is true then the formIsValid is true
  if (enteredNameIsValid && enteredEmailIsValid) { 
    formIsValid = true; 
  } 

  const emailInputChangeHandler = (event) => { 
    setEnteredEmail(event.target.value); 
  }; 

  const emailInputBlurHandler = (event) => { 
    setEnteredEmailTouched(true); 
  }; 

  const formSubmissionHandler = (event) => { 
    event.preventDefault(); 

    if (!enteredNameIsValid) { 
      return; 
    } 

    // console.log(enteredName); 

    // nameInputRef.current.value = ''; => NOT IDEAL, DON'T MANIPULATE THE DOM 
    resetNameInput(); 

    setEnteredEmail(''); 

    setEnteredEmailTouched(false); 
  }; 

  // Ternary for change class of name input (display red input)
  const nameInputClasses = nameInputHasError  ? 'form-control invalid' : 'form-control'; 
  
  // Ternary for change class of email input (display red input)
  const emailInputClasses = enteredEmailIsInvalid ? 'form-control invalid' : 'form-control'; 

 
    return ( 
    <form onSubmit={formSubmissionHandler}> 
      <div className={nameInputClasses}> 
        <label htmlFor='name'>Your Name</label> 
        <input 
          type='text' 
          id='name' 
          onChange={nameChangedHandler} 
          onBlur={nameBlurHandler} 
          value={enteredName} 
        /> 

        {/* Display error message in red */}
        {nameInputHasError && ( 
          <p className='error-text'>Name must not be empty.</p> 
        )} 

      </div> 
      <div className={emailInputClasses}> 
        <label htmlFor='email'>Your E-Mail</label> 
        <input 
          type='email' 
          id='email' 
          onChange={emailInputChangeHandler} 
          onBlur={emailInputBlurHandler} 
          value={enteredEmail} 
        /> 

        {/* Display error message in red */}
        {enteredEmailIsInvalid && ( 
          <p className='error-text'>Please enter a valid email.</p> 
        )} 

      </div> 
      <div className='form-actions'> 
        <button disabled={!formIsValid}>Submit</button> 
      </div> 
    </form> 
  ); 
}; 

export default SimpleInput; 