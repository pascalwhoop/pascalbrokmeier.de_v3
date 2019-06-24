module.exports = {
  siteMetadata: {
    title: "Homepage of Pascal Brokmeier",
    author: "Pascal Brokmeier",
    description: "My personal homepage based on gatsby (starter used) and graphql"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Homepage of Pascal Brokmeier',
        short_name: 'portfolio',
        start_url: '/',
        background_color: '#212121',
        theme_color: '#212121',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: `keyx4slyaU45SuA0b`, // may instead specify via env, see below
        tables: [
          {
            baseId: `appZH6SOgZyZ0TWrY`,
            tableName: `Bookshelf`,
            //tableView: `YOUR_TABLE_VIEW_NAME`, // optional
            //queryName: `OPTIONAL_NAME_TO_IDENTIFY_TABLE`, // optional
            //mapping: { `CASE_SENSITIVE_COLUMN_NAME`: `VALUE_FORMAT` }, // optional, e.g. "text/markdown", "fileNode"
            //tableLinks: [`CASE`, `SENSITIVE`, `COLUMN`, `NAMES`] // optional, for deep linking to records across tables.
          },
          //{
          //  baseId: `YOUR_AIRTABLE_BASE_ID`,
          //  tableName: `YOUR_TABLE_NAME`,
          //  tableView: `YOUR_TABLE_VIEW_NAME` // optional
          //  // can leave off queryName, mapping or tableLinks if not needed
          //}
        ]
      }
    }
  ],
}
