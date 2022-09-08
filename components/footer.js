import styles from '../styles/Home.module.css'

export default function Footer() {
    return(
        <footer className={styles.footer}>
            Copyright © 1986 - {new Date.now} Stracon Inc.
        </footer>
    )
}