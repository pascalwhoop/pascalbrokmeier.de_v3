import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Helmet from 'react-helmet'
import WordLimit from 'react-word-limit';


const Reading = ({ data }) => {
  const books = data.goodreadsShelf.reviews.sort(
    (a, b) => a.dateAdded > b.dateAdded
  )
  return (
    <Layout>
      <Helmet>
        <title>PB</title>
        <meta name="description" content="Readinglist" />
      </Helmet>

      <div className="main">
        <div className="inner">
          <div>
            {/* <div className="grid-wrapper"> */}
              {books.map(book => (
                <div className="bookBlock" >
                {/* <div className="col-6" key={book.book.bookID}> */}
                  <h3>{book.book.title}</h3>
                  <div>
                      <img src={book.book.imageUrl} alt="" className="bookCover" />
                      <WordLimit limit={100}>
                    <p className="bookDescription"
                      dangerouslySetInnerHTML={{
                        __html: book.book.description,
                      }}
                    ></p>
                      </WordLimit>
                  </div>
              </div>
              ))}
            {/*</div>*/}
            <pre>{JSON.stringify(books, null, 4)}</pre>
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html: data.markdownRemark.html,
            }}
          ></div>
        </div>
      </div>
    </Layout>
  )
}

export default Reading

export const query = graphql`
  query GoodreadsQuery {
    goodreadsShelf {
      reviews {
        book {
          title
          uri
          largeImageUrl
          imageUrl
          link
          bookID
          description
        }
        dateAdded
        dateUpdated
        rating
      }
    }
    markdownRemark(frontmatter: { id: { eq: "readinglist" } }) {
      id
      html
    }
  }
`
