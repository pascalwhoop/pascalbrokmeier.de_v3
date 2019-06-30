import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const Projects = ({data}) => {
 	return (<Layout>
        TABLE BELOW
			{data.allAirtable.edges.map(({ node }, index)=> {
				return (<div>{JSON.stringify(node)}</div>)
            })}
	</Layout>
    )
   
}

export default Projects

export const query = graphql`
query Projects {
  allAirtable(filter: {table: {eq: "Projects"}}) {
    edges {
      node {
        data {
          Name
          Position
          Start
          End
          Firm
          Comments
          Client
          link
        }
      }
    }
  }
}
`
