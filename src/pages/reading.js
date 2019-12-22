import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Helmet from 'react-helmet'
import WordLimit from 'react-word-limit'

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
            {/* <h2>Podcasts</h2> */}
            <h2>Books</h2>
            {books.map(book => (
              <div className="bookBlock" key={book.book.bookID}>
                {/* <div className="col-6" key={book.book.bookID}> */}
                <h4>{book.book.title}</h4>
                <div>
                  <div className="bookCover">
                  <img src={book.book.imageUrl} alt="" />
                  </div>
                  <WordLimit limit={100}>
                    <div>
                      <div
                        className="bookDescription"
                        dangerouslySetInnerHTML={{
                          __html: book.book.description.substring(0, 500),
                        }}
                      ></div>
                      <a
                        href={book.book.link}
                        target="_blank"
                        className="button"
                      >
                        See more
                      </a>
                    </div>
                  </WordLimit>
                </div>
              </div>
            ))}
          </div>
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
  }
`
