//load environment variables from .env file
if(!process.env.GITHUB_ACTIONS){
  require('dotenv').config()
}
module.exports = {
  siteMetadata: {
    title: 'Homepage of Pascal Brokmeier',
    author: 'Pascal Brokmeier',
    description:
      'My personal homepage based on gatsby (starter used) and graphql',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links', //gives it a single page like feel
    {
      //for PWA's
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Homepage of Pascal Brokmeier',
        short_name: 'PB',
        start_url: '/',
        background_color: '#212121',
        theme_color: '#212121',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    // Image handling
    'gatsby-image',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    //markdown posts
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-images',
          'gatsby-remark-prismjs',
          'gatsby-remark-mathjax',
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/posts/`,
      },
    },
    //data file handling
    `gatsby-transformer-yaml`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/texts/`,
      },
    },
    //data sources
    //    {
    //      resolve: `gatsby-source-medium`,
    //      options: {
    //        username: `@pascal.brokmeier`,
    //        limit: 200,
    //      },
    //    },
    {
      resolve: 'gatsby-source-goodreads',
      options: {
        developerKey: process.env.GOODREADS_API_KEY,
        goodReadsUserId: '101578711-pascal-brokmeier',
        userShelf: 'read', //optional
      },
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        // apiKey: `keyx4slyaU45SuA0b`, // may instead specify via env, see below
        apiKey: process.env.AIRTABLE_API_KEY,
        tables: [
          {
            baseId: `appZH6SOgZyZ0TWrY`,
            tableName: `Bookshelf`,
            //tableView: `YOUR_TABLE_VIEW_NAME`, // optional
            //queryName: `OPTIONAL_NAME_TO_IDENTIFY_TABLE`, // optional
            //mapping: { `CASE_SENSITIVE_COLUMN_NAME`: `VALUE_FORMAT` }, // optional, e.g. "text/markdown", "fileNode"
            //tableLinks: [`CASE`, `SENSITIVE`, `COLUMN`, `NAMES`] // optional, for deep linking to records across tables.
          },
          {
            baseId: `appZH6SOgZyZ0TWrY`,
            tableName: `Projects`,
          },
          {
            baseId: `appZH6SOgZyZ0TWrY`,
            tableName: `Education`,
          },
          {
            baseId: `appZH6SOgZyZ0TWrY`,
            tableName: `Positions`,
          },
          //{
          //  baseId: `YOUR_AIRTABLE_BASE_ID`,
          //  tableName: `YOUR_TABLE_NAME`,
          //  tableView: `YOUR_TABLE_VIEW_NAME` // optional
          //  // can leave off queryName, mapping or tableLinks if not needed
          //}
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-55919824-7',
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Delays sending pageview hits on route update (in milliseconds)
        // pageTransitionDelay: 0,
        // Enables Google Optimize using your container Id
        // optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // Enables Google Optimize Experiment ID
        // experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        // Set Variation ID. 0 for original 1,2,3....
        // variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
        // Any additional optional fields
        // sampleRate: 5,
        // siteSpeedSampleRate: 10,
        // cookieDomain: "example.com",
      },
    },
  ],
}
