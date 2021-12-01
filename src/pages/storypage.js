import * as React from 'react';
import { graphql } from 'gatsby';
import '../../src/scss/story-page.scss';
import '../../src/scss/index.scss';
import Stories from '../components/layout/stories';
import HeadlineStory from '../components/layout/headline-story';
import Layout from '../components/layout.js';

export default function StoryPage({ data }) {
  let stories = data.stories.edges;
  let headlineStory = [];
  let mainStories = [];

  stories.forEach((story) => {
    if (story.node.title !== ' Sunset Cityscapes') {
      mainStories.push(story);
    } else {
      headlineStory.push(story);
    }
  });

  return (
    <Layout>
      <main className='storypage'>
        <HeadlineStory headlineStory={headlineStory} />
        <Stories stories={mainStories} />
      </main>
    </Layout>
  );
}
export const query = graphql`
  {
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
  }
`;
