import React from 'react'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Alert from '../components/Alert'

export default function Template ({data}) {
  const { markdownRemark: post } = data

  return (
    <div>
      <Helmet title={ `${post.frontmatter.title} - SendGrid` } />
      <Alert message="SendGrid is experiencing technical difficulties." />
      <Header />
      <div>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
      <Footer />
    </div>
  )
}

export const pageQuery = graphql`
  query ArticlePostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`