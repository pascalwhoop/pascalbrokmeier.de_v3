import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/thumb_blog.jpg'
import pic02 from '../assets/images/thumb_about.jpg'
import pic03 from '../assets/images/thumb_books.jpg'
import pic04 from '../assets/images/thumb_contact2.jpg'
import pic05 from '../assets/images/thumb_github2.jpg'
import pic06 from '../assets/images/thumb_photography2.jpg'

class HomeIndex extends React.Component {
  constructor(props) {
    super(props)
    this.sections = [
      {
        title: 'Blog',
        text:
          'My scribble board. Here I share more and less useful tidbits about technology and sometimes travels or social observations',
        url: '/blog',
        image: pic01,
      },
      {
          title: "About Me",
          text: "Who I am, where I am from, what I do and what I want",
          url: "/about",
          image: pic02
      },
      {
          title: "Get in Contact",
          text: "Want to contact me? Take your pic from several ways of communication. PGP included",
          url: "/contact",
          image: pic04
      },
      {
          title: "Readinglist",
          text: "Need some new inspiration for books, podcasts, articles etc? Look no further!",
          url: "/reading",
          image: pic03
      },
      {
          title: "Photography",
          text: "Some shots of my travels shared with the community.",
          url: "https://unsplash.com/@pascalwhoop",
          image: pic06
      },
      {
          title: "Code",
          text: "My Github profile",
          url: "https://github.com/pascalwhoop",
          image: pic05
      }
    ]
}
  render() {
    return (
      <Layout>
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

        <Banner />

        <div id="main">
            <section id="one" className="tiles">
          {this.sections.map((section, index) => (
            <article style={{ backgroundImage: `url(${section.image})` }} key={index}>
              <header className="major">
                <h3>{section.title}</h3>
                <p>{section.text}</p>
              </header>
              <Link to={section.url} className="link primary"></Link>
            </article>
          ))}
          </section>
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
