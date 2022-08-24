import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import material, { FormControlLabel } from '@mui/material'
import Slide from '@mui/material/Slide';
import React, {useEffect, useState} from 'react';

export default function Home() {

const [Index, setIndex] = useState(0);

useEffect(() => {
  const intervalID = setTimeout(() =>  {
      setIndex((Index) => prevIndex+1)
  }, 3000);

  return () => clearInterval(intervalID);
}, []);

const textArray = [
  "digital",
  "development",
  "graphics",
  "blog"
]




  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          This is <a href="https://nextjs.org">tyty<span> {textArray[Index]}</span></a>
        </h1>

        <p className={styles.description}>
          you are just getting started...
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>About &rarr;</h2>
            <p>Discover tyty digital and what it can do for you.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Blog &rarr;</h2>
            <p>Weekly updates into the world of tyty digital.</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Web Development &rarr;</h2>
            <p>Explore what tyty web-development can achieve.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Graphic Design &rarr;</h2>
            <p>
              Take centre-stage with beautiful intuative designs.
            </p>
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
