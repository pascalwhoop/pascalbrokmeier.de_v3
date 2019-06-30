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

  componentDidMount() {
    this.calculateAge()
  }

  calculateAge() {
    let ageElem = document.getElementById('age')
    let now = new Date()
    let age = now.getFullYear() - 1992
    ageElem.innerHTML = now.getMonth() < 3 ? --age : age
  }

  render()  {
    return (
      <Container>
        <div className="inner" id="contactPage">
          <h1>About me</h1>
          <div
            //should contain a "#age" field that we hook into
            dangerouslySetInnerHTML={{
              __html: this.props.data.allMarkdownRemark.edges[0].node.html,
            }}
          ></div>
  
          <ContactForm></ContactForm>
        </div>
        {/* picture */}
        {/* CV Timeline */}
      </Container>
    )
  }
}

export default Contact

//uses fragment from Contact component
export const query = graphql`
  query AboutQuery {
    allMarkdownRemark(
      filter: { frontmatter: { id: { eq: "aboutme-snippet" } } }
    ) {
      edges {
        node {
          id
          fileAbsolutePath
          html
          frontmatter {
            title
            id
          }
        }
      }
    }
    allDataYaml {
      edges {
        node {
          owner {
            name
            location
          }
        }
      }
    }
  }
`
