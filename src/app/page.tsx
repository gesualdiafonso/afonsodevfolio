"use client";
import styles from "./styles/animated.module.css";
import { useEffect } from "react";


export default function Home() {
  const createSpans = () => {
    const section = document.getElementById("animatedSection");
    const totalSpans = 150;

    for (let i = 0; i < totalSpans; i++){
      const span = document.createElement("span");
      section?.appendChild(span);
    }
  };

  useEffect(() => {
    createSpans();
  }, []);
  
  return (
    <main className={styles.section} id="animatedSection">
      <div className={styles.modularGrid}>
        <div className={styles.content}>
          <h1>Afonso Arruda Gesualdi</h1>
          <p>Design, Brand & Software</p>
        </div>
      </div>
    </main>
  );
}
