exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query Page {
      allContentfulStories {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  data.allContentfulStories.edges.forEach((edge) => {
    // I have created my pages with a slug field, this is used below to create the page, I also pass the slug as context to each page created,
    //then in that page the graphql uses this variable to query the correct info from contentful
    actions.createPage({
      path: `${edge.node.slug}`,
      component: require.resolve('./src/templates/story'),
      context: { slug: edge.node.slug },
    });
  });
};
