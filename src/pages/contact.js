import React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import { faIconMapper } from '../functions/icons'
import ContactForm from '../components/Contact'

const Contact = ({ props, data }) => {
  return (
    <Layout>
      <Helmet>
            <title>PB</title>
            <meta name="description" content="Get in contact" />
      </Helmet>
      <div class="main">
        <div className="inner" id="contactPage">
          <h1>Contact</h1>
          <p>Choose any of the contact methods below or use the form</p>
            {data.allDataYaml.edges[0].node.owner.contact.map((item, index) => {
              return (
                <a href={item.url} className="button">
                  <span>
                    {faIconMapper(item.name)} {item.name}
                  </span>
                </a>
              )
            })}
          <ContactForm></ContactForm>
        </div>
      </div>
    </Layout>
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
