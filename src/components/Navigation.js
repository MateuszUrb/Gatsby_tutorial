import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

function Navigation() {
  const data = useStaticQuery(graphql`
    query WebsiteInto {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const { title } = data.site.siteMetadata

  return (
    <nav>
      <Link to="/">
        <h1>{title}</h1>
      </Link>
      <div className="links">
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
      </div>
    </nav>
  )
}
export default Navigation
