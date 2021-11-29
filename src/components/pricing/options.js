import React from 'react';
import '../../scss/pricing.scss';

export default function options(props) {
  const { chosenPlan, plan, monthly, setChosenPlan } = props;
  const { planType, description, monthlyPrice, annualPrice } = plan.node;

  let isChosenPlan = chosenPlan === planType;

  let cardColor = isChosenPlan
    ? 'pricing__plan-card pricing__plan-card--chosen'
    : 'pricing__plan-card';

  let cardType = isChosenPlan
    ? 'pricing__plan-name pricing__plan-name--chosen'
    : 'pricing__plan-name';

  let cardPrice = isChosenPlan
    ? 'pricing__plan-price pricing__plan-price--chosen'
    : 'pricing__plan-price';

  let cardButton = isChosenPlan
    ? 'pricing__plan-button pricing__plan-button--chosen'
    : 'pricing__plan-button';

  return (
    <>
      <div className='pricing__gradient-and-plan-container'>
        {isChosenPlan && <div className='pricing__hidden-gradient'></div>}
        <div className={cardColor}>
          <h2 className={cardType}>{planType}</h2>
          <p className='pricing__plan-copy'>{description}</p>
          <h1 className={cardPrice}>
            ${monthly ? monthlyPrice : annualPrice}.00
          </h1>
          <p className='pricing__plan-copy-per'>
            per {monthly ? 'month' : 'year'}
          </p>
          <button
            className={cardButton}
            onClick={() => setChosenPlan(planType)}>
            PICK PLAN
          </button>
        </div>
      </div>
    </>
  );
}
