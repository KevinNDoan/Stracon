// import styles from '../styles/Home.module.css'

export default function Footer() {
    let date = new Date
    let currentYear = date.getFullYear()

    return(
        <footer className={`flex p-15 mt-15 justify-center items-center`}>
            <div></div>
            <hr />
            Copyright © 1986 - {currentYear} Stracon Inc.
        </footer>
    )
}