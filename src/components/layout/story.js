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
              <div className='stories__btn-section stories__btn-section'>
                <p className='stories__copy stories__copy--no-bottom-margin'>
                  READ MORE
                </p>
                <Arrow />
              </div>
            </Link>
          </div>
          <div className='stories__hidden-gradient'></div>
        </div>
      </div>
    </div>
  );
}
