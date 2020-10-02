import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.scss";
import Nav from "./nav/nav";
import Pasiulymas from "./pasiulymas/pasiulymas";
import Footer from "./footer/footer";

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
        <Nav />

        <div className={styles.googleMaps}>
          <p className={styles.aiksteles}>Mūsų aikštelės:</p>
          <div className={styles.googleMapsFull}>
            <div className={styles.googleMapsFrame}>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1589.6035394343805!2d21.13626611624251!3d55.70569586186141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e4dbf6ee739ae7%3A0x9f3b49ac75ea3279!2zNTXCsDQyJzE3LjYiTiAyMcKwMDgnMTguNCJF!5e0!3m2!1slt!2slt!4v1601036080308!5m2!1slt!2slt"></iframe>
              <p>Aikštelė 1</p>
            </div>
            <p>Kalno g. 1, Klaipėda</p>
          </div>
          <div className={styles.googleMapsFullTwo}>
            <div className={styles.googleMapsFrame}>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1589.6035394343805!2d21.13626611624251!3d55.70569586186141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e4dbf6ee739ae7%3A0x9f3b49ac75ea3279!2zNTXCsDQyJzE3LjYiTiAyMcKwMDgnMTguNCJF!5e0!3m2!1slt!2slt!4v1601036080308!5m2!1slt!2slt"></iframe>
              <p>Aikštelė 2</p>
            </div>
            <p>Kalno g. 2, Klaipėda</p>
          </div>
        </div>

        <img
          className={styles.goldRight}
          src="/goldRight.png"
          alt="gold line"
        ></img>
      </section>

      <section className={styles.containerPopuliariausi}>
        <img
          src="/goldLeft.png"
          alt="gold left"
          className={styles.goldLeft}
        ></img>
        <img src="icon.png" alt="gold line"></img>

        <div className={styles.populiariausiTitle}>
          <p>POPULIARIAUSIŲ</p>
          <p>METALO RŪŠIŲ SUPIRKIMO KAINOS</p>
        </div>

        <div className={styles.pop}>
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

        <div className={styles.populiariausiasBack}>
          <div className={styles.populiariausias}>
            <div>
              <p>SKK automobilių kėbulų skardos metalo laužas</p>{" "}
              <p>52 - 152</p>
              <p>EUR/tona</p>
            </div>
            <div>
              <p>SKK automobilių kėbulų skardos metalo laužas</p>{" "}
              <p>52 - 152</p>
              <p>EUR/tona</p>
            </div>
            <div>
              <p>SKK automobilių kėbulų skardos metalo laužas</p>{" "}
              <p>52 - 152</p>
              <p>EUR/tona</p>
            </div>
            <div>
              <p>SKK automobilių kėbulų skardos metalo laužas</p>{" "}
              <p>52 - 152</p>
              <p>EUR/tona</p>
            </div>
          </div>
        </div>

        <div className={styles.popLast}>
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

        {/* Metalai */}
        <div className={styles.super}>
          <div>
            <Link href="/paslaugos/juodiejiMetalai">
              <img src="/juodieji.png" alt="juodieji"></img>
            </Link>
            <Link href="/paslaugos/juodiejiMetalai">
              <p>JUODIEJI METALAI</p>
            </Link>
          </div>
          <div>
            <Link href="/paslaugos/spalvotiejiMetalai">
              <img src="/spalvotieji.png" alt="spalvotieji"></img>
            </Link>
            <Link href="/paslaugos/spalvotiejiMetalai">
              <p>SPALVOTIEJI METALAI</p>
            </Link>
          </div>
          <div>
            <Link href="/paslaugos/tauriejiMetalai">
              <img src="/skrynia.png" alt="skrynia"></img>
            </Link>
            <Link href="/paslaugos/tauriejiMetalai">
              <p>TAURIEJI METALAI</p>
            </Link>
          </div>
        </div>

        <div className={styles.superTwo}>
          <div>
            <Link href="/paslaugos/automobiliuMetalai">
              <img src="/auto.png" alt="auto"></img>
            </Link>
            <Link href="/paslaugos/automobiliuMetalai">
              <p>AUTOMOBILIŲ METALAI</p>
            </Link>
          </div>
          <div>
            <Link href="/paslaugos/elektronineIranga">
              <img src="/elektronika.png" alt="elektronika"></img>
            </Link>
            <Link href="/paslaugos/elektronineIranga">
              <p>ELEKTRONINĖ ĮRANGA</p>
            </Link>
          </div>
          <div>
            <Link href="/paslaugos/kitiMetalai">
              <img src="/kita.png" alt="kita"></img>
            </Link>
            <Link href="/paslaugos/kitiMetalai">
              <p>KITI METALAI</p>
            </Link>
          </div>
        </div>
      </section>

      <Pasiulymas />
      <Footer />
    </div>
  );
}
