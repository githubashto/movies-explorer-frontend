import './SearchForm.css';
import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  const [isShortChecked, setShortChecked] = React.useState(true);

  const handleShortClick = (event) => {
    setShortChecked({name: event.target.checked});
  }

  return (
    <form className="search">
      <div className="search__query-container">
        <input type="search" className="search__query" placeholder="Фильм" required></input>
        <button type="submit" className="search__submit"></button>
      </div>
      <FilterCheckbox isChecked={isShortChecked} onChange={handleShortClick}/>
    </form>
  );
}

export default SearchForm;
