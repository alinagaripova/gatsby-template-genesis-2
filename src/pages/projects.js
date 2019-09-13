import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

export const query = graphql`
  query projectsQuery {
    site {
      ...SiteInformation
    }
  }
`

const ContactsPage = ({ data }) => {
    const siteTitle = data.site.siteMetadata.title

    return (
        <Layout title={siteTitle}>
            <SEO title="Контакты" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />
            <article className="post-content page-template no-image">
                <div className="post-content-body">
                    <h2 id="clean-minimal-and-deeply-customisable-london-is-a-theme-made-for-people-who-appreciate-simple-lines-">
                        Проекты
                    </h2>


                </div>
            </article>

        </Layout>
    )
}

export default ContactsPage