import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import Arrow from '../../assets/shared/desktop/arrow-footer.svg';
import '../../scss/stories.scss';

export default function story({ headlineStory }) {
  const { author, slug, title, date, imageDesktop } = headlineStory[0].node;

  const desktopImage = getImage(imageDesktop);

  return (
    <div className='stories__item stories__item--headline'>
      <div className='stories__relative stories__relative--headline'>
        <div className='stories__absolute'>
          <GatsbyImage className='stories__image' image={desktopImage} alt='' />
          <div className='stories__info-section  stories__info-section--headline'>
            <p className='stories__copy stories__copy--headline'>
              LAST MONTH'S FEATURED STORY
            </p>
            <h2 className='stories__title stories__title--headline'>
              {title.toUpperCase()}
            </h2>
            <p className='stories__copy stories__copy--headline'>
              {date} by {author}
            </p>
            <Link to={`/${slug}`}>
              <button className='hero__button'>
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
