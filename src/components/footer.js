import React from "react"
import { Link } from "gatsby"

const Footer = (props) => {
    const [toggleNav, setToggleNav] = React.useState(false)

    return (
        <footer className="site-foot">
            &copy; {new Date().getFullYear()} <Link to={`/`}>{props.title}</Link> &mdash;
            Built with{" "}
            <a
                href="https://gatsbyjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Gatsby
            </a>
        </footer>
    )}

export default Footer