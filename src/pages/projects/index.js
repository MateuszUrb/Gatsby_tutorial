import React from "react"
import Layout from "../../components/Layout"
import * as styles from "../../styles/projects.module.css"
import { graphql, Link } from "gatsby"

function Projects({ data }) {
  const projects = data.allMarkdownRemark.nodes
  return (
    <Layout>
      <div className={styles.projects}>
        <h1>UNDER CONSTRUCTION</h1>
        <div>
          {projects.map(project => (
            <Link to={`/projects/${project.frontmatter.slug}`} key={project.id}>
              <h3>{project.frontmatter.title}</h3>
              <p>{project.frontmatter.stack}</p>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ProjectPage {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          stack
          title
          slug
        }
        id
      }
    }
  }
`

export default Projects
