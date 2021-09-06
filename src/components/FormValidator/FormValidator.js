import React, { useCallback } from 'react';

export function useFormWithValidation() {
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setValues({...values, [name]: value});
    setErrors({...errors, [name]: target.validationMessage });

    setIsValid(target.closest("form").checkValidity() && Object.values(errors).join('').length === 0);
    switch (name) {
      case 'email':
        if (!value) {
          setErrors({email: 'Пожалуйста, введите адрес почты.'});
        }
        else if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)) {
          setErrors({email: 'Пожалуйста, введите корректный адрес почты.'});
        }
      break;
      case "name":
        if (!value) {
          setErrors({name: 'Пожалуйста, введите имя.'});
        } else if (!/^[а-яА-ЯёЁa-zA-Z\s-]+$/.test(value)) {
          setErrors({name: 'Пожалуйста, введите корректное имя.'});
        }
        else if (value.length < 2  || value.length > 30) {
          setErrors({name: 'Имя слишком короткое или длинное.'});
        }
      break;
      case "password":
        if (!value) {
          setErrors({password: 'Пожалуйста, введите пароль.'});
        }
      break;
      default:
      break;
    }
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, setValues, handleChange, errors, isValid, setIsValid, resetForm };
}
