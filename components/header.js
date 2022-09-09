import React, { useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Navbar.module.css'

export default function Header(props) {
    // Change title if depending on page
    let pageName
    if (props.pageName !== 'Home')
        pageName = `${props.pageName} | Stracon`

    return (
        <>
            <Head>
                <title>Stracon {props.pageName}</title>
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
            hiddenMenu: 'none'
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
            about: defaultStyle,
            equipment: defaultStyle,
            industries: defaultStyle,
            technologies: defaultStyle,
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
        if (this.state.hiddenMenu === 'none') {
            this.setState({ hiddenMenu: '' })
            return
        } this.setState({ hiddenMenu: 'none' })
    }

    render() {
        return (
            <div className={`flex bg-white justify-between px-8 md:px-14 pt-8 pb-5 items-end border-b-2`}>
                <section className={`${styles.logo}`}>
                    <Link href="/"><h1 className="text-3xl md:text-5xl font-bold text-red-600 clickable">Stracon</h1></Link>
                </section>
                <section>
                    <div className={`${styles.menu} text-base font-semibold space-x-5`}>
                        <Link href="/about"><h3 className={`${this.state.about} clickable`} onClick={this.handlePageSelected}>About</h3></Link>
                        <Link href="/equipment"><h3 className={`${this.state.equipment} clickable`} onClick={this.handlePageSelected}>Equipment</h3></Link>
                        <Link href="/industries"><h3 className={`${this.state.industries} clickable`} onClick={this.handlePageSelected}>Industries</h3></Link>
                        <Link href="/technologies"><h3 className={`${this.state.technologies} clickable`} onClick={this.handlePageSelected}>Technologies</h3></Link>
                        <Link href="/contact"><h3 className={`${this.state.contact} clickable`} onClick={this.handlePageSelected}>Contact Us</h3></Link>
                    </div>
                    <div className={`${styles.smallMenu}`}>
                        <div className="clickable" onClick={this.toggleMenu}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill="currentColor" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                            </svg>
                        </div>
                        <div className={`${this.state.hiddenMenu} bg-white vw-100`}>

                        </div>
                    </div>
                </section >
            </div >
        )
    }
}