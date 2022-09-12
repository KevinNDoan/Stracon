import React, { useRef, useEffect } from 'react'
import ReactDOM from 'react-dom'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Navbar.module.css'

export default function Header(props) {
    // Change title if depending on page
    let pageName = 'Stracon'
    if (props.pageName != 'Home')
        pageName = `${props.pageName} - Stracon`

    return (
        <>
            <Head>
                <title>{pageName}</title>
                <meta name="description" content="Full Service Contract Manufacturing" />
                <link rel="icon" href="/favicon.ico" />

                <link rel="canonical" href="https://www.straconinc.com/" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Stracon {props.pageName}" />
                <meta property="og:description" content="Stracon is the manufacturing partner you can depend on to meet the needs of a challenging market." />
                <meta property="og:url" content="https://www.northropgrumman.com/" />
                <meta property="og:site_name" content="Stracon" />
            </Head>
            <Navbar pageName={props.pageName} />
        </>
    )
}

class Navbar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            sideNav: 'hidden'
        }

        this.handlePageSelected = this.handlePageSelected.bind(this)
        this.toggleMenu = this.toggleMenu.bind(this)
    }

    componentDidMount() {
        this.handlePageSelected()
    }

    handlePageSelected() {
        const defaultStyle = 'text-zinc-600 hover:text-black'

        // Reset state
        this.setState({
            home: defaultStyle,
            about: defaultStyle,
            equipment: defaultStyle,
            industries: defaultStyle,
            contact: defaultStyle
        }, () => {
            // Set state
            if (this.props.pageName !== 'Home' || this.props.pageName !== 'Error') {
                let pageSelected = this.props.pageName.toLowerCase()
                this.setState({
                    [pageSelected]: 'underline underline-offset-4'
                })
            }
        })
    }

    toggleMenu() {
        if (this.state.sideNav === 'hidden') this.setState({ sideNav: '' })
        else this.setState({ sideNav: 'hidden' })
    }

    render() {
        return (
            <>
                <div className={`flex bg-white justify-between px-8 md:px-14 pt-8 pb-5 items-end border-b-2`}>
                    <section className={`${styles.logo}`}>
                        <Link href="/"><h1 className="logo text-3xl md:text-5xl font-bold">Stracon</h1></Link>
                    </section>
                    <section>
                        <nav className={`${styles.menu} text-base font-semibold space-x-5`}>
                            <Link href="/about"><h3 className={`${this.state.about} clickable`} onClick={this.handlePageSelected}>About</h3></Link>
                            <Link href="/equipment"><h3 className={`${this.state.equipment} clickable`} onClick={this.handlePageSelected}>Equipment</h3></Link>
                            <Link href="/industries"><h3 className={`${this.state.industries} clickable`} onClick={this.handlePageSelected}>Industries</h3></Link>
                            <Link href="/contact"><h3 className={`${this.state.contact} clickable`} onClick={this.handlePageSelected}>Contact Us</h3></Link>
                        </nav>
                        <div className={`${styles.smallMenu}`}>
                            <div onClick={this.toggleMenu} className="clickable">
                                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill="currentColor" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                                </svg>
                            </div>
                        </div>
                    </section>
                </div >
                <SideNav toggler={this.toggleMenu} state={this.state} handlePageSelected={this.handlePageSelected} />
            </>
        )
    }
}

function SideNav(props) {
    useEffect(() => {
        if (props.state.sideNav === '' && typeof window === 'object') {
            const documentWidth = document.documentElement.clientWidth;
            const windowWidth = window.innerWidth;
            const scrollBarWidth = windowWidth - documentWidth;

            document.body.style.position = "absolute"
            document.body.style.overflow = "hidden"
            document.body.style.height = "100%"
            document.body.style.width = "100%"
            document.body.style.paddingRight = (scrollBarWidth + "px")
        } else {
            document.body.style.position = "static"
            document.body.style.overflow = ""
            document.body.style.height = "auto"
            document.body.style.paddingRight = 0
        }
    })

    if (typeof window === 'object') {
        return ReactDOM.createPortal(
            <>
                <div className={`${styles.sideNav} ${props.state.sideNav}`}>
                    <nav className={`${styles.sideNavBody} p-10`}>
                        <div className="flex justify-between">
                            <h1 className="logo text-3xl md:text-5xl font-bold">Stracon</h1>
                            <div onClick={props.toggler} className="clickable">
                                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                                </svg>
                            </div>
                        </div>
                        <br />
                        <hr />
                        <br />
                        <div className="text-4xl font-semibold">
                            <Link href="/"><h3 className={`${props.state.home} clickable my-4`} onClick={props.handlePageSelected}>Home</h3></Link>
                            <Link href="/about"><h3 className={`${props.state.about} clickable my-4`} onClick={props.handlePageSelected}>About</h3></Link>
                            <Link href="/equipment"><h3 className={`${props.state.equipment} clickable my-4`} onClick={props.handlePageSelected}>Equipment</h3></Link>
                            <Link href="/industries"><h3 className={`${props.state.industries} clickable my-4`} onClick={props.handlePageSelected}>Industries</h3></Link>
                            <Link href="/contact"><h3 className={`${props.state.contact} clickable my-4`} onClick={props.handlePageSelected}>Contact Us</h3></Link>
                        </div>
                    </nav>
                </div>
            </>,
            document.getElementById('__portal')
        )
    }

    return <></>
}