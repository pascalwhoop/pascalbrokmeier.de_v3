import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/SEO'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext
    const coverUrl = `images/${post.frontmatter.date}/cover.jpg`
    const cover = post.frontmatter.cover.childImageSharp.fluid

    return (
      <Layout>
        <SEO title={post.frontmatter.title} description={post.excerpt} />

        <div class="main">
          <Img fluid={cover}></Img>
          <div className="inner">
            <h1> {post.frontmatter.title} </h1>
            <p> {post.frontmatter.date} </p>

            <div dangerouslySetInnerHTML={{ __html: post.html }} />
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
        date(formatString: "MMMM DD, YYYY")
        cover {
          publicURL
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }

  }
`
