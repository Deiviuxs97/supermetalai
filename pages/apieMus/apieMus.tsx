import styles from "../../styles/apieMus.module.scss";
import Nav from "../nav/nav";
import Pasiulymas from "../pasiulymas/pasiulymas";
import Footer from "../footer/footer";
import React from "react";

export default function SupirkimoTvarka() {
  return (
    <div>
      <section className={styles.containerTop}>
        <Nav />

        <div className={styles.iconContainer}>
          {/* <img src="/icon.png" alt="icon" className={styles.icon} /> */}
          <p className={styles.bText}>APIE</p>
          <p className={styles.sText}>MUS</p>
        </div>

        <div className={styles.sertifikatai}>
          <div>
            <p>Tekstas</p>
            <p>(Sertifikatai)</p>
          </div>
          <div>
            <p>Sertifikatai:</p>
            <img src="/icon.png" alt="icon"></img>
          </div>
        </div>
      </section>

      <Pasiulymas />
      <Footer />
    </div>
  );
}
