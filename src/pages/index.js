import Head from 'next/head';

import Header from '../components/Header';
import Intro from '../components/Intro';

import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <meta
          name="description"
          content="Empresa especializada em soluções tecnológicas de baixos curso e alta qualidade para o seu negócio."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <title>Monosoft</title>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>
      <header>
        <Header />
      </header>
      <main>
        <Intro />
      </main>
    </div>
  );
}
