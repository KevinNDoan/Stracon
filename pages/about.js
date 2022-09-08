import Header from '../components/header.js'
import Footer from '../components/footer.js'

export default function About() {
    return(
        <>
            <Header pageName={'About'} />

            <main>
                <div className="flex justify-center mt-10">
                    <h1 className="text-xl w-1/2">Our dedicated 12,000 sq. ft. facility in Irvine, California houses automated surface mount technology lines and complete product manufacturing.</h1>
                </div>
            </main>

            <Footer />
        </>
    )
}