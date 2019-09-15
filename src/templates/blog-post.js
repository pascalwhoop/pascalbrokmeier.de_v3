import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/SEO'

window.MathJax = { tex: { inlineMath: [['$', '$'], ['\\(', '\\)']] }};
function addMathjax() {
  var s = document.createElement( 'script' );
  console.log("adding mathjax!!!")
  s.setAttribute( 'src', "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js");
  document.body.appendChild( s );
}


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

        <div className="main">
          <Img fluid={cover}></Img>
          <div className="inner">
            <h1> {post.frontmatter.title} </h1>
            <p> {post.frontmatter.date} </p>

            <div dangerouslySetInnerHTML={{ __html: post.html }} className="post"/>
          </div>
        </div>
      {post.frontmatter.mathjax ? addMathjax() : null}
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
