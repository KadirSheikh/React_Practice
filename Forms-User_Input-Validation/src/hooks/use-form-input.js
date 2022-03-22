// import { useState } from "react";
import { useReducer } from "react";

const useFormInput = (validateValue) => {
  const initialInputState = {
    value: "",
    isTouched: false,
  };

  const inputStateReducer = (state, action) => {
    if (action.type === "INPUT") {
      return { value: action.value, isTouched: state.isTouched };
    }

    if (action.type === "BLUR") {
      return { value: state.value, isTouched: true };
    }

    if (action.type === "RESET") {
      return { value: "", isTouched: false };
    }

    return initialInputState;
  };

  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  // const [value, setValue] = useState("");
  // const [isTouched, setIsTouched] = useState(false);

  const isValid = validateValue(inputState.value);
  const hasError = !isValid && inputState.isTouched;

  const inputChangeHander = (event) => {
    dispatch({ type: "INPUT", value: event.target.value });
    // setValue(event.target.value);
  };

  const inputBlurHandler = () => {
    dispatch({ type: "BLUR" });
    // setIsTouched(true);
  };

  const resetValue = () => {
    dispatch({ type: "RESET" });
    // setValue("");
    // setIsTouched(false);
  };

  return {
    value: inputState.value,
    isValid,
    hasError,
    inputChangeHander,
    inputBlurHandler,
    resetValue,
  };
};

export default useFormInput;
