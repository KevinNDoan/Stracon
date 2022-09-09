import Link from 'next/link'

import Header from '../components/header.js'
import Footer from '../components/footer.js'

export default function ErrorPage() {
    return (
        <>
            <Header pageName={'Error'} />

            <main className="my-36">
                <section className="flex justify-center items-center">
                    <div className="text-center">
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