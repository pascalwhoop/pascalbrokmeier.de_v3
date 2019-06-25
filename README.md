# Pascal Brokmeier Homepage v3

This page is based on a few key technologies:
- GraphQL for pulling in data from a number of sources
- Gatsby.js for building an awesome website based on ReactJS (which I learned to use in '19 and kinda like)
- Airtable data for a number of pages that I use to express myself with
  - pulling in this data via GraphQL during build
- cloudinary asset optimization for images
- whatever comes out of the box of the original at [codebushi](https://github.com/codebushi/gatsby-starter-forty)


## Data driven pages

- reading list / podcast list
- CV
- experience
- Contact methods
- Blog posts (collection across publishing sites!)
    - supports linking to a number of publishing places
    - pulls banner image in via cloudinary

# TODO
- create cloudinary component with easy interface
- migrate blog posts
- generic post list based on internal and external posts
  - posts on medium
  - posts on personal blog
  - posts on dataminded.be
  - posts on cattlecrew?
- convert current posts into markdown driven by gatsby with [this](https://www.gatsbyjs.org/docs/adding-markdown-pages/)
- reading list driven through airtable data
- monthly "tech" | "client"(legal?) | country graph

# DONE