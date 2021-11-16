import React, { useState } from 'react';
import * as styles from './header.module.scss';
import Logo from '../../assets/shared/mobile/logo.svg';
import HamburgerMenu from '../../assets/shared/mobile/menu.svg';
import CloseMenu from '../../assets/shared/mobile/close.svg';
import { Link } from 'gatsby';

export default function Header({ setGrey }) {
  const [showMenu, setShowMenu] = useState(false);

  let menu = !showMenu
    ? styles.header
    : `${styles.header} ${styles.header__show}`;

  const ToggleMenu = (bool) => {
    setShowMenu(bool);
    setGrey(bool);
  };

  return (
    <>
      <div className={menu}>
        <div className={styles.header__logo_container}>
          <Logo className={styles.header__logo} />
          {showMenu && (
            <button onClick={() => ToggleMenu(false)}>
              <CloseMenu className={styles.header__cross} />
            </button>
          )}
          {!showMenu && (
            <button onClick={() => ToggleMenu(true)}>
              <HamburgerMenu className={styles.header__hamburger} />
            </button>
          )}
        </div>
        <div className={styles.header__links}>
          <Link to='/stories' className={styles.header__link}>
            STORIES
          </Link>
          <Link to='/features' className={styles.header__link}>
            FEATURES
          </Link>
          <Link to='/pricing' className={styles.header__link}>
            PRICING
          </Link>
          <div className={styles.header__break}></div>
        </div>

        <button className={styles.header__button}>GET AN INVITE</button>
      </div>
    </>
  );
}
