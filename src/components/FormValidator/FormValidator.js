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
        } else if (!/^[а-яА-ЯёЁa-zA-Z\s\-]+$/.test(value)) {
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

// export class FormValidator {
//   constructor(validationSettings, formElement) {
//     this._element = formElement;
//     this._input = validationSettings.inputSelector;
//     this._submit = this._element.querySelector(validationSettings.submitButtonSelector);
//     this._inactive = validationSettings.inactiveButtonClass;
//     this._inputError = validationSettings.inputErrorClass;
//     this._error = validationSettings.errorClass;
//     this._inputList = Array.from(this._element.querySelectorAll(this._input));
//   }

//   // показать сообщение об ошибке
//   _showError(inputElement) {
//     const errorElement = this._element.querySelector(`#${inputElement.id}-error`);
//     inputElement.classList.add(this._inputError);
//     errorElement.classList.add(this._error);
//     errorElement.textContent = inputElement.validationMessage;
//   }

//   // скрыть сообщение об ошибке
//   _hideError(inputElement) {
//     const errorElement = this._element.querySelector(`#${inputElement.id}-error`);
//     inputElement.classList.remove(this._inputError);
//     errorElement.classList.remove(this._error);
//     errorElement.textContent = '';
//   }

// // проверка валидности поля
//   _checkInputValidity(inputElement) {
//     if (!inputElement.validity.valid) {
//       this._showError(inputElement);
//     }
//     else {
//       this._hideError(inputElement);
//     }
//   }

//   //проверка валидности полей в форме
//   _hasInvalidInput() {
//     return this._inputList.some(inputElement => {
//     return !inputElement.validity.valid;
//     });
//   }

// // переключение кнопки сабмита
//   _toggleButtonState() {
//   if (this._hasInvalidInput()) {
//     this._submit.classList.add(this._inactive);
//     this._submit.disabled = true;
//   } else {
//     this._submit.classList.remove(this._inactive);
//     this._submit.disabled = false;
//   }
// }

// // добавляем слушатели к полям формы
//   _setInputListeners() {
//     this._toggleButtonState();
//     this._inputList.forEach(inputElement => {
//       inputElement.addEventListener('input', () => {
//         this._checkInputValidity(inputElement);
//         this._toggleButtonState();
//       });
//     });
//   }

//   clearErrors() {
//     this._inputList.forEach(inputElement => {
//       this._hideError(inputElement);
//       this._toggleButtonState();
//     });
//   }

// // включаем валидацию
//   enableValidation() {
//   this._element.addEventListener('submit', evt => {
//     // отключить обработку по умолчанию
//     evt.preventDefault();
//     });
//   this._setInputListeners();
//   }

// }
