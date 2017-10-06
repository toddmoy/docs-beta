import React, { Component } from 'react'
import Helmet from 'react-helmet'


export default function Template ({data}) {
  const { markdownRemark: post } = data

  return (
    <div>
      <Helmet title={ `${post.frontmatter.title} - SendGrid` } />
      <div>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </div>
  )
}
