import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Navbar.module.css'

export default function Header(props) {
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

function Navbar() {
    return(
        <div className={styles.navbar}>
            <section className={styles.logo}></section>
            <section className={styles.menu}>
                <Link href="/home">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/equipment">Equipment</Link>
                <Link href="/industries">Industries</Link>
                <Link href="/technologies">Technologies</Link>
                <Link href="/value-added">Value Added</Link>
                <Link href="/contact">Contact Us</Link>
            </section>
        </div>
    )
}