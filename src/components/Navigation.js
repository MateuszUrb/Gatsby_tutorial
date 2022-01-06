import React from "react"
import { Link } from "gatsby"

function Navigation() {
  return (
    <nav>
      <Link to="/">
        <h1>Matthew</h1>
      </Link>
      <div className="links">
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
      </div>
    </nav>
  )
}
export default Navigation
