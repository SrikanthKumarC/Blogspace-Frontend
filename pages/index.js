import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Nav from '../components/Nav'
import LeftSidebar from '../components/LeftSidebar'
import Main from '../components/Main'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blog Space</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />
      <div className="mt-2 sm:grid grid-cols-6 gap-x-1 gap-y-3 grid-flow-row-dense">
        <div className=" min-h-[50px] col-span-1"><LeftSidebar /></div>
        <div className="col-span-4"><Main /></div>
        <div className="col-span-1"></div>
      </div>
      <Footer />
    </div>
  )
}
