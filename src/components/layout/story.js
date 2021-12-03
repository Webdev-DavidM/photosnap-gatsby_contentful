import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import Arrow from '../../assets/shared/desktop/arrow-footer.svg';

export default function story({ story }) {
  const { author, slug, title, imageDesktop } = story;

  const desktopImage = getImage(imageDesktop);

  return (
    <div className='stories__item'>
      <div className='stories__relative'>
        <div className='stories__absolute'>
          <GatsbyImage className='stories__image' image={desktopImage} alt='' />
          <div className='stories__info-section'>
            <h2 className='stories__title'>{title}</h2>
            <p className='stories__copy'>by {author}</p>
            <div className='stories__rule'></div>
            <Link to={`/${slug}`}>
              <button className='hero__button hero__button--margin-bottom'>
                <span className='hero__button_text'>READ MORE</span>
                <Arrow className='hero__arrow' />
              </button>
            </Link>
          </div>
          <div className='stories__hidden-gradient'></div>
        </div>
      </div>
    </div>
  );
}
