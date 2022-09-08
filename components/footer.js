// import styles from '../styles/Home.module.css'

export default function Footer() {
    let date = new Date
    let currentYear = date.getFullYear()

    return(
        <footer className={`flex justify-center items-center p-15 mt-15`}>
            <div></div>
            <hr />
            Copyright © 1986 - {currentYear} Stracon Inc.
        </footer>
    )
}