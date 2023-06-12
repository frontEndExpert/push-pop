import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'

import PopOrderedList from '../components/PopOrderedList'
import App from '../components/App'



export default function Index() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <App title="Ordered List" description="Ordered List with 2 variations">
        <main className={styles.main}>
          Home
        </main>
      </App>
    </>
  )
}
