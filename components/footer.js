import styles from '../styles/Home.module.css'

export default function Footer() {
    let date = new Date
    let currentYear = date.getFullYear()

    return(
        <footer className={styles.footer}>
            Copyright © 1986 - {currentYear} Stracon Inc.
        </footer>
    )
}