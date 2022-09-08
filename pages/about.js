import Header from '../components/header.js'
import Footer from '../components/footer.js'

export default function About() {
    return(
        <>
            <Header pageName={'About'} />

            <main>
                <h1 className="text-6xl font-semibold p-10 pl-14 pb-5">What we do at Stracon</h1>
                <img src="https://straconinc.com/images/slider/slide1.jpg" />
                <div className="flex justify-center mt-10">
                    <div className="w-1/2">
                        <h1 className="text-2xl">Our dedicated 12,000 sq. ft. facility in Irvine, California houses automated surface mount technology lines and complete product manufacturing.</h1>
                        <br />
                        <img src="https://straconinc.com/images/slider/slide2.jpg" />
                        <br />
                        <h1 className="text-2xl font-semibold">Printed Circuit Boards</h1>
                        <h1 className="text-2xl">Surface mount assembly</h1>
                        <h1 className="text-2xl">Through-hole assembly</h1>
                        <h1 className="text-2xl">Flex PCB assembly</h1>
                        <h1 className="text-2xl">Rigid-flex PCB assembly</h1>
                        <br />
                        <h1 className="text-2xl">Surface mount assembly</h1>
                    </div>
                </div>

                {/** Photo checklist
                 * Surface mount assembly
                 * Through-hole assembly
                 * Flex PCB assembly
                 * Rigid-flex PCB assembly
                 * Ultra fine pitch/BGA/X-ray
                 * Flexible high mix production
                 * Cable anhd wire harness assembly
                 */}
            </main>

            <Footer />
        </>
    )
}