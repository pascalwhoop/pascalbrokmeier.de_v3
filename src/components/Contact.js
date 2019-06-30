import React from 'react'
import Layout from '../components/layout'

const ContactForm = ({ data, props }) => (
  <section id="contact">
    <div className="inner">
      <div>
        <form
          method="post"
          action="https://formspree.io/public@pascalbrokmeier.de"
        >
          <div className="field half first">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="field half">
            <label htmlFor="email">Email</label>
            <input type="email" name="_replyto" id="email" />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows="6"></textarea>
          </div>
          <ul className="actions">
            <li>
              <input type="submit" value="Send" className="special" />
            </li>
            <li>
              <input type="reset" value="Clear" />
            </li>
          </ul>
          <input type="hidden" name="_next" value="http://pascalbrokmeier.de" />
          <input id="gotcha" type="text" name="_gotcha" />
        </form>
      </div>
    </div>
  </section>
)

export default ContactForm

export const query = graphql`
  fragment ContactData on DataYamlConnection {
    edges {
      node {
        owner {
          name
          location
          contact {
            name
            url
          }
        }
      }
    }
  }

  query ContactFormData {
    allDataYaml {
      ...ContactData
    }
  }
`
