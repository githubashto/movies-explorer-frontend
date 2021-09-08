import React from 'react';

function ApiErrors(props) {
  const {apiErrorText, className} = props;

  const ErrorText = typeof apiErrorText === 'string'
    ? apiErrorText
    : 'Что-то пошло не так…';

  return (
    <p className={className}>
        {ErrorText}
    </p>
  );
}

export default ApiErrors;
