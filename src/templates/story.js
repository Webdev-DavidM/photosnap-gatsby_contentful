import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import '../scss/full-page-story.scss';

export default function story({ data }) {
  console.log(data.allContentfulStories.edges[0].node);
  const { author, slug, title, imageMobile, storyline } =
    data.allContentfulStories.edges[0].node;

  const mobileImage = getImage(imageMobile);

  return (
    <div className='full-page-story'>
      <div>
        <Link className='full-page-story__go-back-link' to={`/storypage`}>
          Back to stories
        </Link>
      </div>
      <div className='full-page-story__image-container'>
        <GatsbyImage
          className='full-page-story__image'
          image={mobileImage}
          alt={title}
        />
        <div className='full-page-story__hidden-gradient'></div>
      </div>

      <div className='full-page-story__info-section'>
        <h2 className='full-page-story__title'>{title}</h2>
        <p className='full-page-story__copy'>by {author}</p>
        <p className='full-page-story__copy-story'>{storyline.storyline}</p>
      </div>
    </div>
  );
}

// Below I am getting the variable in my query below as n it is used to query graphql contentful for the page info I need
export const query = graphql`
  query MyStory($slug: String) {
    allContentfulStories(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          author
          title
          imageMobile {
            gatsbyImageData
          }
          date
          storyline {
            storyline
          }
        }
      }
    }
  }
`;
