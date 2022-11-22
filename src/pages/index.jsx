import { Header } from '@/components/Header'
import Head from 'next/head'
import { Inter } from '@next/font/google'
import { PageHeader } from '@/components/PageHeader'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export default function Home() {
  return (
    <>
      <Head>
        <title>Western Bridge DOO - Metals and equipment</title>
        <meta
          name="description"
          content="Western Bridge DOO specializes on staffing of manufactures and supply realization of metals."
        />
      </Head>
      <div className={`${inter.variable} font-sans`}>
        <Header />
        <PageHeader />
        <main></main>
      </div>
    </>
  )
}
