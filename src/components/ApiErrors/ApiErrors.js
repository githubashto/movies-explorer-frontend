import './ApiErrors.css';
import React from 'react';

function ApiErrors(props) {
  const {errName, className} = props;

  function errorText(){
    switch(errName){
      case 'wrong-credentials':
        return 'Вы ввели неправильный логин или пароль.';
      case 'notoken':
        return 'При авторизации произошла ошибка. Токен не передан или передан не в том формате';
      case 'nonvalid-token':
        return 'При авторизации произошла ошибка. Переданный токен некорректен.'
      case 'email-exists':
        return 'Пользователь с таким email уже существует.'
      case 'register-err':
          return 'При регистрации пользователя произошла ошибка.'
      case 'update-err':
          return 'При обновлении профиля произошла ошибка.'
      case 'err-500':
        return 'На сервере произошла ошибка.'
      case 'err-404':
        return 'Страница по указанному маршруту не найдена.'
      case 'none':
        return '';
      default:
        return 'Что-то пошло не так…'
    }
  }

  return (
    <p className={`api-errors ${className}`}>
        {errorText()}
    </p>
  );
}

export default ApiErrors;
