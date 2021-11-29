import * as React from 'react';
import { graphql } from 'gatsby';
import '../../src/scss/index.scss';
import Header from '../components/layout/header';
import Footer from '../components/layout/footer';
import Hero from '../components/layout/hero';
import Article1 from '../components/layout/homepage/article1';
import Article2 from '../components/layout/homepage/article2';
import Benefits from '../components/layout/benefits';
import Stories from '../components/layout/stories';

const IndexPage = ({ data }) => {
  const [grey, setGrey] = React.useState(false);
  const { heroCopy, heroImageDesktop, heroImageMobile, imageTablet, name } =
    data.hero.edges[0].node;
  const showInviteButton = true;

  const article1 = data.articles.edges[0];
  const article2 = data.articles.edges[1];

  const benefits = data.benefits.edges.slice(0, 3);

  let stories = data.stories.edges;
  stories = data.stories.edges.slice(0, 4);

  return (
    <main className='index'>
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
      <Article1 props={article1.node} />
      <Article2 props={article2.node} />
      <Stories stories={stories} />
      <Benefits benefits={benefits} />
      <Footer />
    </main>
  );
};

export default IndexPage;

export const query = graphql`
  query MyQuery {
    hero: allContentfulPageSection(
      filter: { page: { eq: "home" }, sectionName: { eq: "hero" } }
    ) {
      edges {
        node {
          id
          name
          heroCopy
          heroImageDesktop {
            gatsbyImageData(width: 1000, placeholder: BLURRED, formats: [AUTO])
          }
          imageTablet {
            gatsbyImageData(width: 400, placeholder: BLURRED, formats: [AUTO])
          }
          heroImageMobile {
            gatsbyImageData(width: 400, placeholder: BLURRED, formats: [AUTO])
          }
        }
      }
    }
    articles: allContentfulPageSection(
      filter: { page: { eq: "home" }, sectionName: { eq: "article" } }
    ) {
      edges {
        node {
          id
          name
          heroCopy
          heroImageDesktop {
            gatsbyImageData(width: 1000, placeholder: BLURRED, formats: [AUTO])
          }
          imageTablet {
            gatsbyImageData(width: 400, placeholder: BLURRED, formats: [AUTO])
          }
          heroImageMobile {
            gatsbyImageData(width: 400, placeholder: BLURRED, formats: [AUTO])
          }
        }
      }
    }
    stories: allContentfulStories {
      edges {
        node {
          imageDesktop {
            gatsbyImageData
          }
          imageMobile {
            gatsbyImageData
          }
          title
          slug
          author
          date(formatString: "MMMM, Do YYYY")
        }
      }
    }
    benefits: allContentfulFeatures {
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
