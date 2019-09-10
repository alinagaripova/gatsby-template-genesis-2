import React from "react"
import { Link } from "gatsby"
import Header from './header'
import Footer from "./footer";


const Layout = props => {
  const { title, children } = props
  const [toggleNav, setToggleNav] = React.useState(false)
  return (
    <div className={`site-wrapper ${toggleNav ? `site-head-open` : ``}`}>
      <Header title={title}/>
      <main id="site-main" className="site-main">
        <div id="swup" className="transition-fade">
          {children}
        </div>
      </main>
      <Footer title={title}/>
    </div>
  )
}

export default Layout
