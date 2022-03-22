import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: name,
    hasError: nameError,
    valueIsValid: nameIsValid,
    reset: nameReset,
    inputChangeHander: nameInputChangeHander,
    inputBlurHandler: nameInputBlurHandler,
  } = useInput((value) => value.trim() !== "");

  const {
    value: email,
    hasError: emailError,
    valueIsValid: emailIsValid,
    reset: emailReset,
    inputChangeHander: emailInputChangeHander,
    inputBlurHandler: emailInputBlurHandler,
  } = useInput((value) => value.includes("@"));

  let formIsValid = false;

  if (nameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (!nameIsValid || !emailIsValid) {
      return;
    }

    nameReset();

    emailReset();
  };

  const nameInputClass = nameError ? "form-control invalid" : "form-control";

  const emailInputClass = emailError ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className={nameInputClass}>
        <label htmlFor="name">Your Name</label>
        <input
          onChange={nameInputChangeHander}
          onBlur={nameInputBlurHandler}
          type="text"
          id="name"
          value={name}
        />

        {nameError && <p className="error-text">Name must not be empty</p>}
      </div>

      <div className={emailInputClass}>
        <label htmlFor="email">Your Email</label>
        <input
          onChange={emailInputChangeHander}
          onBlur={emailInputBlurHandler}
          type="text"
          id="email"
          value={email}
        />

        {emailError && <p className="error-text">Email must not be empty</p>}
      </div>

      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
