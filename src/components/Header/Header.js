import './Header.css';
import React from 'react';
import Navigation from '../Navigation/Navigation';

function Header(props) {
  const {loggedIn} = props;
  const [overlay, setOverlay] = React.useState(false);

  function handleMenuToggle() {
    setOverlay(!overlay);
  }

  React.useEffect(() => {
    document.addEventListener('onload', (() => setOverlay(false)));
  });

  return (
    <header className="header block">
      <Navigation loggedIn={loggedIn} onMenuToggle={handleMenuToggle}/>
      <div className={overlay ? 'overlay' : ''}/>
    </header>
  );
}

export default Header;
