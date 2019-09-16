const path = require(`path`)
const {createFilePath} = require(`gatsby-source-filesystem`)

exports.createPages = ({graphql, actions}) => {
    const {createPage} = actions;

    const projectsData = graphql(`
        {
          projects: allMarkdownRemark(sort: {fields: [frontmatter___order], order: DESC}, filter: { fileAbsolutePath: { glob: "**/src/projects/*.md" }}) {
            edges {
              node {
                frontmatter {
                   path
                }
              }
            }
          }
        }
  `).then(result => {
        if (result.errors) {
            Promise.reject(result.errors);
        }

        result.data.projects.edges.forEach(edge => {
            const url = edge.node.frontmatter.path
            createPage({
                path: url,
                component: path.resolve(`./src/templates/projectsTemplate.js`),
                context: {slug: url},
            })
        })
    });
    return Promise.all([projectsData]);
    // const {createPage} = actions
    //
    // const blogPost = path.resolve(`./src/templates/blog-post.js`)
    // return graphql(
    //     `
    //   {
    //     allMarkdownRemark(
    //       sort: { fields: [frontmatter___date], order: DESC }
    //       filter: { fileAbsolutePath: { glob: "**/content/**/**/*.md" } }
    //       limit: 1000
    //     ) {
    //       edges {
    //         node {
    //           fields {
    //             slug
    //           }
    //           frontmatter {
    //             title
    //           }
    //         }
    //       }
    //     }
    //   }
    // `
    // ).then(result => {
    //     if (result.errors) {
    //         throw result.errors
    //     }
    //
    //     // Create blog posts pages.
    //     const posts = result.data.allMarkdownRemark.edges
    //
    //     posts.forEach((post, index) => {
    //         const previous = index === posts.length - 1 ? null : posts[index + 1].node
    //         const next = index === 0 ? null : posts[index - 1].node
    //
    //         createPage({
    //             path: post.node.fields.slug,
    //             component: blogPost,
    //             context: {
    //                 slug: post.node.fields.slug,
    //                 previous,
    //                 next,
    //             },
    //         })
    //     })
    //
    //     return null
    // })
}

exports.onCreateNode = ({node, actions, getNode}) => {
    const {createNodeField} = actions

    if (node.internal.type === `MarkdownRemark`) {
        const value = createFilePath({node, getNode})
        createNodeField({
            name: `slug`,
            node,
            value,
        })
    }
}
