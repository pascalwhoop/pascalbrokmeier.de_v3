import React from 'react'
import {graphql} from 'gatsby'
import { StaticQuery } from 'gatsby'
import {faIconMapper} from '../functions/icons'
const Footer = ({ data }) => {
  let contactInfo = data.allDataYaml.edges[0].node.owner.contact

  return (
    <footer id="footer">
      <div className="inner">
        <ul className="icons">
          {contactInfo.map((item, index) => {
            return (<li key={index}>
              <a href={item.url} className="icon alt">
                {faIconMapper(item.name)}
              </a>
            </li>)
          })}
        </ul>
      </div>
    </footer>
  )
}

//binds the query to the component. a bit tedious but OK
export default props => (
  <StaticQuery
    query={graphql`
      query FooterData {
        allDataYaml {
          ...ContactData
        }
      }
    `}
    render={data => <Footer data={data} {...props} />}
  ></StaticQuery>
)
