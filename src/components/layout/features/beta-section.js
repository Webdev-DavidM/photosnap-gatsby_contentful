import Media from 'react-media';
import Arrow from '../../../assets/shared/desktop/arrow-footer.svg';
import '../../../scss/features.scss';
import React from 'react';

export default function BetaSection() {
  return (
    <div className='features__beta-section'>
      <div className='features__gradient'></div>
      <div className='features__image-and-text-container'>
        <Media
          queries={{
            mobile: '(max-width: 768px)',
            tablet: '(min-width: 769px) and (max-width: 1023px)',
            desktop: '(min-width: 1024px)',
          }}>
          {(matches) => (
            <>
              {matches.mobile && (
                <img
                  className='features__beta-background'
                  src={'../../mobile/bg-beta.jpg'}
                  alt='background image'
                />
              )}
              {matches.tablet && (
                <img
                  className='features__beta-background'
                  src={'../../tablet/bg-beta.jpg'}
                  alt='background image'
                />
              )}
              {matches.desktop && (
                <img
                  className='features__beta-background'
                  src={'../../desktop/bg-beta.jpg'}
                  alt='background image'
                />
              )}
            </>
          )}
        </Media>
        <div className='features__text'>
          <div className='features__text-and-arrow'>
            <h2 className='features__title'>
              WE'RE IN BETA. GET YOUR INVITE TODAY!
            </h2>
            <button className='features__button'>
              <span className='features__button_text'>GET AN INVITE</span>
              <Arrow className='features__arrow' />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
