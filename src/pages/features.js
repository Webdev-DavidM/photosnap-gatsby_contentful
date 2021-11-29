import * as React from 'react';
import { graphql } from 'gatsby';
import Hero from '../components/layout/hero';
import Header from '../components/layout/Header';
import Footer from '../components/layout/footer';
import '../scss/features.scss';
import Benefits from '../components/layout/benefits';
import BetaSection from '../components/layout/features/beta-section';

export default function Features({ data }) {
  const [grey, setGrey] = React.useState(false);
  const { heroCopy, heroImageDesktop, heroImageMobile, imageTablet, name } =
    data.hero.edges[0].node;
  const benefits = data.features.edges;
  const showInviteButton = true;

  return (
    <div className='features'>
      {grey ? <div className='index__greyed_out'></div> : null}
      <Header setGrey={setGrey} />
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
      <Footer />
    </div>
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
