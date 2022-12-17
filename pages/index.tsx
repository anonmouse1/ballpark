import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ballpark</title>
        <meta name="description" content="ballpark app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Ballpark !</h1>
        <div>
          <Image
            src="/baseballonCard.png"
            alt="baseball"
            width={200}
            height={200}
          />
        </div>

        <p className={styles.description}>
          A simple app to track your baseball card collection
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>My Deck &rarr;</h2>
            <p>View and add cards to your deck </p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Public Decks &rarr;</h2>
            <p>Browse decks that others have shared</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
