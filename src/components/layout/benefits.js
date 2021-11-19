import React from 'react';
import '../../scss/benefits.scss';

export default function benefits({ benefits }) {
  return (
    <div className='benefits'>
      {benefits.map((benefit) => {
        return (
          <div className='benefits__item'>
            <div className='benefits__icon'>
              <img src={benefit.node.featureIcon.file.url} alt='' />
            </div>
            <h2 className='benefits__title'>{benefit.node.feature}</h2>
            <p className='benefits__copy'>{benefit.node.description}</p>
          </div>
        );
      })}
    </div>
  );
}
