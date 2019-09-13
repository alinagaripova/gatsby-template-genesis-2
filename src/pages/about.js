import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

export const query = graphql`
  query indexQuery {
    site {
      ...SiteInformation
    }
    benchAccounting: file(
        relativePath: { eq: "bench-accounting-49909-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1560, maxHeight: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const AboutPage = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="О нас" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2 id="clean-minimal-and-deeply-customisable-london-is-a-theme-made-for-people-who-appreciate-simple-lines-">
              О нас
          </h2>
          <figure className="kg-card kg-image-card kg-width-full">
            <Img
              fluid={data.benchAccounting.childImageSharp.fluid}
              className="kg-image"
            />
            <figcaption>С любовью, Genesis</figcaption>
          </figure>
          <h3 id="dynamic-styles">О компании</h3>
          <p>
            Информация о компании и чем мы занимаемся.Информация о компании и чем мы занимаемся.
              Информация о компании и чем мы занимаемся.Информация о компании и чем мы занимаемся.
          </p>
          <p>
              Информация о компании и чем мы занимаемся.Информация о компании и чем мы занимаемся.
              Информация о компании и чем мы занимаемся.Информация о компании и чем мы занимаемся.
              Информация о компании и чем мы занимаемся.Информация о компании и чем мы занимаемся.{" "}
            <a href="http://headmade.pro/">
                Подробнее
            </a>{" "}
              Информация о компании и чем мы занимаемся.
          </p>
          <p>
              Информация о компании и чем мы занимаемся.{" "}
            <a href="http://headmade.pro/">
                Подробнее
            </a>{" "}
              Информация о компании и чем мы занимаемся.
          </p>
        </div>
      </article>
    </Layout>
  )
}

export default AboutPage



// export default props => (
//   <StaticQuery
//     query={indexQuery}
//     render={data => (
//       <AboutPage location={props.location} data={data} {...props} />
//     )}
//   />
// )
