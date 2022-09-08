import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Navbar.module.css'

export default function Header(props) {
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

function Navbar() {
    return(
        <div className={`${styles.navbar} bg-white`}>
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