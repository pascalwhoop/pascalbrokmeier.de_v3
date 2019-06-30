import React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import { faIconMapper } from '../functions/icons'
import Container from '../components/Container'
import ContactForm from '../components/Contact'

const Contact = ({ props, data }) => {
  return (
    <Container>
      <div className="inner" id="contactPage">
        <h1>Contact</h1>
        <p>Choose any of the contact methods below or use the form</p>
        <section id="contactButtons">
          {data.allDataYaml.edges[0].node.owner.contact.map((item, index) => {
            return (
              <a href={item.url} className="button">
                <span>
                  {faIconMapper(item.name)} {item.name}
                </span>
              </a>
            )
          })}
        </section>

        <ContactForm></ContactForm>
      </div>
    </Container>
  )
}

export default Contact

//uses fragment from Contact component
export const query = graphql`
  query ContactDataQuery {
    allDataYaml {
      ...ContactData
    }
  }
`
