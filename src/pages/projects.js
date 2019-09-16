import React from "react"
import {graphql} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostCard from "../components/postCard"

import "../utils/normalize.css"
import "../utils/css/screen.css"

export const query = graphql`
  query projectsQuery {
    site {
      ...SiteInformation
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC } filter: { fileAbsolutePath: { glob: "**/src/projects/*.md" }}) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 1360) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`


const ProjectsPage = ({data}) => {
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges
    let postCounter = 0

    return (
        <Layout title={siteTitle}>
            <SEO title="Проекты" keywords={[`blog`, `gatsby`, `javascript`, `react`]}/>
            <div className="post-content page-template no-image">
                <div className="post-content-body">
                    <h2 id="clean-minimal-and-deeply-customisable-london-is-a-theme-made-for-people-who-appreciate-simple-lines-">
                        Проекты
                    </h2>
                </div>
            </div>
            <div className="post-feed">
                {posts.map(({node}) => {
                    postCounter++
                    return (
                        <PostCard key={node.fields.slug} count={postCounter} node={node} postClass={`post`}/>
                    )
                })}
            </div>
        </Layout>
    )
}

export default ProjectsPage