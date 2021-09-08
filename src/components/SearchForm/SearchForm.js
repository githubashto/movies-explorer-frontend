import './SearchForm.css';
import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm(props) {
  const {onSearch, isShort, onShortClick} = props;
  const [searchInput, setSearchInput] = React.useState('');
  const [errorText, setErrorText] = React.useState('');

  function handleSearchInput(e) {
    setSearchInput(e.target.value);
    setErrorText('');
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (! /\S/.test(searchInput)) {
      setErrorText('Нужно ввести ключевое слово');
    }
    else onSearch(searchInput);
  }

  return (
    <div className="search">
      <form className="search__query-container" onSubmit={handleSubmit}>
        <input type="search"
          className="search__query"
          placeholder="Фильм"
          required
          onChange={handleSearchInput}
          value={searchInput}
        />
        <button type="submit" className="search__submit"></button>
      </form>
      <p className="search__error-noquery">{errorText}</p>

      <FilterCheckbox isChecked={isShort} onChange={onShortClick}/>
    </div>
  );
}

export default SearchForm;
