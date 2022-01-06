import React from "react"
import Navigation from "./Navigation"
import "../styles/global.css"

function Layout({ children }) {
  return (
    <div className="wrapper">
      <Navigation />
      <div className="content">{children}</div>
      <footer>
        <p>&copy; 2022 Matthew</p>
      </footer>
    </div>
  )
}

export default Layout
