import React from 'react';
import { graphql } from 'gatsby';

export default function story(data) {
  console.log(data);
  return <div>hello</div>;
}

// Below I am getting the variable in my query below as n it is used to query graphql contentful for the page info I need
export const query = graphql`
  query MyStory($slug: String) {
    allContentfulStories(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          author
          imageDesktop {
            gatsbyImageData
            title
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
