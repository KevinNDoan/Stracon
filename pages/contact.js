import React, { Component } from 'react'

import styles from '../styles/Contact.module.css'
import Header from '../components/header.js'
import Footer from '../components/footer.js'

export default class Contact extends React.Component {
    render() {
        return (
            <>
                <Header pageName={'Contact'} />

                <main className="m-10 md:m-20">
                    <section className="md:mx-20">
                        <h1 className="w-3/4 md:w-1/2 text-4xl md:text-5xl font-bold">Corporate Headquarters</h1>
                        <br />
                        <h3 className="w-3/4 md:w-1/2 text-xl md:text-3xl">Stracon Inc.</h3>
                        <p className="w-3/4 md:w-1/2 text-xl md:text-xl">1672 Kaiser Avenue</p>
                        <p className="w-3/4 md:w-1/2 text-xl md:text-xl">Irvine, CA 92614</p>
                        <br />
                        <p className="w-3/4 md:w-1/2 text-xl md:text-xl">Phone: (949) 851 2288</p>
                        <p className="w-3/4 md:w-1/2 text-xl md:text-xl">Fax: (949) 851 2299</p>
                    </section>
                    <br />
                    <section className="p-5 md:p-10 border-black border-4 md:m-20">
                        <form action="">
                            <h1 className="w-3/4 md:w-1/2 text-xl md:text-3xl font-bold">Email Us</h1>
                            <br />
                            <input className={styles.field} type="text" placeholder="Name" />
                            <input className={styles.field} type="text" placeholder="Email" />
                            <input className={styles.field} type="text" placeholder="Subject" />
                            <textarea className={styles.field} type="text" placeholder="Name"></textarea>
                            <br />
                            <div className="flex justify-end mt-10">
                                <button className="bg-black text-white font-bold p-4">Send Email</button>
                            </div>
                        </form>
                    </section>
                </main>

                <Footer />
            </>
        )
    }
}