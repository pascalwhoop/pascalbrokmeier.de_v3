import React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import BannerLanding from '../components/BannerLanding'
import Layout from '../components/layout'
import { faIconMapper } from '../functions/icons'
import ContactForm from '../components/Contact'
import Img from 'gatsby-image'


class Post {
  constructor(title, subtitle, url, coverUrl) {}
}

class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.renderImage.bind(this)
    this.buildPosts.bind(this)
  }

  buildPosts(data) {
    //build medium source
    //bug
    // https://github.com/gatsbyjs/gatsby/issues/17335
    //TODO replace with original once bug is fixed
    let mediumPosts = data.dataJson.values.map(node => ({
      title: node.title,
      url: `https://medium.com/@pascalbrokmeier/${node.uniqueSlug}`,
      excerpt: node.virtuals.subtitle,
      imageData: {
        local: false,
        src: node.virtuals.previewImage.imageId
          ? `https://miro.medium.com/fit/c/700/540/${node.virtuals.previewImage.imageId}`
          : '',
      },
      tags: node.tags,
      sourceName: 'on medium.com',
      type: 'medium',
      date: new Date(node.firstPublishedAt),
    }))
    //let mediumPosts = data.allMediumPost.edges.map(({ node }) => ({
    //  title: node.title,
    //  url: `https://medium.com/@${node.author.name}/${node.uniqueSlug}`,
    //  excerpt: node.content.subtitle,
    //  imgUrl: node.virtuals.previewImage.imageId
    //    ? `https://miro.medium.com/fit/c/700/540/${node.virtuals.previewImage.imageId}`
    //    : '',
    //  tags: node.tags,
    //  sourceName: 'medium.com',
    //  type: 'medium',
    //  date: new Date(node.firstPublishedAt)
    //}))
    //build local sources
    var localPosts = data.allMarkdownRemark.edges.filter(
      ({ node }) => node && node.frontmatter && node.frontmatter.title
    )
    localPosts = localPosts.map(({ node }) => ({
      title: node.frontmatter.title,
      url: node.fields.slug,
      excerpt: node.frontmatter.excerpt,
      imageData: {
        local: true,
        data: node.frontmatter.cover,
      },
      tags: node.frontmatter.tags,
      sourceName: 'here',
      type: 'local',
      date: new Date(node.frontmatter.date),
    }))

    let allPosts = []
      .concat(mediumPosts)
      .concat(localPosts)
      .sort((a, b) => b.date - a.date)

    return allPosts.map((post, index) => (
      <section key={index} >
        <a href={post.url} className="image" target="_blank">
          {/* <div className="post-image" style={{backgroundImage: `url:(${post.imgUrl})`}}></div> */}
          {this.renderImage(post.imageData)}
        </a>
        <div className="content">
          <div className="inner">
            <header className="major">
              <h3>{post.title}</h3>
            </header>
            <p>{post.excerpt}</p>
            <ul className="actions">
              <li>
                <a
                  href={post.url}
                  className="button"
                  target={
                    post.sourceName == 'here' ? '' : '_blank'
                  }
                >
                  Read {post.sourceName}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    ))
  }

  renderImage(imgData) {
    if (imgData.local && imgData.data ) {
      const cis = imgData.data.childImageSharp
      let props = {
        ...cis,
        style: {
          ...(cis.style || {}),
          maxWidth: cis.fluid.presentationWidth,
          margin: '0 auto',
          height: '100%',
          objectFit: "contain",
        },
      }
      return <Img {...props}></Img>
    } else return <img src={imgData.src}></img>
  }

  render() {
    return (
      <Layout>
        <Helmet>
          <title>PB</title>
          <meta name="description" content="Blogposts" />
        </Helmet>

        <section id="banner" className="style2">
          <div className="inner">
            <header className="major">
              <h1>Blog</h1>
            </header>
            <div className="content">
              <p>
                A collection of various blog posts on Medium, my personal page
                and other publications.
                <br />
              </p>
            </div>
          </div>
        </section>
        <div id="main">
          <div className="inner">
            <div className="spotlights">{this.buildPosts(this.props.data)}</div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Contact
// url for cover art images
//https://miro.medium.com/fit/c/700/210/0*Wv7TRtDOt1jDLVPO.jpg

export const query = graphql`
  query BlogQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            excerpt
            date
            cover {
              publicURL
              childImageSharp {
                fluid(maxWidth: 1200) {
                  ...GatsbyImageSharpFluid
                  presentationWidth
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
    dataJson {
      values {
        title
        mediumUrl
        id
        createdAt
        firstPublishedAt
        previewContent {
          isFullContent
          subtitle
        }
        virtuals {
          previewImage {
            originalWidth
            originalHeight
            width
            height
            imageId
          }
          subtitle
          tags {
            name
          }
          wordCount
          readingTime
        }
        slug
        uniqueSlug
      }
    }
  }
`
//uses fragment from Contact component
// export const query = graphql`
//   query BlogQuery {
//     allMediumPost {
//       edges {
//         node {
//           title
//           content {
//             subtitle
//           }
//           type
//           uniqueSlug
//           author {
//             name
//           }
//           firstPublishedAt
//           virtuals {
//             previewImage {
//               imageId
//             }
//             tags {
//               name
//               postCount
//             }
//           }
//         }
//       }
//     }
//     allMarkdownRemark {
//     edges {
//       node {
//         frontmatter {
//           title
//           excerpt
//           date
//         }
//         fields {
//           slug
//         }
//       }
//     }
//   }
//   }
// `
