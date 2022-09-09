import Link from 'next/link'

import styles from '../styles/Home.module.css'

export default function Footer() {
    let date = new Date
    let currentYear = date.getFullYear()

    return (
        <footer className={`block md:flex p-12 mt-16 justify-center items-center bg-zinc-800 text-white md:space-x-12`}>
            <section>
                <Link href="/"><h1 className="text-3xl md:text-5xl font-bold text-red-600 clickable">Stracon</h1></Link>
            </section>
            <section>
                <div className="grid grid-cols-1 md:grid-cols-3">
                    <div>
                        <div className="mb-3"><b><Link href="/about">About</Link></b></div>
                        <div className="mb-3"><b><Link href="/equipment">Equipment</Link></b></div>
                        <div className="mb-3"><b><Link href="/industries">Industries</Link></b></div>
                    </div>
                    <div>
                        <div className="mb-3"><b><Link href="/technologies">Technologies</Link></b></div>
                        <div className="mb-3"><b><Link href="/contact">Contact Us</Link></b></div>
                    </div>
                </div>
                <br />
                <hr />
                <br />
                <div>Copyright © {currentYear} <b>Stracon Inc.</b> All rights reserved. 1672 Kaiser Avenue Irvine, CA 92614</div>
            </section>
        </footer>
    )
}