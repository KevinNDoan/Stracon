import Header from '../components/header.js'
import Footer from '../components/footer.js'

export default function Equipment() {
    return (
        <>
            <Header pageName={'Equipment'} />

            <main className="m-8 md:m-20">
                <div className="flex justify-center md:mb-20">
                    <h1 className="text-3xl md:text-5xl font-bold">The equipment you <span className="underline">need</span> to get what you <span className="underline">want</span>.</h1>
                </div>
                <br />
                <div className="grid grid-cols-1 md:grid-cols-2 md:space-x-4">
                    <section className="md:p-8">
                        <div className="flex justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="8em" height="8em" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M6 0a.5.5 0 0 1 .5.5V3h3V.5a.5.5 0 0 1 1 0V3h1a.5.5 0 0 1 .5.5v3A3.5 3.5 0 0 1 8.5 10c-.002.434-.01.845-.04 1.22-.041.514-.126 1.003-.317 1.424a2.083 2.083 0 0 1-.97 1.028C6.725 13.9 6.169 14 5.5 14c-.998 0-1.61.33-1.974.718A1.922 1.922 0 0 0 3 16H2c0-.616.232-1.367.797-1.968C3.374 13.42 4.261 13 5.5 13c.581 0 .962-.088 1.218-.219.241-.123.4-.3.514-.55.121-.266.193-.621.23-1.09.027-.34.035-.718.037-1.141A3.5 3.5 0 0 1 4 6.5v-3a.5.5 0 0 1 .5-.5h1V.5A.5.5 0 0 1 6 0zM5 4v2.5A2.5 2.5 0 0 0 7.5 9h1A2.5 2.5 0 0 0 11 6.5V4H5z" />
                            </svg>
                        </div>
                        <br />
                        <div className="flex justify-center"><h1 className="text-xl md:text-3xl font-bold">Cables and Harnesses</h1></div>
                        <br />
                        <hr />
                        <br />
                        <div className="md:mx-10">
                            <h4 className="text-md md:text-lg mb-6">Komax Kappa 315 Automatic wire cutter/stripper</h4>
                            <h4 className="text-md md:text-lg mb-6">Mecal Press for use with various applicators for terminal crimping Molex, TE, Amphenol, JST, Phoenix Contact terminals</h4>
                            <h4 className="text-md md:text-lg mb-6">Molex 2000 press for use with various applicators for terminal crimping from Molex, TE, Amphenol, JST, Phoenix Contact terminals</h4>
                            <h4 className="text-md md:text-lg mb-6">Checkline WTT-200 Wire Terminal Pull Tester</h4>
                            <h4 className="text-md md:text-lg mb-6">Molex/SPI IP5 Digital Micrometer</h4>
                            <h4 className="text-md md:text-lg mb-6">Dynalab NX Pro Wire Harness Tester</h4>
                            <h4 className="text-md md:text-lg mb-6">Panduit Quick Build Harness System</h4>
                            <h4 className="text-md md:text-lg mb-6">Various Hand Crimping Tools for Molex, TE, Amphenol, JST, Phoenix Contact terminals</h4>
                            <h4 className="text-md md:text-lg mb-6">Ferrules Hand Crimping Tools</h4>
                            <h4 className="text-md md:text-lg mb-6">Various Cutter/Striping Hand Tools</h4>
                            <h4 className="text-md md:text-lg mb-6">Pneumatic Crimping Tool for various terminals</h4>
                            <h4 className="text-md md:text-lg mb-6">FD64K Pneumatic Ferrule Crimping Tool</h4>
                        </div>
                    </section>
                    <section className="p-8">
                        <div className="flex justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="8em" height="8em" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M11.5 2a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5Zm2 0a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5Zm-10 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6Zm0 2a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6ZM5 3a1 1 0 0 0-1 1h-.5a.5.5 0 0 0 0 1H4v1h-.5a.5.5 0 0 0 0 1H4a1 1 0 0 0 1 1v.5a.5.5 0 0 0 1 0V8h1v.5a.5.5 0 0 0 1 0V8a1 1 0 0 0 1-1h.5a.5.5 0 0 0 0-1H9V5h.5a.5.5 0 0 0 0-1H9a1 1 0 0 0-1-1v-.5a.5.5 0 0 0-1 0V3H6v-.5a.5.5 0 0 0-1 0V3Zm0 1h3v3H5V4Zm6.5 7a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-2Z" />
                                <path d="M1 2a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-2H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 9H1V8H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6H1V5H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 2H1Zm1 11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v11Z" />
                            </svg>
                        </div>
                        <br />
                        <div className="flex justify-center"><h1 className="text-xl md:text-3xl font-bold">Electronic Assembly</h1></div>
                        <br />
                        <hr />
                        <br />
                        <div className="md:mx-10">
                            <h4 className="text-md md:text-lg mb-6">Mydata MY100s Pick-and-Place</h4>
                            <h4 className="text-md md:text-lg mb-6">Mydata MY100LXe Pick-and-Place</h4>
                            <h4 className="text-md md:text-lg mb-6">DEK 260 Automatic Solder Paste Printer</h4>
                            <h4 className="text-md md:text-lg mb-6">BTU 100A Convection Reflow Oven</h4>
                            <h4 className="text-md md:text-lg mb-6">BTU 125A Convection Reflow Oven</h4>
                            <h4 className="text-md md:text-lg mb-6">Pillarhouse Jade MK1 Selective Soldering</h4>
                            <h4 className="text-md md:text-lg mb-6">Westek Triton In-line Aqueous Cleaner</h4>
                            <h4 className="text-md md:text-lg mb-6">Thermotron Temperature Chamber</h4>
                            <h4 className="text-md md:text-lg mb-6">Smartsonic 2000 Ultrasonic Stencil Cleaner</h4>
                            <h4 className="text-md md:text-lg mb-6">Truview X-Ray</h4>
                            <h4 className="text-md md:text-lg mb-6">Aoi Superior Vision 8000</h4>
                            <h4 className="text-md md:text-lg mb-6">Aoi Mirtec MV-3L</h4>
                            <h4 className="text-md md:text-lg mb-6">DKN600 Oven</h4>
                            <h4 className="text-md md:text-lg mb-6">DKN612C Oven</h4>
                            <h4 className="text-md md:text-lg mb-6">Hakko Soldering Stations</h4>
                            <h4 className="text-md md:text-lg mb-6">Hakko Rework Stations</h4>
                        </div>
                    </section>
                </div>
                {
                    /** Equipment for Cables and Harnesses
                     * Komax Kappa 315 Automatic wire cutter/stripper
                     * Mecal Press for use with various applicators for terminal crimping Molex, TE, Amphenol, JST, Phoenix Contact terminals
                     * Molex 2000 press for use with various applicators for terminal crimping from Molex, TE, Amphenol, JST, Phoenix Contact terminals
                     * Checkline WTT-200 Wire Terminal Pull Tester
                     * Molex/SPI IP5 Digital Micrometer
                     * Dynalab NX Pro Wire Harness Tester
                     * Panduit Quick Build Harness System
                     * Various Hand Crimping Tools for Molex, TE, Amphenol, JST, Phoenix Contact terminals
                     * Ferrules Hand Crimping Tools
                     * Various Cutter/Striping Hand Tools
                     * Pneumatic Crimping Tool for various terminals
                     * FD64K Pneumatic Ferrule Crimping Tool
                     */
                }

                {
                    /** Equipment for Electronic Assembly
                     * MYDATA MY100s Pick-and-Place
                     * MYDATA MY100LXe Pick-and-Place
                     * DEK 260 Automatic Solder Paste Printer
                     * BTU 100A Convection Reflow Oven
                     * BTU 125A Convection Reflow Oven
                     * PILLARHOUSE JADE MK1 Selective Soldering
                     * WESTEK TRITON In-line Aqueous Cleaner
                     * THERMOTRON Temperature Chamber
                     * SMARTSONIC 2000 Ultrasonic Stencil Cleaner
                     * TRUVIEW X-Ray
                     * AOI SUPERIOR VISION 8000
                     * AOI MIRTEC MV-3L
                     * DKN600 Oven
                     * DKN612C Oven
                     * HAKKO Soldering Stations
                     * HAKKO Rework Stations
                    */
                }
            </main>

            <Footer />
        </>
    )
}