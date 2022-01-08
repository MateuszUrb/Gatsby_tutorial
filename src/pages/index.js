import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"
import { graphql } from "gatsby"
import Img from "gatsby-image"

export default function Home({ data }) {
  console.log(data)

  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h1>Customize your desktop</h1>
          <h3>monitors, keyboards, gaming accesories etc</h3>
          <p>soon in on out website </p>
          <Link className={styles.btn} to="/projects">
            Portfolio
          </Link>
        </div>
        <Img fluid={data.file.childImageSharp.fluid} />
      </section>
    </Layout>
  )
}

export const query = graphql`
  query Banner {
    file(relativePath: { eq: "website.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
