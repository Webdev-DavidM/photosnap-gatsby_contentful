import React from 'react';
import '../../scss/hero.scss';
import Arrow from '../../assets/shared/desktop/arrow-footer.svg';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export default function hero({ props }) {
  const { heroImageDesktop, showInviteButton, name, heroCopy } = props;

  const desktopImage = getImage(heroImageDesktop);
  return (
    <div className='hero'>
      <GatsbyImage className='hero__image' image={desktopImage} alt='' />
      <div className='hero__gradient'></div>
      <div className='hero__copy-section'>
        <h1 className='hero__title'>{name.toUpperCase()}</h1>
        <p className='hero__copy'>{heroCopy}</p>
        {showInviteButton && (
          <button className='hero__button'>
            <span className='hero__button_text'>GET AN INVITE</span>
            <Arrow className='hero__arrow' />
          </button>
        )}
      </div>
    </div>
  );
}
