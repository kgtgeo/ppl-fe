import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>FishMark</title>
        <meta name="description" content="Starting Page" />
        <link rel="icon" href="/fish-market.png" />
      </Head>

      <main className={styles.main}>
        <Image
          src="/fish-market-logo.jpg" alt="FishMark Logo" width={72} height={72}
        />

        <h1 className={styles.title}>
          FishMark
        </h1>

        <p className={styles.description}>
          Temukan Ikan Hias Impianmu Di Sini!
        </p>

        <div className={styles.grid}>
          <a href="/register" className={styles.card}>
            <h2>Penjual &rarr;</h2>
            <p>Memilih <i>role</i> sebagai penjual.</p>
          </a>

          <a href="/register" className={styles.card}>
            <h2>Pembeli &rarr;</h2>
            <p>Memilih <i>role</i> sebagai pembeli.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
