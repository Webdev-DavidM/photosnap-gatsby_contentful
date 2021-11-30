import * as React from 'react';
import { graphql } from 'gatsby';
import '../../src/scss/story-page.scss';
import '../../src/scss/index.scss';
import Header from '../components/layout/header';
import Footer from '../components/layout/footer';
import Stories from '../components/layout/stories';
import HeadlineStory from '../components/layout/headline-story';

export default function StoryPage({ data }) {
  const [grey, setGrey] = React.useState(false);

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
    <main className='storypage'>
      {grey ? <div className='index__greyed_out'></div> : null}
      <Header setGrey={setGrey} />
      <HeadlineStory headlineStory={headlineStory} />
      <Stories stories={mainStories} />
      <Footer />
    </main>
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
