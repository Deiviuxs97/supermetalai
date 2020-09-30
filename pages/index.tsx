import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.scss";

export default function Home() {
  const [windowSize, setWindowSize] = useState({});

  useEffect(() => {
    window.addEventListener("resize", handleSize);
    return () => window.removeEventListener("scroll", handleSize);
  });

  const handleSize = () => {
    setWindowSize(window.innerWidth);
  };

  if (windowSize <= 1030) {
    var logo = "/favicon.png";
  } else {
    var logo = "/supermetalai.png";
  }

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
              <p>
                <a href="tel:+37060523568">8 605 23 568</a>,
                <a href="mailto:info@supermetalai.lt">info@supermetalai.lt</a>
              </p>
              <p>Darbo laikas: I-V 8-18 val., VI 9-15 val.</p>
            </div>
            <div>
              <Link href="/">
                <img src={logo} alt="super"></img>
              </Link>
              <Link href="/apieMus/apieMus">
                <p>APIE MUS</p>
              </Link>
              <Link href="/paslaugos/paslaugos">
                <p>PASLAUGOS</p>
              </Link>
              <Link href="/klientams/klientams">
                <p>KLIENTAMS</p>
              </Link>
              <Link href="/supirkimoTvarka/supirkimoTvarka">
                <p>SUPIRKIMO TVARKA</p>
              </Link>
              <Link href="/kontaktai/kontaktai">
                <p>KONTAKTAI</p>
              </Link>
            </div>
          </div>
        </nav>
        <div className={styles.googleMaps}>
          <div className={styles.googleMapsFull}>
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
          src="/goldRight.png"
          alt="gold line"
        ></img>
      </section>

      <section className={styles.containerPopuliariausi}>
        <img src="/goldLeft.png" alt="gold left"></img>
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

      <section className={styles.apieMus}>
        <img src="icon.png" alt="icon" className={styles.superSign}></img>
        <div
          className={styles.bg}
          style={{
            backgroundImage: "url(" + "/background.png" + ")",
          }}
        >
          <div className={styles.helper}>
            <p>APIE</p>
            <p>MUS</p>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            facilisis venenatis dictum. Fusce ultricies eu mauris ac eleifend.
            Donec ut aliquam mi. Nullam tellus nunc, consectetur dictum
            malesuada non, tincidunt et turpis. Cras et odio vehicula, sagittis
            tellus sit amet, sollicitudin tellus. Duis et accumsan mauris. Fusce
            eu libero nunc. Nam vitae mauris euismod, finibus velit vel,
            placerat ligula. Duis non libero a turpis efficitur luctus. Fusce
            rutrum blandit odio, quis hendrerit quam luctus id.
          </p>

          <p>Norite gauti pasiūlymą?</p>

          <div className={styles.pasiulymai}>
            <div>
              <img
                src="phone.png"
                alt="telephone"
                className={styles.phone}
              ></img>
              <p className={styles.tit}>Lorem ipsum</p>
              <p className={styles.pas}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                facilisis venenatis dictum. Fusce ultricies eu mauris ac
                eleifend.{" "}
              </p>
              <div>
                <div>
                  <img src="phonegrey.png" alt="phone"></img>
                  <a href="tel:+37060523568">212 487 2547</a>
                </div>
                <div>
                  <img src="email.png" alt="email"></img>
                  <a href="mailto:info@supermetalai.lt">info@gmail.com</a>
                </div>
              </div>
            </div>

            <div>
              <img
                src="phone.png"
                alt="telephone"
                className={styles.phone}
              ></img>
              <p className={styles.tit}>Lorem ipsum</p>
              <p className={styles.pas}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                facilisis venenatis dictum. Fusce ultricies eu mauris ac
                eleifend.{" "}
              </p>
              <div>
                <div>
                  <img src="phonegrey.png" alt="phone"></img>
                  <a href="tel:+37060523568">212 487 2547</a>
                </div>
                <div>
                  <img src="email.png" alt="email"></img>
                  <a href="mailto:info@supermetalai.lt">info@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
          <img
            src="goldBottom.png"
            alt="goldBottom"
            className={styles.image}
          ></img>
        </div>
      </section>

      <footer>
        <div className={styles.footerGreen}>
          <div>
            <p className={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              facilisis venenatis dictum. Fusce ultricies eu mauris ac eleifend.
              Donec ut aliquam mi. Nullam tellus nunc, consectetur dictum
              malesuada non, tincidunt et turpis. Cras et odio vehicula,
              sagittis tellus sit amet, sollicitudin tellus. Duis et accumsan
              mauris. Fusce eu libero nunc. Nam vitae mauris euismod, finibus
              velit vel, placerat ligula. Duis non libero a turpis efficitur
              luctus. Fusce rutrum blandit odio, quis hendrerit quam luctus id.
            </p>
            <div>
              <p>Informacija</p>
              <Link href="/">
                <p>Titulinis</p>
              </Link>
              <Link href="/apieMus/apieMus">
                <p>Apie mus</p>
              </Link>
              <Link href="/paslaugos/paslaugos">
                <p>Paslaugos</p>
              </Link>
              <Link href="/kainos/kainos">
                <p>Kainoraščiai</p>
              </Link>
              <Link href="/kontaktai/kontaktai">
                <p>Kontaktai</p>
              </Link>
              <p>Slapukai</p>
            </div>
            <div>
              <p>Paslaugos</p>
              <p>Juodieji metalai</p>
              <p>Spalvoti metalai</p>
              <p>Automobilių elektroninės įrangos</p>
            </div>
          </div>
        </div>
        <div className={styles.footerBlack}>
          <p>Visos teisės saugomos</p>
          <hr />
        </div>
      </footer>
    </div>
  );
}
