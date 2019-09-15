import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const Reading = ({ data }) => {

    console.log(data)
	return (<Layout>
        {JSON.stringify(data.allAirtable)}
        TABLE BELOW
		<table>
            <tbody>
			{data.allAirtable.edges.map(({ node }, index)=> {
				return (
					<tr key={index}>
						<td>{node.data.name}</td>
						<td>{node.data.author}</td>
						{/* <td>{node.data.more_url}</td> */}
            <td><img src={node.data.image_url} alt=""/></td>
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
