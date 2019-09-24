import React from 'react'
import Img from 'gatsby-image'
import { graphql, StaticQuery } from 'gatsby'

export default () => {
  return (
    <StaticQuery
      query={graphql`
        query BannerQuery {
          banner: allImageSharp(
            filter: { fluid: { originalName: { eq: "banner.jpg" } } }
          ) {
            edges {
              node {
                fluid {
                  ...GatsbyImageSharpFluid_noBase64
                  originalName
                }
              }
            }
          }
        }
      `}
      render={data => (
        <section id="banner" className="major">
			<Img fluid={data.banner.edges[0].node.fluid} style={{position: "initial"}}></Img>
          <div className="inner">
            <header className="major">
              <h1>Hi, I'm Pascal</h1>
            </header>
            <div className="content">
              <p>
                Check out my about page for more, read my blog or watch me code
                on YouTube or just take a picture of mine for your wallpaper. I
                share everything for free and really enjoy good conversations
                about meaningful topics. Let me know if you have something to
                talk about.
              </p>
              <ul className="actions">
                <li>
                  <a href="#one" className="button next scrolly">
                    Get Started
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      )}
    ></StaticQuery>
  )
}
