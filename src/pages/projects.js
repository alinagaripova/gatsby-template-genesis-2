import React from "react"
import {graphql} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostCard from "../components/postCard"

import "../utils/normalize.css"
import "../utils/css/screen.css"

// export const query = graphql`
//   query projectsQuery {
//     site {
//       ...SiteInformation
//     }
//   }
// `
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
            {/*<div className="post-feed">*/}
                {/*<article className="post-card">*/}

                {/*</article>*/}
                {/*<article className={`post-card`} style={{background: "white", padding:"1rem"}}>*/}
                    {/*<div className="col-12"><h5 id="heading-level-5">Имя проекта 1</h5></div>*/}
                    {/*<div className="col-12">*/}
                    {/*<p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio*/}
                        {/*porttitor sem non mi integer non faucibus ornare mi ut ante amet*/}
                        {/*placerat aliquet.</p>*/}
                    {/*</div>*/}
                    {/*<h3 id="unordered">*/}
                        {/*<strong>*/}
                            {/*<strong>Unordered</strong>*/}
                        {/*</strong>*/}
                    {/*</h3>*/}
                    {/*<ul>*/}
                        {/*<li>Dolor pulvinar etiam.</li>*/}
                        {/*<li>Sagittis lorem eleifend.</li>*/}
                        {/*<li>Felis feugiat dolore viverra.</li>*/}
                        {/*<li>Dolor pulvinar etiam.</li>*/}
                    {/*</ul>*/}
                {/*</article>*/}
            {/*</div>*/}


        </Layout>
    )
}

export default ProjectsPage