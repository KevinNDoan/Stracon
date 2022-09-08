import React, {useEffect} from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Navbar.module.css'

export default function Header(props) {
    // This is a temporary fixture until tailwindcss is install via NPM
    useEffect(() => {
        const script = document.createElement('script');
      
        script.src = "https://cdn.tailwindcss.com";
        script.async = true;
      
        document.body.appendChild(script);
      
        return () => {
          document.body.removeChild(script);
        }
      }, []);

    return(
        <>
        <Head>
            <title>Stracon {props.pageName}</title>
            <meta name="description" content="Full Service Contract Manufacturing" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar pageName={props.pageName} />
        </>
    )
}

class Navbar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            hiddenMenu: 'hidden'
        }

        this.toggleMenu = this.toggleMenu.bind(this)
    }

    toggleMenu() {
        if(this.state.hiddenMenu === 'hidden')
            this.setState({ hiddenMenu: '' })
        else
            this.setState({ hiddenMenu: 'hidden' })
    }
    
    render() {
        return(
            <div className={`flex bg-white`}>
                <section className={styles.logo}></section>
                <section className={`${styles.menu}`}>
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/equipment">Equipment</Link>
                    <Link href="/industries">Industries</Link>
                    <Link href="/technologies">Technologies</Link>
                    <Link href="/value-added">Value Added</Link>
                    <Link href="/contact">Contact Us</Link>
                </section>
                <section className={`${styles.small-menu}`}>
                    <div onClick={this.toggleMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                        </svg>
                    </div>
                    <div>
                        
                    </div>
                </section>
            </div>
        )
    }
}