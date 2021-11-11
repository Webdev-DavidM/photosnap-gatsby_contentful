module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.yourdomain.tld',
    title: 'photosnap',
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        accessToken: '9cUCFaH5EBKCp3s10KCVvWSj4FQjQSPGCUJf-lY816c',
        spaceId: 'ubkqr1o0w5v4',
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `DM Sans`,
          `source sans-serif\:400,700`, // you can also specify font weights and styles
        ],
        display: 'swap',
      },
    },
  ],
};
