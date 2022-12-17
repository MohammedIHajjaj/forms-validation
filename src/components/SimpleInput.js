import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    hasError: nameInputHasError,
    inputChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
  } = useInput((value) => value.trim !== "");
  const {
    value: enteredEmail,
    hasError: emailInputHasError,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
  } = useInput((value) => value.trim() !== "" && value.includes("@"));

  const formSubmitHandler = (e) => {
    e.preventDefault();
    // if (enteredName.trim()) {
    //   console.log(enteredName);
    // } else {
    //   setEnteredNameIsValid(false);
    //   return;
    // }
  };

  const nameFormClassName = nameInputHasError
    ? "form-control invalid"
    : "form-control";
  const emailFormClassName = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameFormClassName}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
        />
        {nameInputHasError && (
          <p className="error-text">Name should not be empty</p>
        )}
      </div>
      <div className={emailFormClassName}>
        <label htmlFor="email">Your email</label>
        <input
          type="email"
          id="email"
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailInputHasError && (
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
