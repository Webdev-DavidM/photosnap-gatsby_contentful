import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import Media from 'react-media';
import Arrow from '../../assets/shared/desktop/arrow-footer.svg';
import '../../scss/stories.scss';

export default function story({ headlineStory }) {
  const { author, slug, title, date, imageDesktop, imageMobile } =
    headlineStory[0].node;

  const desktopImage = getImage(imageDesktop);
  const mobileImage = getImage(imageMobile);

  return (
    <div className='stories__item stories__item--headline'>
      <div className='stories__relative stories__relative--headline'>
        <div className='stories__absolute'>
          <Media
            queries={{
              mobile: '(max-width: 768px)',
              tablet: '(min-width: 769px)',
            }}>
            {(matches) => (
              <>
                {matches.mobile && (
                  <GatsbyImage
                    className='stories__image stories__image--headline'
                    image={mobileImage}
                  />
                )}
                {matches.tablet && (
                  <GatsbyImage
                    className='stories__image stories__image--headline'
                    image={desktopImage}
                    alt=''
                  />
                )}
              </>
            )}
          </Media>
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
              {/* <div className='stories__btn-section stories__btn-section--headline'>
                <p className='stories__copy stories__copy--margin-right stories__copy--no-bottom-margin'>
                  READ MORE
                </p>

                <Arrow />
              </div> */}
              <button className='hero__button'>
                <span className='hero__button_text'>GET AN INVITE</span>
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
