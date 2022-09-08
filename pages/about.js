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
                        <h1 className="text-2xl my-8">Our commitment and goal to quality and excellence is reflected in our products and services to our customers. With STRACON Inc., our customers have a manufacturing partner they can depend on to meet the needs of a challenging market. We are dedicated to meeting all of our commitments to our customers.</h1>
                        <h1 className="text-2xl my-8">Our dedicated 12,000 sq. ft. facility in Irvine, California houses automated surface mount technology lines and complete product manufacturing.</h1>
                        <h1 className="text-2xl my-8">Founded in 1986, STRACON Inc. is dedicated to establish successful long-term electronic contract manufacturing partnership with its customers. We have the knowledge, dedication, resources and know-how to provide our customers the highest quality surface mount and through-hole circuit card assemblies, giving them a competitive edge in today’s marketplace.</h1>
                        <br />
                        <img src="https://straconinc.com/images/slider/slide2.jpg" />
                        <br />
                        <h1 className="text-2xl font-semibold">We&apos;re known for</h1>
                        <h1 className="text-2xl">Surface mount assembly</h1>
                        <h1 className="text-2xl">Through-hole assembly</h1>
                        <h1 className="text-2xl">Flex PCB assembly</h1>
                        <h1 className="text-2xl">Rigid-flex PCB assembly</h1>
                        <h1 className="text-2xl">Ultra fine pitch/BGA/X-ray</h1>
                        <h1 className="text-2xl">Flexible high mix production</h1>
                        <h1 className="text-2xl">Cable and wire harness asssembly</h1>
                    </div>
                </div>

                {/** Photo checklist
                 * Surface mount assembly
                 * Through-hole assembly
                 * Flex PCB assembly
                 * Rigid-flex PCB assembly
                 * Ultra fine pitch/BGA/X-ray
                 * Flexible high mix production
                 * Cable and wire harness assembly
                 */}
            </main>

            <Footer />
        </>
    )
}