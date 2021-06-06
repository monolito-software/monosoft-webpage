import Head from 'next/head';

import Header from '../components/Header';

import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <meta
          name="description"
          content="Empresa especializada em soluções tecnológicas de baixos curso e alta qualidade para o seu negócio."
        />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <title>Monosoft</title>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>

      <Header />

      <main className={styles.main}>

      </main>
    </div>
  );
}
