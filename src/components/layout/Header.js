import React, { useState } from 'react';
import '../../scss/header.scss';
import Logo from '../../assets/shared/mobile/logo.svg';
import HamburgerMenu from '../../assets/shared/mobile/menu.svg';
import CloseMenu from '../../assets/shared/mobile/close.svg';
import { Link } from 'gatsby';

export default function Header({ setGrey }) {
  const [showMenu, setShowMenu] = useState(false);

  let menu = !showMenu ? 'header' : `header header__show`;

  const ToggleMenu = (bool) => {
    setShowMenu(bool);
    setGrey(bool);
  };

  return (
    <>
      <div className={menu}>
        <div className='header__logo_container'>
          <Logo className='header__logo' />
          {showMenu && (
            <button onClick={() => ToggleMenu(false)}>
              <CloseMenu className='header__cross' />
            </button>
          )}
          {!showMenu && (
            <button onClick={() => ToggleMenu(true)}>
              <HamburgerMenu className='header__hamburger' />
            </button>
          )}
        </div>
        <div className='header__links'>
          <Link to='/stories' className='header__link'>
            STORIES
          </Link>
          <Link to='/features' className='header__link'>
            FEATURES
          </Link>
          <Link to='/pricing' className='header__link'>
            PRICING
          </Link>
          <div className='header__break'></div>
        </div>

        <button className='header__button'>GET AN INVITE</button>
      </div>
    </>
  );
}
