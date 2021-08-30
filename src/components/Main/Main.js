import './Main.css';
import React from 'react';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Main(props) {
  const {loggedIn, onMenuToggle} = props;

  return (
    <>
    <Header loggedIn={loggedIn} onMenuToggle={onMenuToggle}/>

    <main>
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
    </main>

    <Footer />
    </>
  );
}

export default Main;
