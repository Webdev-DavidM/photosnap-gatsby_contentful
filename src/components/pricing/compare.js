import React from 'react';
import Tick from './tick';
import plans from '../../plans.json';

export default function compare() {
  const categories = plans.categories;

  let catKeys = categories.map((cat) => Object.keys(cat));

  return (
    <div className='pricing__compare'>
      <h2 className='pricing__compare-heading-mobile'>THE FEATURES</h2>
      <h2 className='pricing__compare-heading-tablet'>COMPARE</h2>
      <hr className='pricing__hr' />
      {catKeys.map((key, index) => {
        return (
          <div key={index}>
            <div className='pricing__cat-and-ticks-flex-container'>
              <h3 className='pricing__compare-title'>{catKeys[index]}</h3>
              <div className='pricing__compare-plan-type'>
                BASIC
                <span>{categories[index][key].Basic && <Tick />}</span>
              </div>
              <div className='pricing__compare-plan-type'>
                PRO
                <span>{<p>{categories[index][key].Pro}</p> && <Tick />}</span>
              </div>
              <div className='pricing__compare-plan-type'>
                PREMIUM
                <span className='pricing__tick'>
                  {categories[index][key].Business && <Tick />}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
