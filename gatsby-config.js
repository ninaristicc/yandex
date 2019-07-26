module.exports = {
  siteMetadata: {
    title: `Get eWallet`,
    description: `Whether you want to improve your consumer experience online or just enjoy yourself by playing your favorite casino games without any fuss, ewallets must be your default payment processing option`,  },
  plugins: [
    `gatsby-plugin-react-helmet`, 
    {
      resolve: `gatsby-source-filesystem`, 
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: `https://yandex-demo.netlify.com/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/yandex.png`, // This path is relative to the root of the site.
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
