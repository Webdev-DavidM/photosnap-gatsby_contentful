module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "photosnap",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "9cUCFaH5EBKCp3s10KCVvWSj4FQjQSPGCUJf-lY816c",
        spaceId: "",
      },
    },
    "gatsby-plugin-sass",
  ],
};
