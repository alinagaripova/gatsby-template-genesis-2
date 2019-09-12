import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

export const query = graphql`
  query contactQuery {
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
                        Контакты
                    </h2>
                    <form method="post" action="#">
                        <div className="row gtr-uniform">
                            <div className="col-6 col-12-xsmall">
                                <label for="demo-name">Имя</label>
                                <input type="text" name="demo-name" id="demo-name" placeholder=""
                                />
                            </div>
                            <div className="col-6 col-12-xsmall">
                                <label for="demo-email">Email</label>
                                <input type="email" name="demo-email" id="demo-email" placeholder=""
                                />
                            </div>
                            <label for="demo-name">Введите сообщение</label>
                            <textarea name="demo-message" id="demo-message" placeholder="" rows={6} defaultValue={""}/>
                            </div>
                            {/* Break */}
                            <div className="col-12">
                                <ul className="actions">
                                    <li>
                                        <input type="submit" defaultValue="Send Message" className="primary" />
                                    </li>
                                    <li>
                                        <input type="reset" defaultValue="Reset" />
                                    </li>
                                </ul>
                            </div>
                    </form>
                </div>
            </article>

        </Layout>
    )
}

export default ContactsPage