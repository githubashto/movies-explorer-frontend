import './Header.css';
import React from 'react';
import Navigation from '../Navigation/Navigation';

function Header() {
  const [overlay, setOverlay] = React.useState(false);

  function handleMenuToggle() {
    setOverlay(!overlay);
  }

  React.useEffect(() => {
    document.addEventListener('onload', (() => setOverlay(false)));
  });

  return (
    <header className="header block">
      <Navigation onMenuToggle={handleMenuToggle}/>
      <div className={overlay ? 'overlay' : ''}/>
    </header>
  );
}

export default Header;
