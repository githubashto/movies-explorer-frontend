import './FilterCheckbox.css';
import React from 'react';

function FilterCheckbox(props) {

  const {isChecked, onChange} = props;

  return (
    <div className="search__short">
      <span className="search__short-label">Короткометражки</span>
      <div className="search__short-checkbox">
        <input type="checkbox" id="short" defaultChecked={isChecked} onChange={onChange} />
        <label for="short"></label>
    </div>
    </div>
  );
}

export default FilterCheckbox;
