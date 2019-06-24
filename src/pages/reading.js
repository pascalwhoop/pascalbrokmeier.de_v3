import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const Reading = ({ data }) => {

    console.log(data)
	return (<Layout>
        TABLE BELOW
		<table>
            <tbody>
			{data.allAirtable.edges.map(({ node }, index)=> {
				return (
					<tr key={index}>
						<td>{node.data.Name}</td>
						<td>{node.data.Author}</td>
						<td>{node.data.Goodreads_URL}</td>
					</tr>
				)
            })}
</tbody>
		</table>
        TABLE ABOVE
	</Layout>
    )
}

export default Reading

export const query = graphql`
query Bookshelf {
  allAirtable(filter: {table: {eq: "Bookshelf"}}) {
    edges {
      node {
        data {
          Author
          Goodreads_URL
          Name
        }
      }
    }
  }
}
`
