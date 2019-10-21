import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Helmet from 'react-helmet'

const Reading = ({ data }) => {
  return (
    <Layout>
      <Helmet>
        <title>PB</title>
        <meta name="description" content="Readinglist" />
      </Helmet>

      <div className="main">
        <div className="inner">
          <div
            dangerouslySetInnerHTML={{
              __html: data.markdownRemark.html,
            }}
          ></div>
        </div>
      </div>
    </Layout>
  )
}

export default Reading

export const query = graphql`
  query Bookshelf {
    markdownRemark(frontmatter: { id: { eq: "readinglist" } }) {
      id
      html
    }
    allAirtable(filter: { table: { eq: "Bookshelf" } }) {
      edges {
        node {
          data {
            author
            more_url
            image_url
            name
          }
        }
      }
    }
  }
`
