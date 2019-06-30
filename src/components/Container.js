import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

const Container = props => {

  const { children } = props
  return (
    <Layout>
      <Helmet>
        <title>PB</title>
        <meta name="description" content="Homepage of PB" />
      </Helmet>

      <div id="main">{children}</div>
    </Layout>
  )
}

export default Container
