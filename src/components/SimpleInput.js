import { useEffect, useState } from 'react';
import useInput from '../hooks/use-input';

const SimpleInput = (props) => {
  const {
    value: enteredName,
    hasError: nameInputHasError,
    isvalid: enteredNameIsValid,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== '');

  const {
    value: enteredMail,
    hasError: mailInputHasError,
    isvalid: enteredMailIsValid,
    valueChangeHandler: mailChangeHandler,
    inputBlurHandler: mailBlurHandler,
    reset: resetMailInput,
  } = useInput((value) => value.includes('@'));

  let formIsValid = false;

  if (enteredNameIsValid && enteredMailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    resetNameInput();
    resetMailInput();
  };

  const nameInputClasses = nameInputHasError
    ? 'form-control invalid'
    : 'form-control';

  const mailInputClasses = mailInputHasError
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameInputHasError && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>

      <div className={mailInputClasses}>
        <label htmlFor="email">your Mail</label>
        <input
          type="email"
          id="email"
          onChange={mailChangeHandler}
          onBlur={mailBlurHandler}
          value={enteredMail}
        />
        {mailInputHasError && (
          <p className="error-text">enter a valid mail.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
