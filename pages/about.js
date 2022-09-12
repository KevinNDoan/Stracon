import Header from '../components/header.js'
import Footer from '../components/footer.js'

export default function About() {
    return (
        <>
            <Header pageName={'About'} />

            <main>
                <h1 className="text-4xl md:text-6xl font-bold md:font-semibold p-10 pl-14 pb-5">What we do at Stracon</h1>
                <img className="thumbnail" src="https://straconinc.com/images/slider/slide1.jpg" />
                <div className="flex justify-center mt-10">
                    <div className="w-3/4 lg:w-1/2 text-xl md:text-2xl">
                        <h1 className="my-8">Our commitment and goal to quality and excellence is reflected in our products and services to our customers. With Stracon Inc., our customers have a manufacturing partner they can depend on to meet the needs of a challenging market. We are dedicated to meeting all of our commitments to our customers.</h1>
                        <h1 className="my-8">Founded in 1986, Stracon Inc. is dedicated to establish successful long-term electronic contract manufacturing partnership with its customers. We have the knowledge, dedication, resources and know-how to provide our customers the highest quality surface mount and through-hole circuit card assemblies, giving them a competitive edge in today&apos;s marketplace.</h1>
                    </div>
                </div>
                <br />
                <section className="bg-black w-100 p-20">
                    <div className="flex justify-center">
                        <div className="w-3/4">
                            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold">State of the Art Facility</h1>
                            <br />
                            <h1 className="text-white md:text-2xl">Our dedicated 12,000 sq. ft. facility in Irvine, California houses automated surface mount technology lines and complete product manufacturing.</h1>
                        </div>
                    </div>
                </section>
                <br />
                {/* <div className="flex justify-center">
                    <div className="w-3/4 md:w-1/2 text-xl md:text-2xl">
                        <h1 className="font-semibold">What we&apos;re known for</h1>
                        <h1 className="">Surface mount assembly</h1>
                        <h1 className="">Through-hole assembly</h1>
                        <h1 className="">Flex PCB assembly</h1>
                        <h1 className="">Rigid-flex PCB assembly</h1>
                        <h1 className="">Ultra fine pitch/BGA/X-ray</h1>
                        <h1 className="">Flexible high mix production</h1>
                        <h1 className="">Cable and wire harness asssembly</h1>
                    </div>
                </div> */}

                <div className="w-full flex justify-center">
                    <div className="w-full md:w-3/4">
                        <section className="p-8">
                            <div className="flex justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="10em" height="10em" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                </svg>
                            </div>
                            <br />
                            <div className="flex justify-center"><h1 className="text-xl md:text-4xl font-bold">What we&apos;re known for.</h1></div>
                            <br />
                            <hr />
                            <br />
                            <div className="grid grid-cols-1 md:grid-cols-2 md:mx-10 md:space-x-4">
                                <div>
                                    <h4 className="text-md md:text-lg mb-4">Surface mount assembly</h4>
                                    <h4 className="text-md md:text-lg mb-4">Through-hole assembly</h4>
                                    <h4 className="text-md md:text-lg mb-4">Flex PCB assembly</h4>
                                    <h4 className="text-md md:text-lg mb-4">Rigid-flex PCB assembly</h4>
                                    <h4 className="text-md md:text-lg mb-4">Ultra fine pitch/BGA/X-ray</h4>
                                    <h4 className="text-md md:text-lg mb-4">Flexible high mix production</h4>
                                    <h4 className="text-md md:text-lg mb-4">Cable and wire harness asssembly</h4>
                                    <h4 className="text-md md:text-lg mb-4">Quick, 24-Hour Turn</h4>
                                    <h4 className="text-md md:text-lg mb-4">Upgrade/Repair/Rework</h4>
                                </div>
                                <div>
                                    <h4 className="text-md md:text-lg mb-4">Drop Shipping</h4>
                                    <h4 className="text-md md:text-lg mb-4">Offshore High Volume Manufacturing</h4>
                                    <h4 className="text-md md:text-lg mb-4">PCB Design and Layout</h4>
                                    <h4 className="text-md md:text-lg mb-4">Schematic Capture</h4>
                                    <h4 className="text-md md:text-lg mb-4">Prototypes</h4>
                                    <h4 className="text-md md:text-lg mb-4">Digital, Analog, RF Boards</h4>
                                    <h4 className="text-md md:text-lg mb-4">01005 Capability</h4>
                                    <h4 className="text-md md:text-lg mb-4">Lead and Lead-Free/RoHS Compliance</h4>
                                </div>
                            </div>
                        </section>
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