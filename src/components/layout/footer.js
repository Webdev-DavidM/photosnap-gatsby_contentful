import React from 'react';
import '../../scss/footer.scss';
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
    <div className='footer'>
      <Logo className='footer__logo' />
      <div className='footer__social_flex_container'>
        <Facebook className='footer__social_icon' />
        <Pinterest className='footer__social_icon' />
        <Twitter className='footer__social_icon' />
        <Youtube className='footer__social_icon' />
        <Instagram className='footer__social_icon' />
      </div>
      <div className='footer__links'>
        <Link to='/home' className='footer__link'>
          HOME
        </Link>
        <Link to='/storypage' className='footer__link'>
          STORIES
        </Link>
        <Link to='/features' className='footer__link'>
          FEATURES
        </Link>
        <Link to='/pricing' className='footer__link'>
          PRICING
        </Link>
      </div>
      <button className='footer__button'>
        <span className='footer__button_text'>GET AN INVITE</span>
        <Arrow className='footer__arrow' />
      </button>
      <p className='footer__copyright'>Copyright 2019. All Rights Reserved</p>
    </div>
  );
}
