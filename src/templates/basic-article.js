import React from 'react'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../app.css'

export default function Template ({data}) {
  const { markdownRemark: post } = data

  return (
    <div>
      <Helmet title={ `${post.frontmatter.title} - SendGrid` } />
      <Header />
      <div>
        <h1>{ post.frontmatter.title }</h1>
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
        path
        title
        categories
      }
    }
  }
`