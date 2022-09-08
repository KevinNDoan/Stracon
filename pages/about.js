import Image from 'next/image'
import Header from '../components/header.js'
import Footer from '../components/footer.js'

export default function About() {
    return(
        <>
            <Header pageName={'About'} />

            <main>
                <div className="flex justify-center mt-10">
                    <div>
                        <h1 className="text-xl w-1/2">Our dedicated 12,000 sq. ft. facility in Irvine, California houses automated surface mount technology lines and complete product manufacturing.</h1>
                        <br />
                        <Image src="https://straconinc.com/images/slider/slide1.jpg" />
                        <h1 className="text-xl w-1/2">Surface mount assembly</h1>
                    </div>
                </div>

                {/** Photo checklist
                 * Surface mount assembly
                 * Through-hole assembly
                 * Flex PCB assembly
                 * Rigid-flex PCB assembly
                 * Ultra fie pitch/BGA/X-ray
                 * Flexible high mix production
                 * Cable anhd wire harness assembly
                 */}
            </main>

            <Footer />
        </>
    )
}