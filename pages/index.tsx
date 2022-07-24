import Head from 'next/head'
import type { NextPage } from 'next'
import PublicLayout from '../components/layouts/PublicLayout'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Next.js cookie consent banner</title>
        <meta
          name="description"
          content="A Next.js cookie consent banner with TypeScript and Tailwind CSS."
        />
      </Head>

      <PublicLayout>
        <h1 className="text-3xl font-bold font-open">
          Next.js cookie consent banner
        </h1>
      </PublicLayout>
    </>
  )
}

export default Home
