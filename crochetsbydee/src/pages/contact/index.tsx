import { Baloo_Bhaijaan_2 } from "next/font/google";
import { useState } from "react";
import styles from "../../styles/contact.module.css";

const inter = Baloo_Bhaijaan_2({ subsets: ["latin"] });

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit() {
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Subject:", subject);
    console.log("Message:", message);
  }
  return (
    <div className={styles.main}>
      <div className={styles.formContainer}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label htmlFor="name" className={styles.formLabel}>
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
            className={styles.formInput}
          />
          <label htmlFor="subject" className={styles.formLabel}>
            Subject:
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={subject}
            onChange={(event) => {
              setSubject(event.target.value);
            }}
            className={styles.formInput}
          />
          <label htmlFor="email" className={styles.formLabel}>
            Email:
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            className={styles.formInput}
          />
          <label htmlFor="message" className={styles.formLabel}>
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            maxLength={500}
            value={message}
            onChange={(event) => {
              setMessage(event.target.value);
            }}
            className={styles.formTextArea}
          />
          <p className={styles.formCharCount}>
            Characters Remaining: {500 - message.length}
          </p>
          <button type="submit" className={styles.formButton}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
