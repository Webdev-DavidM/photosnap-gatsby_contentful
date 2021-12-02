import React from 'react';
import '../../scss/hero.scss';
import Arrow from '../../assets/shared/desktop/arrow-footer.svg';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export default function hero({ props }) {
  const {
    imageTablet,
    heroImageDesktop,
    heroImageMobile,
    showInviteButton,
    name,
    heroCopy,
  } = props;

  const tabletImage = getImage(imageTablet);
  const desktopImage = getImage(heroImageDesktop);
  const mobileImage = getImage(heroImageMobile);
  return (
    <div className='hero'>
      <GatsbyImage
        className='hero__image hero__image--mobile'
        image={mobileImage}
        alt='background image'
      />
      <GatsbyImage
        className='hero__image hero__image--tablet'
        image={tabletImage}
        alt='background image'
      />
      <GatsbyImage
        className='hero__image hero__image--desktop'
        image={desktopImage}
        alt='background image'
      />
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
