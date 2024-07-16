import { useState } from 'react';

export function useInput(defaultValue, validationFunction) {
  const [formState, setFormState] = useState({
    value: defaultValue,
    hasError: false,
    isTouched: false,
  });

  const handleInputChange = (event) => {
    setFormState((prevState) => {
      return {
        ...prevState,
        value: event.target.value,
        isTouched: false,
      };
    });
  };

  const handleBlur = (event) => {
    setFormState((prevState) => {
      return {
        ...prevState,
        isTouched: true,
        hasError: validationFunction(prevState.value),
      };
    });
  };

  return {
    value: formState.value,
    error: formState.isTouched && validationFunction(formState.value),
    handleInputChange: handleInputChange,
    handleBlur: handleBlur,
  };
}
