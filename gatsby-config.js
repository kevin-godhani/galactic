module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    // {
    //   resolve: `gatsby-plugin-google-fonts`,
    //   options: {
    //     fonts: [
    //       `Syne`,
    //       `400,500,700` // you can also specify font weights and styles
    //     ],
    //     display: 'swap'
    //   }
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `The Galactic Fight League`,
        short_name: `GFL`,
        start_url: `/`,
        background_color: `#010103`,
        display: `minimal-ui`,
        icon: `src/styles/img/favicon/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          // include: /\.(svg)$/,
          include: /\.inline\.(svg)$/,
        },
      },
    },
  ],
}
