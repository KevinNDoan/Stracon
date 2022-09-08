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
    
    // Change title if depending on page
    let pageName
    if(props.pageName !== 'Home')
      pageName = `${props.pageName} | Stracon`

    return(
        <>
        <Head>
            <title>Stracon {props.pageName}</title>
            <meta name="description" content="Full Service Contract Manufacturing" />
            <link rel="icon" href="/favicon.ico" />
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
        if(this.state.hiddenMenu === 'none')
            this.setState({ hiddenMenu: '' })
        else
            this.setState({ hiddenMenu: 'none' })
    }
    
    render() {
        return(
            <div className={`flex bg-white justify-between p-15 items-end border-b-2`}>
                <section className={`${styles.logo}`}>
                    <h1 className="text-4xl font-semibold">Stracon</h1>
                </section>
                <section>
                    <div className={`${styles.menu} space-x-5`}>
                        <Link href="/"><h3 className="text-base clickable">Home</h3></Link>
                        <Link href="/about"><h3 className="text-base clickable">About</h3></Link>
                        <Link href="/equipment"><h3 className="text-base clickable">Equipment</h3></Link>
                        <Link href="/industries"><h3 className="text-base clickable">Industries</h3></Link>
                        <Link href="/technologies"><h3 className="text-base clickable">Technologies</h3></Link>
                        <Link href="/valueadded"><h3 className="text-base clickable">Value Added</h3></Link>
                        <Link href="/contact"><h3 className="text-base clickable">Contact Us</h3></Link>
                    </div>
                    <div className={`${styles.smallMenu}`}>
                        <div className="clickable" onClick={this.toggleMenu}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
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