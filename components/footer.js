// import styles from '../styles/Home.module.css'

export default function Footer() {
    let date = new Date
    let currentYear = date.getFullYear()

    return(
        <footer className={`flex p-16 mt-16 justify-center items-center bg-black text-white`}>
            Copyright © 1986 - {currentYear} Stracon Inc.
        </footer>
    )
}