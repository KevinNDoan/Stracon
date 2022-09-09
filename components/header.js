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
            <Navbar />
        </>
    )
}

class Navbar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            hiddenMenu: 'none'
        }

        this.toggleMenu = this.toggleMenu.bind(this)
    }

    toggleMenu() {
        if (this.state.hiddenMenu === 'none')
            this.setState({ hiddenMenu: '' })
        else
            this.setState({ hiddenMenu: 'none' })
    }

    render() {
        return (
            <div className={`flex bg-white justify-between px-14 pt-6 pb-6 items-end border-b-2`}>
                <section className={`${styles.logo}`}>
                    <Link href="/"><h1 className="text-3xl md:text-5xl font-bold text-red-600 clickable">Stracon</h1></Link>
                </section>
                <section>
                    <div className={`${styles.menu} text-base font-semibold space-x-5`}>
                        <Link href="/about"><h3 className="clickable">About</h3></Link>
                        <Link href="/equipment"><h3 className="clickable">Equipment</h3></Link>
                        <Link href="/industries"><h3 className="clickable">Industries</h3></Link>
                        <Link href="/technologies"><h3 className="clickable">Technologies</h3></Link>
                        <Link href="/contact"><h3 className="clickable">Contact Us</h3></Link>
                    </div>
                    <div className={`${styles.smallMenu}`}>
                        <div className="clickable" onClick={this.toggleMenu}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                            </svg>
                        </div>
                        <div className={`${this.state.hiddenMenu}`}>

                        </div>
                    </div>
                </section>
            </div>
        )
    }
}