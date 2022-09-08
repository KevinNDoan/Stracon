import Header from '../components/header.js'
import Footer from '../components/footer.js'

export default function About() {
    return(
        <>
            <Header pageName={'About'} />

            <main>
                <div className="flex justify-center">
                    <h1 className="text-lg w-1/2">Dedicated 12,000 sq. ft. facility in Irvine, CA housing automated SMT lines and complete product manufacturing</h1>
                </div>
            </main>

            <Footer />
        </>
    )
}