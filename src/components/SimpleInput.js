import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(true);
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailIsValid, setEnteredEmailIsValid] = useState(true);

  const nameInputChangeHandler = (e) => {
    setEnteredNameIsValid(true);
    setEnteredName(e.target.value);
  };

  const formBlurHandler = () => {
    if (enteredName.trim()) {
      console.log(enteredName, " from formBlur");
    } else {
      setEnteredNameIsValid(false);
      return;
    }
  };

  const emailInputChangeHandler = (e) => {
    setEnteredEmailIsValid(true);
    setEnteredEmail(e.target.value);
  };

  const emailFormBlurHandler = () => {
    if (enteredEmail.trim() && enteredEmail.includes("@")) {
      console.log(enteredEmail, " from formBlur");
    } else {
      setEnteredEmailIsValid(false);
      return;
    }
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (enteredName.trim()) {
      console.log(enteredName);
    } else {
      setEnteredNameIsValid(false);
      return;
    }
  };

  const formClassName =
    enteredNameIsValid && enteredEmailIsValid
      ? "form-control"
      : "form-control invalid";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={formClassName}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={formBlurHandler}
        />
        {!enteredNameIsValid && (
          <p className="error-text">Name should not be empty</p>
        )}
      </div>
      <div className={formClassName}>
        <label htmlFor="email">Your email</label>
        <input
          type="email"
          id="email"
          onChange={emailInputChangeHandler}
          onBlur={emailFormBlurHandler}
        />
        {!enteredEmailIsValid && (
          <p className="error-text">
            Email should not be empty & should contain @
          </p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
