import styles from "../../styles/klientams.module.scss";
import Link from "next/link";

export default function Klientams() {
  return (
    <div>
      <section className={styles.containerTop}>
        <nav>
          <div>
            <div>
              <p>8 605 23 568, info@supermetalai.lt</p>
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
        <div>
          <img src="/icon.png" alt="icon" className={styles.icon} />
          <p className={styles.bText}>KLIENTAMS</p>
        </div>
        <div className={styles.fIrJuridinis}>
          <div>
            <p>Tekstas</p>
            <p>Fizinis ir juridinis</p>
          </div>

          <div>
            <p>Pasiūlymo forma</p>
          </div>
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
                  <p>212 487 2547</p>
                </div>
                <div>
                  <img src="/email.png" alt="email"></img>
                  <p>info@gmail.com</p>
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
                  <p>212 487 2547</p>
                </div>
                <div>
                  <img src="/email.png" alt="email"></img>
                  <p>info@gmail.com</p>
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
