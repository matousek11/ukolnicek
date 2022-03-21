import Head from 'next/head'
import TaskTracker from '../components/TaskTracker'

export default function Home() {
  return (
    <>
      <Head>
        <title>Úkolníček</title>
        <meta name="description" content="Zazmenava ukoly" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <TaskTracker/>
    </>
  )
}