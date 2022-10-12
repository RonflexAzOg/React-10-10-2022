import { useState } from 'react'; 

const useInput = (validateValue) => { 

    // State of the enteredValue by default is empty
    const [enteredValue, setEnteredValue] = useState('');
    // Check if user is in input 
    const [isTouched, setIsTouched] = useState(false); 

    // If input is not empty return true
    const valueIsValid = validateValue(enteredValue); 
    // If there is an error with an input return true
    const hasError = !valueIsValid && isTouched; 


    // If user is in input then change the value of setIsTouched()
    const valueChangeHandler = (event) => { 
        setEnteredValue(event.target.value); 
    };

    // If user is in input then change the value of setIsTouched()
    const inputBlurHandler = (event) => { 
        setIsTouched(true); 
    }; 

    // Reset all value in input
    const reset = () => { 
        setEnteredValue(''); 
        setIsTouched(false); 
    };

    return { 
        value: enteredValue, 
        isValid: valueIsValid, 
        hasError, 
        valueChangeHandler, 
        inputBlurHandler, 
        reset 
    }; 
}; 

export default useInput; 