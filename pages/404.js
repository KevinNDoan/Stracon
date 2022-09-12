import Link from 'next/link'

import Header from '../components/header.js'
import Footer from '../components/footer.js'

export default function ErrorPage() {
    return (
        <>
            <Header pageName={'Error'} />

            <main className="my-36 mx-10">
                <section className="flex justify-center items-center">
                    <div className="text-center">
                        <div className="flex justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="10em" height="10em" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M7 7V1.414a1 1 0 0 1 2 0V2h5a1 1 0 0 1 .8.4l.975 1.3a.5.5 0 0 1 0 .6L14.8 5.6a1 1 0 0 1-.8.4H9v10H7v-5H2a1 1 0 0 1-.8-.4L.225 9.3a.5.5 0 0 1 0-.6L1.2 7.4A1 1 0 0 1 2 7h5zm1 3V8H2l-.75 1L2 10h6zm0-5h6l.75-1L14 3H8v2z" />
                            </svg>
                        </div>
                        <br />
                        <h1 className="text-4xl md:text-6xl font-bold md:font-semibold p-10 pl-14 pb-5">404 Error: Page not found</h1>
                        <br />
                        <p>The page you are trying to access either does not exists or is broken.</p>
                        <p>If you believed this page is broken, <Link href="/contact"><span className="text-blue-600 clickable">please contact us</span></Link>.</p>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    )
}