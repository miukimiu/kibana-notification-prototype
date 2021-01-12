/* eslint @typescript-eslint/no-var-requires: 0 */
const path = require('path');

module.exports = {
  pathPrefix: '/kibana-8-nav',
  siteMetadata: {
    title: 'Kibana 8 Nav',
    description: 'Prototype for the 8.0 version of Kibana navigation',
    author: '@cchaos',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-gtag',
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: 'G-Y6YR974H26',
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        anonymize: true,
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, 'src', 'images'),
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sass',
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'k8-prototype',
        short_name: 'k8',
        start_url: '',
        background_color: '#FAFBFD',
        theme_color: '#006DE4',
        display: 'minimal-ui',
        icon: 'src/images/logo_elastic.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
