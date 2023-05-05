import Image from "next/image";
import styles from "@/styles/Home.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.footerText}>
        All photos are copyright of Crochetes by Dee unless otherwise noted.
        Please do not repost or claim my content as your own.
      </p>
    </footer>
  );
}
