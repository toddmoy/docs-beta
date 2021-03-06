import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Index({data}) {
  const { edges: posts } = data.allMarkdownRemark

  return(
    <div>
      <Header />
      {
        posts.filter( post => post.node.frontmatter.title.length > 0 )
        .map(({ node: post }) => {
          return (
            <div key={post.id}>
              <h1>
                <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
              </h1>
              <p>{post.excerpt}</p>
            </div>
          )
        })
      }
      <Footer />
    </div>
  )
}

// Return all posts that are not hidden.

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark( filter:{ frontmatter: { hidden: { ne:true }}}) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`