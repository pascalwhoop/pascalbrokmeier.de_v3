import React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'
import Img from 'gatsby-image'
import _ from "lodash"

class HomeIndex extends React.Component {
  constructor(props) {
    super(props)
    let thumbs = _.keyBy(props.data.thumbs.edges.map(({node}) => node), "fluid.originalName")
    this.sections = [
      {
        title: 'Blog',
        text:
          'My scribble board. Here I share more and less useful tidbits about technology and sometimes travels or social observations',
        url: '/blog',
        image: thumbs["thumb_blog.jpg"],
      },
      {
        title: 'About Me',
        text: 'Who I am, where I am from, what I do and what I want',
        url: '/about',
        image: thumbs["thumb_about.jpg"],
      },
      {
        title: 'Get in Contact',
        text:
          'Want to contact me? Take your pic from several ways of communication. PGP included',
        url: '/contact',
        image: thumbs["thumb_contact2.jpg"],
      },
      {
        title: 'Readinglist',
        text:
          'Need some new inspiration for books, podcasts, articles etc? Look no further!',
        url: '/reading',
        image: thumbs["thumb_books.jpg"],
      },
      {
        title: 'Photography',
        text: 'Some shots of my travels shared with the community.',
        url: 'https://unsplash.com/@pascalwhoop',
        image: thumbs["thumb_photography2.jpg"],
      },
      {
        title: 'Code',
        text: 'My Github profile',
        url: 'https://github.com/pascalwhoop',
        image: thumbs["thumb_github2.jpg"],
      },
    ]
  }
  render() {
    return (
      <Layout >
        <Helmet
          title="Pascal Brokmeier - Homepage"
          meta={[
            {
              name: 'description',
              content:
                'My personal homepage. A collection of blog articles, links to other places, contact information and whatever else I feel like. ',
            },
            {
              name: 'keywords',
              content: 'technology, blog, society, software',
            },
          ]}
        ></Helmet>


        <Banner></Banner>

        <div id="main">
          <section id="one" className="tiles">
            {this.sections.map((section, index) => (
              <article key={index} >
                <Img fluid={section.image.fluid} style={{position: "absolute", top: 0, left: 0, width: "100%", height: "100%"}}></Img>
                <header className="major">
                  <h3>{section.title}</h3>
                  <p>{section.text}</p>
                </header>
                {section.url.startsWith("http") ? <a target="_blank" className="link primary" href={section.url}></a> : <Link to={section.url} className="link primary"></Link>}
              </article>
            ))}
          </section>
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
export const query = graphql`
query IndexQuery {
thumbs: allImageSharp(filter: {fluid: {originalName: {glob: "thumb*"}}}) {
    edges {
      node {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_noBase64
          originalName
        }
      }
    }
  }
}
`
