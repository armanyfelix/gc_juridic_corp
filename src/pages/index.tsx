import Head from 'next/head'
import Services from '@/components/Services'
import About from '@/components/About'
import OurAttorneys from '@/components/OurAttorneys'

export default function Home() {
  return (
    <>
      <Head>
        <title>GC - Corporativo Juridico</title>
        <meta name="description" content="GC - Corporativo Juridico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Services />
      <About />
      <OurAttorneys />
    </>
  )
}
