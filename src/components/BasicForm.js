import useInputPractice from '../hooks/use-inputPractice';

const BasicForm = (props) => {
  const {
    value: firstNameValue,
    hasError: firstNameInputHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurChangeHandler,
    isValid: firstNameIsValid,
    reset: resetFirstName,
  } = useInputPractice((value) => value.trim() !== '');

  const {
    value: lastNameValue,
    hasError: lastNameInputHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    isValid: lastNameIsValid,
    reset: resetLastName,
  } = useInputPractice((value) => value.trim() !== '');

  const {
    value: mailValue,
    hasError: mailInputHasError,
    valueChangeHandler: mailChangeHandler,
    inputBlurHandler: mailBlurHandler,
    isValid: mailIsValid,
    reset: resetMail,
  } = useInputPractice((value) => value.includes('@'));

  const firstNameClasses = firstNameInputHasError
    ? 'form-control invalid'
    : 'form-control';

  const lastNameClasses = lastNameInputHasError
    ? 'form-control invalid'
    : 'form-control';

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    resetFirstName();
    resetLastName();
    resetMail();
  };

  let formIsValid = false;

  if (firstNameIsValid && lastNameIsValid && mailIsValid) {
    formIsValid = true;
  }

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="control-group">
        <div className={firstNameClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={firstNameValue}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurChangeHandler}
          />
          {firstNameInputHasError && (
            <p className="error-text">first name cant be empty</p>
          )}
        </div>

        <div className={lastNameClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={lastNameValue}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
          {lastNameInputHasError && (
            <p className="error-text">last name cant be empty</p>
          )}
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="name">E-Mail Address</label>
        <input
          value={mailValue}
          onChange={mailChangeHandler}
          onBlur={mailBlurHandler}
          type="text"
          id="name"
        />
        {mailInputHasError && <p className="error-text">enter valid mail</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
