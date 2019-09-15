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

## TODO
- build with Google Cloud Build and host on GCS
    - nearline
    - define everything with terraform
    - [see tutorial](https://cloud.google.com/community/tutorials/automated-publishing-cloud-build)
- migrate blog posts
    - [x] migrate markdown
    - [ ] migrate images
    - [ ] migrate cloudinary tags
    - [x] migrate medium
    - [ ] open local pages in local window, external posts in new links
    - [ ] posts on dataminded.be
    - [ ] posts on cattlecrew?
- convert current posts into markdown driven by gatsby with [this](https://www.gatsbyjs.org/docs/adding-markdown-pages/)
- reading list driven through airtable data
    - podcasts based on pocketcasts API
- monthly "tech" | "client"(legal?) | country graph
- https://visjs.org/examples/timeline/items/backgroundAreas.html
- http://uber.github.io/react-vis/examples/showcases/plots more viz

### DONE


### NOT DOING: 

- create cloudinary component with easy interface
