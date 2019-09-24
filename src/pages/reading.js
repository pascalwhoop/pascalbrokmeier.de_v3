import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Helmet from 'react-helmet'

const Reading = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <Helmet>
        <title>PB</title>
        <meta name="description" content="Readinglist" />
      </Helmet>

      <div className="main">
        <div className="inner">
        <h1>Reading list</h1>
          Check my <a
            href="https://www.goodreads.com/user/show/101578711-pascal-brokmeier"
            target="_blank"
          > goodreads profile
          </a> for now. Still working on the integration of their API for a nice table here.
        </div>
      </div>
    </Layout>
  )
}

export default Reading

export const query = graphql`
  query Bookshelf {
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
