import React from 'react';
import '../../../scss/hero.scss';
import Media from 'react-media';
import Arrow from '../../../assets/shared/desktop/arrow-footer.svg';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export default function article1({ props }) {
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
      <Media
        queries={{
          mobile: '(max-width: 768px)',
          tablet: '(min-width: 769px) and (max-width: 1023px)',
          desktop: '(min-width: 1024px)',
        }}>
        {(matches) => (
          <>
            {matches.mobile && (
              <GatsbyImage className='hero__image' image={mobileImage} />
            )}
            {matches.tablet && (
              <GatsbyImage className='hero__image' image={tabletImage} alt='' />
            )}
            {matches.desktop && (
              <GatsbyImage
                className='hero__image'
                image={desktopImage}
                alt=''
              />
            )}
          </>
        )}
      </Media>
      <div className='hero__copy-section hero__copy-section--white'>
        <h1 className='hero__title hero__title--black'>{name.toUpperCase()}</h1>
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