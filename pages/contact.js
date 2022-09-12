import React, { Component } from 'react'

import styles from '../styles/Contact.module.css'
import Header from '../components/header.js'
import Footer from '../components/footer.js'

export default class Contact extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            subject: '',
            message: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleInput = this.handleInput.bind(this)
    }

    handleSubmit() {
        if (this.state.email.includes('@') && this.state.email.includes('.')) {

        }
    }

    handleInput(e) {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    render() {
        return (
            <>
                <Header pageName={'Contact'} />

                <main className="grid grid-cols-1 md:grid-cols-2 m-10 md:m-20">
                    <section className="m-10">
                        <h1 className="text-3xl md:text-4xl font-bold">Corporate Headquarters</h1>
                        <br />
                        <h3 className="w-3/4 md:w-1/2 text-xl md:text-3xl">Stracon Inc.</h3>
                        <p className="w-3/4 md:w-1/2 text-xl md:text-xl">1672 Kaiser Avenue</p>
                        <p className="w-3/4 md:w-1/2 text-xl md:text-xl">Irvine, CA 92614</p>
                        <br />
                        <p className="w-3/4 md:w-1/2 text-xl md:text-xl">Phone: (949) 851 2288</p>
                        <p className="w-3/4 md:w-1/2 text-xl md:text-xl">Fax: (949) 851 2299</p>
                    </section>
                    <section className="p-5 md:p-10 border-zinc-300 border rounded-md">
                        <h1 className="w-3/4 md:w-1/2 text-xl md:text-3xl font-bold">Email Stracon</h1>
                        <br />
                        <input id="name" onChange={this.handleInput} value={this.state.name} className={`${styles.field} border border-zinc-300`} type="text" placeholder="Name" />
                        <input id="email" onChange={this.handleInput} value={this.state.email} className={`${styles.field} border border-zinc-300`} type="text" placeholder="Email" />
                        <input id="subject" onChange={this.handleInput} value={this.state.subject} className={`${styles.field} border border-zinc-300`} type="text" placeholder="Subject" />
                        <textarea id="message" onChange={this.handleInput} value={this.state.message} className={`${styles.field} border border-zinc-300`} type="text" placeholder="Message"></textarea>
                        <br />
                        <div className="flex justify-end mt-10">
                            <button onClick={this.handleSubmit} className="bg-black text-white font-bold p-4">Send Email</button>
                        </div>
                    </section>
                </main>

                <Footer />
            </>
        )
    }
}