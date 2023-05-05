import Image from "next/image";
import styles from "@/styles/Home.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Image src="/assets/logo.png" alt="" width={400} height={150} />
    </header>
  );
}
