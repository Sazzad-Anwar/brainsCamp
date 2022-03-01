import Head from 'next/head'
import NavBar from '../Components/Nav/NavBar'

export default function Home() {
  return (
    <>
      <Head>
        <title>BrainsCamp | Home</title>
      </Head>
      <main>
        <NavBar />
      </main>
    </>
  )
}
