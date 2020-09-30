import styles from "../../styles/kainos.module.scss";
import Link from "next/link";

export default function Kainos() {
  return (
    <div>
      <section className={styles.containerTop}>
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
                <img src="/supermetalai.png" alt="super"></img>
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

        <div className={styles.Title}>
          {/* <img src="/icon.png" alt="icon" className={styles.icon} /> */}
          <p className={styles.bText}>KAINOS</p>
        </div>

        <div className={styles.super}>
          <div>
            <img src="/juodieji.png" alt="juodieji"></img>
            <p>JUODIEJI METALAI</p>
          </div>
          <div>
            <img src="/spalvotieji.png" alt="spalvotieji"></img>
            <p>SPALVOTIEJI METALAI</p>
          </div>
          <div>
            <img src="/skrynia.png" alt="skrynia"></img>
            <p>TAURIEJI METALAI</p>
          </div>
          <div>
            <img src="/auto.png" alt="auto"></img>
            <p>AUTOMOBILIŲ METALAI</p>
          </div>
          <div>
            <img src="/elektronika.png" alt="elektronika"></img>
            <p>ELEKTRONINĖ ĮRANGA</p>
          </div>
          <div>
            <img src="/kita.png" alt="kita"></img>
            <p>KITI METALAI</p>
          </div>
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

        <div className={styles.tekstas}>
          <p>Tekstas</p>
        </div>
      </section>

      <section className={styles.apieMus}>
        <img src="/icon.png" alt="icon" className={styles.superSign}></img>
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
                src="/phone.png"
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
                  <img src="/phonegrey.png" alt="phone"></img>
                  <a href="tel:+37060523568">212 487 2547</a>
                </div>
                <div>
                  <img src="/email.png" alt="email"></img>
                  <a href="mailto:info@supermetalai.lt">info@gmail.com</a>
                </div>
              </div>
            </div>

            <div>
              <img
                src="/phone.png"
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
                  <img src="/phonegrey.png" alt="phone"></img>
                  <a href="tel:+37060523568">212 487 2547</a>
                </div>
                <div>
                  <img src="/email.png" alt="email"></img>
                  <a href="mailto:info@supermetalai.lt">info@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
          <img
            src="/goldBottom.png"
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
