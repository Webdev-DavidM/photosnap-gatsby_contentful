import React from 'react';
import { graphql } from 'gatsby';
import '../../src/scss/pricing.scss';
import Hero from '../components/layout/hero';
import BetaSection from '../components/layout/features/beta-section';
import Compare from '../components/pricing/compare';
import Options from '../components/pricing/options';
import Layout from '../components/layout.js';

const Pricing = ({ data }) => {
  const [monthly, setMonthly] = React.useState(true);
  const [chosenPlan, setChosenPlan] = React.useState('Basic');

  const annualOrMonthly = monthly
    ? 'pricing__slider'
    : 'pricing__slider pricing__slider--annual';

  const { heroCopy, heroImageDesktop, heroImageMobile, imageTablet, name } =
    data.hero.edges[0].node;
  const plans = data.plans.edges;
  const showInviteButton = true;

  const monthlyPlan = !monthly ? 'pricing__plan-title-grey' : null;
  const annualPlan = monthly ? 'pricing__plan-title-grey' : null;

  return (
    <Layout>
      <main className='pricing'>
        {data && (
          <Hero
            props={{
              heroImageDesktop,
              heroImageMobile,
              imageTablet,
              heroCopy,
              name,
              showInviteButton,
            }}
          />
        )}
        <div className='pricing__monthly-annual-container'>
          <h2 className={monthlyPlan}>Monthly</h2>
          <div className='pricing__monthly-or-annual-button'>
            <div
              onClick={() => setMonthly((prevState) => !prevState)}
              className={annualOrMonthly}></div>
          </div>
          <h2 className={annualPlan}>Yearly</h2>
        </div>
        <div className='pricing__plans-container'>
          {plans.map((plan) => (
            <Options
              plan={plan}
              setChosenPlan={setChosenPlan}
              monthly={monthly}
              chosenPlan={chosenPlan}
            />
          ))}
        </div>

        <Compare plans={plans} />
        <BetaSection />
      </main>
    </Layout>
  );
};

export const query = graphql`
  {
    plans: allContentfulPlans {
      edges {
        node {
          annualPrice
          description
          monthlyPrice
          planType
          unlimitedStoryPosting
          unlimitedPhotoUpload
          unlimitedCustomContent
          photoDownloads
          customizeMetadata
          customAnalytics
          advancedMetrics
        }
      }
    }
    hero: allContentfulPageSection(
      filter: { page: { eq: "pricing" }, sectionName: { eq: "hero" } }
    ) {
      edges {
        node {
          id
          name
          heroCopy
          page
          heroImageDesktop {
            gatsbyImageData
          }
          heroImageMobile {
            gatsbyImageData
          }
          imageTablet {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export default Pricing;
