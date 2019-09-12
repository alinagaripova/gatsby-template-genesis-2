import React from "react"
import { Link } from "gatsby"

const Header = (props) => {
    const [toggleNav, setToggleNav] = React.useState(false)

    return (
    <header className="site-head">
        <div className="site-head-container">
            <a
                className="nav-burger"
                href={`#`}
                onClick={() => setToggleNav(!toggleNav)}
            >
                <div
                    className="hamburger hamburger--collapse"
                    aria-label="Menu"
                    role="button"
                    aria-controls="navigation"
                >
                    <div className="hamburger-box">
                        <div className="hamburger-inner" />
                    </div>
                </div>
            </a>
            <nav id="swup" class="site-head-left">
                <ul className="nav" role="menu"> {/*поменять подстветку при выбранном элементе меню*/}
                    <li className="nav-home nav-current" role="menuitem">
                        <Link to={`/`}>Главная</Link>
                    </li>
                    <li className="nav-about" role="menuitem">
                        <Link to={`/about`}>О нас</Link>
                    </li>
                    <li className="nav-elements" role="menuitem">
                        <Link to={`/elements`}>Элементы</Link>
                    </li>
                </ul>
            </nav>
            <div className="site-head-center">
                <Link className="site-head-logo" to={`/`}>
                    {props.title}
                </Link>
            </div>
            <div className="site-head-right">
                <div className="social-links">
                    <Link to="/contacts" className="nav-contacts" role="menuitem">
                        Свяжись с нами
                    </Link>
                    <a
                        href="https://twitter.com"
                        title="Twitter"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Twitter
                    </a>{/*поменять на иконки*/}

                    <Link
                        to={`/rss.xml`}
                        title="RSS"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        RSS
                    </Link>
                </div>
            </div>
        </div>
    </header>
)}

export default Header