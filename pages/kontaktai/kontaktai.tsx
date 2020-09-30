import styles from "../../styles/kontaktai.module.scss";
import Link from "next/link";

export default function Kontaktai() {
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
