import React from 'react';
import * as styles from './footer.module.scss';
import Logo from '../../assets/shared/mobile/logo-footer.svg';
import { Link } from 'gatsby';
import Facebook from '../../assets/shared/desktop/facebook.svg';
import Instagram from '../../assets/shared/desktop/instagram.svg';
import Twitter from '../../assets/shared/desktop/twitter.svg';
import Pinterest from '../../assets/shared/desktop/pinterest.svg';
import Youtube from '../../assets/shared/desktop/youtube.svg';
import Arrow from '../../assets/shared/desktop/arrow-footer.svg';

export default function footer() {
  return (
    <div className={styles.footer}>
      <Logo className={styles.footer__logo} />
      <div className={styles.footer__social_flex_container}>
        <Facebook className={styles.footer__social_icon} />
        <Pinterest className={styles.footer__social_icon} />
        <Twitter className={styles.footer__social_icon} />
        <Youtube className={styles.footer__social_icon} />
        <Instagram className={styles.footer__social_icon} />
      </div>
      <div className={styles.footer__links}>
        <Link to='/home' className={styles.footer__link}>
          HOME
        </Link>
        <Link to='/stories' className={styles.footer__link}>
          STORIES
        </Link>
        <Link to='/features' className={styles.footer__link}>
          FEATURES
        </Link>
        <Link to='/pricing' className={styles.footer__link}>
          PRICING
        </Link>
      </div>
      <button className={styles.footer__button}>
        <span className={styles.footer__button_text}>GET AN INVITE</span>
        <Arrow className={styles.footer__arrow} />
      </button>
      <p className={styles.footer__copyright}>
        Copyright 2019. All Rights Reserved
      </p>
    </div>
  );
}
