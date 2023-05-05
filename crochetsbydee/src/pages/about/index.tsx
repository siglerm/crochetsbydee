import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Baloo_Bhaijaan_2 } from "next/font/google";
import styles from "../../styles/about.module.css";

const inter = Baloo_Bhaijaan_2({ subsets: ["latin"] });

export default function about() {
  return (
    <>
      <section className={styles.main}>
        <div className={styles.aboutCard}>
          <h1 className={styles.aboutTitle}>
            Welcome to Crochetes by Me, Dee!
          </h1>
          <Image
            src="/assets/cacti.png"
            alt="Photo of Author"
            width={420}
            height={400}
          />
          <div className={styles.aboutContainer}>
            <div className={styles.aboutText}>
              I&apos;m Dee from crochetsbydee and I started crochetting because
              I wanted to make cute and soft creations! Little did I know it was
              going to be something so much more! You can follow me on Instagram
              @crochettesbydee if you want to see my work!
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
