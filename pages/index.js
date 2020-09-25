import Head from "next/head";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Supermetalai</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <section
        className={styles.containerTop}
        style={{
          backgroundImage: "url(" + "/1221.png" + ")",
        }}
      >
        <nav>
          <div>
            <div>
              <p>8 605 23 568, info@supermetalai.lt</p>
              <p>Darbo laikas: I-V 8-18 val., VI 9-15 val.</p>
            </div>
            <div>
              <img src="supermetalai.png" alt="super"></img>
              <p>APIE MUS</p>
              <p>PASLAUGOS</p>
              <p>KLIENTAMS</p>
              <p>SUPIRKIMO TVARKA</p>
              <p>KONTAKTAI</p>
            </div>
          </div>
        </nav>
        <div className={styles.googleMaps}>
          <div>
            <div className={styles.googleMapsFrame}>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1589.6035394343805!2d21.13626611624251!3d55.70569586186141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e4dbf6ee739ae7%3A0x9f3b49ac75ea3279!2zNTXCsDQyJzE3LjYiTiAyMcKwMDgnMTguNCJF!5e0!3m2!1slt!2slt!4v1601036080308!5m2!1slt!2slt"></iframe>
              <p>Aikštelė 1</p>
            </div>
            <p>Kalno g. 1, Klaipėda</p>
          </div>
          <div>
            <div className={styles.googleMapsFrame}>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1589.6035394343805!2d21.13626611624251!3d55.70569586186141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e4dbf6ee739ae7%3A0x9f3b49ac75ea3279!2zNTXCsDQyJzE3LjYiTiAyMcKwMDgnMTguNCJF!5e0!3m2!1slt!2slt!4v1601036080308!5m2!1slt!2slt"></iframe>
              <p>Aikštelė 2</p>
            </div>
            <p>Kalno g. 2, Klaipėda</p>
          </div>
        </div>
        <img
          className={styles.goldRight}
          src="goldRight.png"
          alt="gold line"
        ></img>
      </section>

      <section className={styles.containerPopuliariausi}>
        <img src="goldLeft.png" alt="gold left"></img>
        <img src="icon.png" alt="gold line"></img>

        <div className={styles.populiariausiTitle}>
          <p>POPULIARIAUSIŲ</p>
          <p>METALO RŪŠIŲ SUPIRKIMO KAINOS</p>
        </div>

        <div>
          <div>
            <p>SKK automobilių kėbulų skardos metalo laužas</p> <p>52 - 152</p>
            <p>EUR/tona</p>
          </div>
          <div>
            <p>SKK automobilių kėbulų skardos metalo laužas</p> <p>52 - 152</p>
            <p>EUR/tona</p>
          </div>
          <div>
            <p>SKK automobilių kėbulų skardos metalo laužas</p> <p>52 - 152</p>
            <p>EUR/tona</p>
          </div>
          <div>
            <p>SKK automobilių kėbulų skardos metalo laužas</p> <p>52 - 152</p>
            <p>EUR/tona</p>
          </div>
        </div>

        <div className={styles.populiariausias}>
          <div>
            <p>SKK automobilių kėbulų skardos metalo laužas</p> <p>52 - 152</p>
            <p>EUR/tona</p>
          </div>
          <div>
            <p>SKK automobilių kėbulų skardos metalo laužas</p> <p>52 - 152</p>
            <p>EUR/tona</p>
          </div>
          <div>
            <p>SKK automobilių kėbulų skardos metalo laužas</p> <p>52 - 152</p>
            <p>EUR/tona</p>
          </div>
          <div>
            <p>SKK automobilių kėbulų skardos metalo laužas</p> <p>52 - 152</p>
            <p>EUR/tona</p>
          </div>
        </div>
        <div>
          <div>
            <p>SKK automobilių kėbulų skardos metalo laužas</p> <p>52 - 152</p>
            <p>EUR/tona</p>
          </div>
          <div>
            <p>SKK automobilių kėbulų skardos metalo laužas</p> <p>52 - 152</p>
            <p>EUR/tona</p>
          </div>
          <div>
            <p>SKK automobilių kėbulų skardos metalo laužas</p> <p>52 - 152</p>
            <p>EUR/tona</p>
          </div>
          <div>
            <p>SKK automobilių kėbulų skardos metalo laužas</p> <p>52 - 152</p>
            <p>EUR/tona</p>
          </div>
        </div>
      </section>
    </div>
  );
}
