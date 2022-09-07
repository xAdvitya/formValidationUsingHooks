import { useState } from 'react';

const useInputPractice = (validate) => {
  const [isTouched, setIsTouched] = useState(false);
  const [enteredValue, setEnteredValue] = useState('');

  const inputIsValid = validate(enteredValue);
  const hasError = !inputIsValid && isTouched;

  const reset = () => {
    setEnteredValue('');
    setIsTouched(false);
  };

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = (event) => {
    setIsTouched(true);
  };

  return {
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    value: enteredValue,
    isValid: inputIsValid,
    reset,
  };
};

export default useInputPractice;
