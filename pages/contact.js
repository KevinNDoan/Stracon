import React, { Component } from 'react'

import styles from '../styles/Contact.module.css'
import Header from '../components/header.js'
import Footer from '../components/footer.js'

export default class Contact extends React.Component {
    constructor(props) {
        super(props)

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleInput = this.handleInput.bind(this)
    }

    handleSubmit() {

    }

    handleInput() {

    }

    render() {
        return (
            <>
                <Header pageName={'Contact'} />

                <main className="grid grid-cols-2 m-10 md:m-20">
                    <section className="">
                        <h1 className="w-3/4 text-4xl md:text-5xl font-bold">Corporate Headquarters</h1>
                        <br />
                        <h3 className="w-3/4 md:w-1/2 text-xl md:text-3xl">Stracon Inc.</h3>
                        <p className="w-3/4 md:w-1/2 text-xl md:text-xl">1672 Kaiser Avenue</p>
                        <p className="w-3/4 md:w-1/2 text-xl md:text-xl">Irvine, CA 92614</p>
                        <br />
                        <p className="w-3/4 md:w-1/2 text-xl md:text-xl">Phone: (949) 851 2288</p>
                        <p className="w-3/4 md:w-1/2 text-xl md:text-xl">Fax: (949) 851 2299</p>
                    </section>
                    <section className="p-5 md:p-10 border-zinc-300 border rounded-md md:mx-20">
                        <form action="">
                            <h1 className="w-3/4 md:w-1/2 text-xl md:text-3xl font-bold">Email Stracon</h1>
                            <br />
                            <input className={`${styles.field} border border-zinc-300`} type="text" placeholder="Name" />
                            <input className={`${styles.field} border border-zinc-300`} type="text" placeholder="Email" />
                            <input className={`${styles.field} border border-zinc-300`} type="text" placeholder="Subject" />
                            <textarea className={`${styles.field} border border-zinc-300`} type="text" placeholder="Message"></textarea>
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