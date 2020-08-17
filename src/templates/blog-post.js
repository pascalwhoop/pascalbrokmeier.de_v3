import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/SEO'


class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const cover = post.frontmatter.cover ? post.frontmatter.cover.childImageSharp.fluid : null;


    return (
      <Layout>
        <SEO title={post.frontmatter.title} description={post.excerpt} />

        <div className="main">
          {cover && 
          <Img fluid={cover} style={{maxHeight: '400px'}}></Img>
          }
          <div className="inner">
            <h1> {post.frontmatter.title} </h1>
            <p> {post.frontmatter.date} </p>

            <div dangerouslySetInnerHTML={{ __html: post.html }} className="post"/>
          </div>
        </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      frontmatter {
        title
        mathjax
        date(formatString: "MMMM DD, YYYY")
        cover {
          publicURL
          childImageSharp {
            fluid(maxWidth: 1600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }

  }
`
