import React from 'react';
import * as styles from './hero.module.scss';
import Media from 'react-media';
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
    <div className={styles.hero}>
      <Media
        queries={{
          mobile: '(max-width: 768px)',
          tablet: '(min-width: 769px) and (max-width: 1023px)',
          desktop: '(min-width: 1024px)',
        }}>
        {(matches) => (
          <>
            {matches.mobile && (
              <GatsbyImage className={styles.hero__image} image={mobileImage} />
            )}
            {matches.tablet && (
              <GatsbyImage
                className={styles.hero__image}
                image={tabletImage}
                alt=''
              />
            )}
            {matches.desktop && (
              <GatsbyImage
                className={styles.hero__image}
                image={desktopImage}
                alt=''
              />
            )}
          </>
        )}
      </Media>
      <div className={styles.hero__gradient}></div>
      <div className={styles.hero__copy_section}>
        <h2 className={styles.hero__title}>{name.toUpperCase()}</h2>
        <p className={styles.hero__copy}>{heroCopy}</p>
        {showInviteButton && (
          <button className={styles.hero__button}>
            <span className={styles.hero__button_text}>GET AN INVITE</span>
            <Arrow className={styles.hero__arrow} />
          </button>
        )}
      </div>
    </div>
  );
}
