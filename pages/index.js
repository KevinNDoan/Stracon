import Link from 'next/link'
import Image from 'next/image'

import Header from '../components/header.js'
import Footer from '../components/footer.js'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Header pageName="Home" />
      <div className={styles.container}>
        <main>
          <img className="thumbnail" src="https://straconinc.com/images/slider/slide3.jpg" alt="Main Image" />
          <section className={`${styles.top} py-10 md:py-20`}>
            <h1 className="w-3/4 lg:w-1/2 text-4xl md:text-6xl font-bold">The manufacturing partner you&apos;ve been waiting for...</h1>
            <br />
            <h3 className="w-3/4 lg:w-1/2 text-2xl md:text-3xl font-base">Your mission is ours. We are dedicated to serving all of our commitments to you.</h3>
            <br />
            <img className="thumbnail w-3/4 lg:w-1/2" src="https://straconinc.com/images/slider/slide1.jpg" />
          </section>
          <br />
          <section className="bg-black w-100 p-20">
            <div className="flex justify-center">
              <div>
                <h1 className="text-white text-4xl md:text-6xl font-bold">ISO 9001:2015 and</h1>
                <h1 className="text-white text-4xl md:text-6xl font-bold">ISO 13485:2016 Certified</h1>
                <br />
                <h1 className="text-white md:text-2xl">...and much more. We have the know-how you need to get what you want done.</h1>
              </div>
            </div>
          </section>
          <br />
          <section className="p-5 md:p-20">
            <h1 className="text-4xl md:text-6xl font-bold">Get to know Stracon</h1>
            <br />
            <div className="w-full flex justify-center">
              <div className="w-full grid grid-cols-1 md:grid-cols-3">
                <Link href="/about">
                  <div className={`${styles.card} clickable`}>
                    <h2 className="text-3xl font-bold">About &rarr;</h2>
                    <br />
                    <p>Discover how Stracon can give you an advantage in today&apos;s competitive market.</p>
                  </div>
                </Link>

                <Link href="/contact">
                  <div className={`${styles.card} clickable`}>
                    <h2 className="text-3xl font-bold">Contact us &rarr;</h2>
                    <br />
                    <p>Reach out to us by email, phone, or fax.</p>
                  </div>
                </Link>

                <Link href="/industries">
                  <div className={`${styles.card} clickable`}>
                    <h2 className="text-3xl font-bold">Industries &rarr;</h2>
                    <br />
                    <p>Find out the many industries Stracon serves everyday.</p>
                  </div>
                </Link>
              </div>
            </div>
          </section>
          <br />
        </main>
      </div>
      <Footer />
    </>
  )
}
