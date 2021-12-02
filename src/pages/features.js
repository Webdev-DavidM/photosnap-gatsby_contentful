import * as React from 'react';
import { graphql } from 'gatsby';
import Hero from '../components/layout/hero';
import '../scss/features.scss';
import Benefits from '../components/layout/benefits';
import BetaSection from '../components/layout/features/beta-section';
import Layout from '../components/layout.js';

export default function Features({ data }) {
  const { heroCopy, heroImageDesktop, heroImageMobile, imageTablet, name } =
    data.hero.edges[0].node;
  const benefits = data.features.edges;
  const showInviteButton = true;

  return (
    <Layout>
      <div className='features'>
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
        <Benefits benefits={benefits} />
        <BetaSection />
      </div>
    </Layout>
  );
}

export const query = graphql`
  {
    hero: allContentfulPageSection(
      filter: { page: { eq: "features" }, sectionName: { eq: "hero" } }
    ) {
      edges {
        node {
          id
          heroCopy
          heroImageDesktop {
            gatsbyImageData
          }
          heroImageMobile {
            gatsbyImageData
          }
          imageTablet {
            gatsbyImageData
          }
          name
        }
      }
    }
    features: allContentfulFeatures {
      edges {
        node {
          description
          feature
          featureIcon {
            file {
              url
            }
          }
        }
      }
    }
  }
`;
