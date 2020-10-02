import styles from "../../styles/kontaktai.module.scss";
import Nav from "../nav/nav";
import Pasiulymas from "../pasiulymas/pasiulymas";
import Footer from "../footer/footer";

export default function Kontaktai() {
  return (
    <div>
      <section className={styles.containerTop}>
        <Nav />
        <div className={styles.textB}>
          {/* <img src="/icon.png" alt="icon" className={styles.icon} /> */}
          <p className={styles.bText}>KONTAKTAI</p>
        </div>
        <div className={styles.kontaktai}>
          <div className={styles.rekvizitai}>
            <p>Įmonės rekvizitai:</p>
            <p>
              UAB "SUPERMETALAI.LT"
              <br /> į.k.: 302555555
              <br /> PVM: LT1111111111111 <br />
              Reg. adresas: Gatve pr. 17, Klaipėda, LT-85885 <br />
              Rejestro Nr.: 194848 <br />
              Įregistruota VĮ "Registrų centro" Klaipėdos filialas
            </p>
            <hr />
            <p>
              Bankas: AB bankas "SWEDBANK" Banko kodas 72000 Atsiskaitomoji
              sąskaita LT99999999999999
            </p>
            <hr />
            <p>
              Bankas: AB "SEB bankas" Banko kodas 70440 Atsiskaitomoji sąskaita
              LT999999999999999
            </p>
          </div>
          <div className={styles.line}></div>
          <div className={styles.googleMaps}>
            <div className={styles.googleMapsAll}>
              <div className={styles.googleMapsFrame}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1589.6035394343805!2d21.13626611624251!3d55.70569586186141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e4dbf6ee739ae7%3A0x9f3b49ac75ea3279!2zNTXCsDQyJzE3LjYiTiAyMcKwMDgnMTguNCJF!5e0!3m2!1slt!2slt!4v1601036080308!5m2!1slt!2slt"></iframe>
                <p>Aikštelė 1</p>
              </div>
              <p>Kalno g. 1, Klaipėda</p>
            </div>
            <div className={styles.googleMapsAllTwo}>
              <div className={styles.googleMapsFrame}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1589.6035394343805!2d21.13626611624251!3d55.70569586186141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e4dbf6ee739ae7%3A0x9f3b49ac75ea3279!2zNTXCsDQyJzE3LjYiTiAyMcKwMDgnMTguNCJF!5e0!3m2!1slt!2slt!4v1601036080308!5m2!1slt!2slt"></iframe>
                <p>Aikštelė 2</p>
              </div>
              <p>Kalno g. 2, Klaipėda</p>
            </div>
          </div>
        </div>
      </section>

      <Pasiulymas />

      <Footer />
    </div>
  );
}
