import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "@/styles/Home.module.css";

export default function Nav() {
  const router = useRouter();
  return (
    <>
      {" "}
      <nav className={styles.nav}>
        <div className={styles.buttonContainer}>
          {/* <button
      className={styles.navButton}
      onClick={() => router.push("/aboutme")}
    >
      About Me
    </button> */}
          <Link href="/about" className={styles.navButton}>
            About Me
          </Link>
          <Link href="/" className={styles.navButton}>
            Home
          </Link>
          <Link href="/contact" className={styles.navButton}>
            Contact Me
          </Link>
        </div>
      </nav>
      <section className={styles.candyStripe}>
        <ul>
          <li className={styles.stripe}></li>
          <li className={styles.stripe}></li>
          <li className={styles.stripe}></li>
          <li className={styles.stripe}></li>
          <li className={styles.stripe}></li>
          <li className={styles.stripe}></li>
          <li className={styles.stripe}></li>
          <li className={styles.stripe}></li>
          <li className={styles.stripe}></li>
          <li className={styles.stripe}></li>
        </ul>
      </section>
    </>
  );
}
