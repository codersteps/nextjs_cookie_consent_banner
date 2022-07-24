import Head from 'next/head'
import type { NextPage } from 'next'
import PublicLayout from '../components/layouts/PublicLayout'

const PrivacyPolicy: NextPage = () => {
  return (
    <>
      <Head>
        <title>Our Privacy Policy</title>
        <meta name="description" content="Website privacy policy page" />
      </Head>

      <PublicLayout>
        <h1 className="text-3xl font-bold font-open">
          Website privacy policy page content
        </h1>
      </PublicLayout>
    </>
  )
}

export default PrivacyPolicy
