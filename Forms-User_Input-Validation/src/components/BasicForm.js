import useInput from "../hooks/use-form-input";

const BasicForm = (props) => {
  const isNotEmpty = (value) => value.trim() !== "";
  const isEmail = (value) => value.includes("@");

  const {
    value: fName,
    isValid: fNameIsValid,
    hasError: fNameHasError,
    inputChangeHander: fNameInputChangeHander,
    inputBlurHandler: fNameInputBlurHandler,
    resetValue: fNameResetValue,
  } = useInput(isNotEmpty);

  const {
    value: lName,
    isValid: lNameIsValid,
    hasError: lNameHasError,
    inputChangeHander: lNameInputChangeHander,
    inputBlurHandler: lNameInputBlurHandler,
    resetValue: lNameResetValue,
  } = useInput(isNotEmpty);

  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailHasError,
    inputChangeHander: emailInputChangeHander,
    inputBlurHandler: emailInputBlurHandler,
    resetValue: emailResetValue,
  } = useInput(isEmail);

  let formIsValid = false;

  if (fNameIsValid && lNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    const data = {
      fName,
      lName,
      email,
    };

    console.table(data);

    fNameResetValue();
    lNameResetValue();
    emailResetValue();
  };

  const fNameClass = fNameHasError ? "form-control invalid" : "form-control";
  const lNameClass = lNameHasError ? "form-control invalid" : "form-control";
  const emailClass = lNameHasError ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={fNameClass}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            value={fName}
            onChange={fNameInputChangeHander}
            onBlur={fNameInputBlurHandler}
            id="name"
          />

          {fNameHasError && (
            <p className="error-text">First Name is required.</p>
          )}
        </div>

        <div className={lNameClass}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={lName}
            onChange={lNameInputChangeHander}
            onBlur={lNameInputBlurHandler}
          />
          {lNameHasError && (
            <p className="error-text">Last Name is required.</p>
          )}
        </div>
      </div>
      <div className={emailClass}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="email"
          id="name"
          value={email}
          onChange={emailInputChangeHander}
          onBlur={emailInputBlurHandler}
        />
        {emailHasError && (
          <p className="error-text">A valid eamil is required.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
