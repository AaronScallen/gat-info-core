module.exports = {
  siteMetadata: {
    title: "InfoCore",
  },
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
  ],
};
