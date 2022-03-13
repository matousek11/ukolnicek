import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import TaskTracker from '../components/TaskTracker'

export default function Home() {
  return (
    <>
      <Head>
        <title>Úkolníček</title>
        <meta name="description" content="Zazmenava ukoly" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <TaskTracker/>
      </body>
    </>
  )
}