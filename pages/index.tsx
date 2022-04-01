import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Usystem</title>
        <meta name="description" content="First Page Usystem" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Em breve <a href="https://usystem.com.br">USystem.</a>
        </h1>

        <p className={styles.description}>
          Desenvolvimento ágil de softwares
        </p>

      </main>

      <footer className={styles.footer}>
          Desenvolvido por USystem

      </footer>
    </div>
  )
}

export default Home
