import React from 'react';

import useInput from '../../hooks/useInput';

function AddUser(props) {

    // Regex
    let regexPhone = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;


    // Input
    const { 
        value: enteredFirstName, 
        isValid: enteredFirstNameIsValid, 
        hasError: firstNameInputHasError, 
        valueChangeHandler: firstNameChangedHandler, 
        inputBlurHandler: firstNameBlurHandler, 
        reset: resetFirstNameInput 
    } = useInput(value => value.trim() !== '' && value.length > 1); 
    const { 
        value: enteredLastName, 
        isValid: enteredLastNameIsValid, 
        hasError: lastNameInputHasError, 
        valueChangeHandler: lastNameChangedHandler, 
        inputBlurHandler: lastNameBlurHandler, 
        reset: resetLastNameInput 
    } = useInput(value => value.trim() !== '' && value.length > 1);
    const { 
        value: enteredUsername, 
        isValid: enteredUsernameIsValid, 
        hasError: usernameInputHasError, 
        valueChangeHandler: usernameChangedHandler, 
        inputBlurHandler: usernameBlurHandler, 
        reset: resetUsernameInput 
    } = useInput(value => value.trim() !== '' && value.length > 1); 
    const { 
        value: enteredEmail, 
        isValid: enteredEmailIsValid, 
        hasError: emailInputHasError, 
        valueChangeHandler: emailChangedHandler, 
        inputBlurHandler: emailBlurHandler, 
        reset: resetEmailInput 
    } = useInput(value => value.trim() !== '' && value.includes('@')); 
    const { 
        value: enteredStreetNumber, 
        isValid: enteredStreetNumberIsValid, 
        hasError: streetNumberInputHasError, 
        valueChangeHandler: streetNumberChangedHandler, 
        inputBlurHandler: streetNumberBlurHandler, 
        reset: resetStreetNumberInput 
    } = useInput(value => value.trim() !== '' && isNaN(value) === false); 
    const { 
        value: enteredStreetName, 
        isValid: enteredStreetNameIsValid, 
        hasError: streetNameInputHasError, 
        valueChangeHandler: streetNameChangedHandler, 
        inputBlurHandler: streetNameBlurHandler, 
        reset: resetStreetNameInput 
    } = useInput(value => value.trim() !== '' && value.length > 1); 
    const { 
        value: enteredPostcode, 
        isValid: enteredPostcodeIsValid, 
        hasError: postcodeInputHasError, 
        valueChangeHandler: postcodeChangedHandler, 
        inputBlurHandler: postcodeBlurHandler, 
        reset: resetPostcodeInput 
    } = useInput(value => value.trim() !== '' && value.length > 4);
    const { 
        value: enteredState, 
        isValid: enteredStateIsValid, 
        hasError: stateInputHasError, 
        valueChangeHandler: stateChangedHandler, 
        inputBlurHandler: stateBlurHandler, 
        reset: resetStateInput 
    } = useInput(value => value.trim() !== '' && value.length > 1);
    const { 
        value: enteredCountry, 
        isValid: enteredCountryIsValid, 
        hasError: countryInputHasError, 
        valueChangeHandler: countryChangedHandler, 
        inputBlurHandler: countryBlurHandler, 
        reset: resetCountryInput 
    } = useInput(value => value.trim() !== '' && value.length > 3);
    const { 
        value: enteredPhone, 
        isValid: enteredPhoneIsValid, 
        hasError: phoneInputHasError, 
        valueChangeHandler: phoneChangedHandler, 
        inputBlurHandler: phoneBlurHandler, 
        reset: resetPhoneInput 
    } = useInput(value => value.trim() !== '' && value.match(regexPhone)); 
    const { 
        value: enteredPicture, 
        isValid: enteredPictureIsValid, 
        hasError: pictureInputHasError, 
        valueChangeHandler: pictureChangedHandler, 
        inputBlurHandler: pictureBlurHandler, 
        reset: resetPictureInput 
    } = useInput(value => value); 
    

  function submitHandler(event) {
        event.preventDefault();

        if (!enteredFirstNameIsValid) { 
            return; 
        }
        if (!enteredLastNameIsValid) { 
            return; 
        }
        if (!enteredUsernameIsValid) { 
            return; 
        }
        if (!enteredEmailIsValid) { 
            return; 
        }
        if (!enteredStreetNumberIsValid) { 
            return; 
        }
        if (!enteredStreetNameIsValid) { 
            return; 
        }
        if (!enteredPostcodeIsValid) { 
            return; 
        }
        if (!enteredStateIsValid) { 
            return; 
        }
        if (!enteredCountryIsValid) { 
            return; 
        }
        if (!enteredPhoneIsValid) { 
            return; 
        }
        if (!enteredPictureIsValid) { 
            return; 
        }

        // Define user to send in props 
        const user = {
            // titleName: titleNameRef.current.value,
            firstName: enteredFirstName,
            lastName: enteredLastName,
            username: enteredUsername,
            email: enteredEmail,
            streetNumber: enteredStreetNumber,
            streetName: enteredStreetName,
            postcode: enteredPostcode,
            state: enteredState,
            country: enteredCountry,
            phone: enteredPhone,
            picture: enteredPicture,
        };

        // Reset input
        resetFirstNameInput();
        resetLastNameInput();
        resetUsernameInput();
        resetEmailInput();
        resetStreetNumberInput();
        resetStreetNameInput();
        resetPostcodeInput();
        resetStateInput();
        resetCountryInput();
        resetPhoneInput();
        resetPictureInput();

        props.onAddUser(user);
  }

    // Error  
    const firstNameInputClasses = firstNameInputHasError ? 'form-control invalid' : 'form-control';
    const lastNameInputClasses = lastNameInputHasError ? 'form-control invalid' : 'form-control';
    const usernameInputClasses = usernameInputHasError ? 'form-control invalid' : 'form-control';
    const emailInputClasses = emailInputHasError ? 'form-control invalid' : 'form-control';
    const streetNumberInputClasses = streetNumberInputHasError ? 'form-control invalid' : 'form-control';
    const streetNameInputClasses = streetNameInputHasError ? 'form-control invalid' : 'form-control';
    const postcodeInputClasses = postcodeInputHasError ? 'form-control invalid' : 'form-control';
    const stateInputClasses = stateInputHasError ? 'form-control invalid' : 'form-control';
    const countryInputClasses = countryInputHasError ? 'form-control invalid' : 'form-control';
    const phoneInputClasses = phoneInputHasError ? 'form-control invalid' : 'form-control';    
    const pictureInputClasses = pictureInputHasError ? 'form-control invalid' : 'form-control';    


    return (
        <form onSubmit={submitHandler}>
            <div className="conten-form">
                <h3>Your identity</h3>
                <div className='input-form'>
                    <label htmlFor='first-name'>First name</label>
                    <input 
                    type="text"
                    id='first-name'
                    value={enteredFirstName}
                    onChange={firstNameChangedHandler}
                    onBlur={firstNameBlurHandler} 
                    className={firstNameInputClasses} />
                
                    {firstNameInputHasError && (
                        <p className='error-text'>First name cannot be empty</p>
                    )}

                </div>
                <div className='input-form'>
                    <label htmlFor='last-name'>Last name</label>
                    <input
                    type="text"
                    id='last-name'
                    value={enteredLastName}
                    onChange={lastNameChangedHandler} 
                    onBlur={lastNameBlurHandler} 
                    className={lastNameInputClasses}/>

                    {lastNameInputHasError && (
                        <p className='error-text'>Last name cannot be empty</p>
                    )}

                </div>
                <div className='input-form'>
                    <label htmlFor='username'>Username</label>
                    <input
                    type="text"
                    id='username'
                    value={enteredUsername}
                    onChange={usernameChangedHandler}
                    onBlur={usernameBlurHandler} 
                    className={usernameInputClasses} />

                    {usernameInputHasError && (
                        <p className='error-text'>Username cannot be empty</p>
                    )}

                </div>
                <div className='input-form'>
                    <label htmlFor='email'>Email</label>
                    <input
                    type="email"
                    id='email'
                    value={enteredEmail}
                    onChange={emailChangedHandler}
                    onBlur={emailBlurHandler} 
                    className={emailInputClasses} />

                    {emailInputHasError && (
                        <p className='error-text'>Email cannot be empty</p>
                    )}

                </div>
                <div className='input-form'>
                    <label htmlFor='street-number'>Street number</label>
                    <input
                    type="number"
                    id='street-number'
                    value={enteredStreetNumber}
                    onChange={streetNumberChangedHandler}
                    onBlur={streetNumberBlurHandler} 
                    className={streetNumberInputClasses} />

                    {streetNumberInputHasError && (
                        <p className='error-text'>The street number cannot be empty</p>
                    )}

                </div>
                <div className='input-form'>
                    <label htmlFor='street-name'>Street name</label>
                    <input
                    type="text"
                    id='street-name'
                    value={enteredStreetName}
                    onChange={streetNameChangedHandler}
                    onBlur={streetNameBlurHandler} 
                    className={streetNameInputClasses} />

                    {streetNameInputHasError && (
                        <p className='error-text'>The street name cannot be empty</p>
                    )}

                </div>
                <div className='input-form'>
                    <label htmlFor='postcode'>Postcode</label>
                    <input
                    type="text"
                    id='postcode'
                    value={enteredPostcode}
                    onChange={postcodeChangedHandler}
                    onBlur={postcodeBlurHandler} 
                    className={postcodeInputClasses} />

                    {postcodeInputHasError && (
                        <p className='error-text'>The postcode cannot be empty</p>
                    )}

                </div>
                <div className='input-form'>
                    <label htmlFor='state'>State</label>
                    <input
                    type="text"
                    id='state'
                    value={enteredState}
                    onChange={stateChangedHandler}
                    onBlur={stateBlurHandler} 
                    className={stateInputClasses} />

                    {stateInputHasError && (
                        <p className='error-text'>The state cannot be empty</p>
                    )}

                </div>
                <div className='input-form'>
                    <label htmlFor='country'>Country</label>
                    <input
                    type="text"
                    id='country'
                    value={enteredCountry}
                    onChange={countryChangedHandler}
                    onBlur={countryBlurHandler} 
                    className={countryInputClasses} />

                    {countryInputHasError && (
                        <p className='error-text'>The country cannot be empty</p>
                    )}

                </div>
                <div className='input-form'>
                    <label htmlFor='phone'>Phone</label>
                    <input
                    type="tel"
                    id='phone'
                    value={enteredPhone}
                    onChange={phoneChangedHandler}
                    onBlur={phoneBlurHandler} 
                    className={phoneInputClasses} />

                    {phoneInputHasError && (
                        <p className='error-text'>The phone cannot be empty</p>
                    )}

                </div>
                <div className='input-form'>
                    <label htmlFor='picture'>Picture</label>
                    <input
                    type="file"
                    id='picture'
                    name="picture"
                    accept="image/png, image/jpeg"
                    value={enteredPicture}
                    onChange={pictureChangedHandler}
                    onBlur={pictureBlurHandler}
                    className={pictureInputClasses} />

                    {pictureInputHasError && (
                        <p className='error-text'>The picture cannot be empty</p>
                    )}

                </div>
                <button>Add User</button>
            </div>
        </form>
  );
}

export default AddUser;