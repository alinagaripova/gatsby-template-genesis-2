import React from "react"
import {graphql} from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

export const query = graphql`
  query projectsTemplate($path: String!) {
    site {
      ...SiteInformation
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        description
        technologies
        statistics
        href
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
`

class ProjectsTemplate extends React.Component {
    render() {
        const post = this.props.data.markdownRemark
        const siteTitle = this.props.data.site.siteMetadata.title

        return (
            <Layout title={siteTitle}>
                <SEO title={post.frontmatter.title} description={post.frontmatter.description}/>
                <article className={`post-content ${post.frontmatter.thumbnail || `no-image`}`}>
                    <header className="post-content-header">
                        <h1 className="post-content-title">{post.frontmatter.title}</h1>
                    </header>
                    <p class="post-content-excerpt">{post.frontmatter.description}</p>
                    <div className="post-content-image">
                        <Img className="kg-image" fluid={post.frontmatter.thumbnail.childImageSharp.fluid} alt={post.frontmatter.title}/>
                    </div>

                    <h4 id="unordered">Технологии:</h4>
                    <ul>
                        {post.frontmatter.technologies.map(technology =>
                            <li>{technology}</li>
                        )}
                    </ul>
                    <h4 id="unordered">Интересные факты:</h4>
                    <ul>
                        {post.frontmatter.statistics.map(statistic =>
                            <li>{statistic}</li>
                        )}
                    </ul>
                    <a href={post.frontmatter.href} className="button primary large">
                        {post.frontmatter.title}
                    </a>

                    <footer className="post-content-footer">
                        {/* There are two options for how we display the byline/author-info.
        If the post has more than one author, we load a specific template
        from includes/byline-multiple.hbs, otherwise, we just use the
        default byline. */}
                    </footer>
                </article>
            </Layout>
        )
    }
}

export default ProjectsTemplate
