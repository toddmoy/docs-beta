import React from 'react'
import Link from 'gatsby-link'
import Alert from './Alert'

const Header = () => (
  <header>
    <Alert message="SendGrid is experiencing technical difficulties." />
    <a href="https://sendgrid.com">SendGrid</a>
    <ul>
      <li><Link to="/">Help &amp; Support</Link></li>
      <li><Link to="/for-developers">For Developers</Link></li>
      <li><Link to="/glossary">Glossary</Link></li>
      <li><a href="http://status.sendgrid.com/">Status</a></li>
    </ul>
  </header>
)

export default Header
