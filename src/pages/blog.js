import React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import BannerLanding from '../components/BannerLanding'
import Layout from '../components/layout'
import { faIconMapper } from '../functions/icons'
import ContactForm from '../components/Contact'

class Post {
  constructor(title, subtitle, url, coverUrl) {}
}
class Contact extends React.Component {
  constructor(props) {
    super(props)
  }

  buildPosts(data) {
    //build medium source
    //bug 
    // https://github.com/gatsbyjs/gatsby/issues/17335
    let mediumPosts = [ ];
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
    let localPosts = data.allMarkdownRemark.edges.map(({node}) => ({
      title: node.frontmatter.title,
      url: node.fields.slug,
      excerpt: node.frontmatter.excerpt,
      imgUrl: "",
      tags: node.frontmatter.tags,
      sourceName: 'pascalbrokmeier.de',
      type: 'local',
      date: new Date(node.frontmatter.date)
    }))

    let allPosts = [].concat(mediumPosts).concat(localPosts).sort((a,b) => b.date-a.date)
    return allPosts.map((post, index) => (
      <section key={index}>
        <a href={post.url} className="image" target="_blank">
          {/* <div className="post-image" style={{backgroundImage: `url:(${post.imgUrl})`}}></div> */}
          <img src={post.imgUrl} alt="" />
        </a>
        <div className="content">
          <div className="inner">
            <header className="major">
              <h3>{post.title}</h3>
            </header>
            <p>{post.excerpt}</p>
            <ul className="actions">
              <li>
                <a href={post.url} className="button" target="_blank">
                  Read on {post.sourceName}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    ))
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
                  A collection of various blog posts on Medium, my personal page and other publications. 
                  <br />
                </p>
              </div>
            </div>
          </section>
          <div id="main">
            <div className="inner">
              <div className="spotlights">
                {this.buildPosts(this.props.data)}
              </div>
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
         }
         fields {
           slug
         }
       }
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
