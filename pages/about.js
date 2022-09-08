import Header from '../components/header.js'
import Footer from '../components/footer.js'

export default function About() {
    return(
        <>
            <Header pageName={'About'} />

            <main>
                <div className="d-flex w-50 justify-center">
                    <h1 className="text-lg">Dedicated 12,000 sq. ft. facility in Irvine, CA housing automated SMT lines and complete product manufacturing</h1>
                </div>
            </main>

            <Footer />
        </>
    )
}