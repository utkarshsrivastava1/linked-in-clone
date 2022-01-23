import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>LinkedIn</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Image
          width="267.504"
          height="65.326"
          src="/logo-with-text.svg"
          alt="linkedin logo"
        />
        <h1>Go ahead and complete the project 🍻</h1>
      </main>
    </div>
  );
}
