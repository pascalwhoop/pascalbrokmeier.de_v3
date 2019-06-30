import React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import { faIconMapper } from '../functions/icons'
import Container from '../components/Container'
import ContactForm from '../components/Contact'

class Contact extends React.Component {
  constructor(props) {
    super(props)
  }

  render()  {
    return (
      <Container>
          CHICKEN
      </Container>
    )
  }
}

export default Contact

//uses fragment from Contact component
export const query = graphql`
  query BlogQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            id
          }
        }
      }
    }
  }
`
