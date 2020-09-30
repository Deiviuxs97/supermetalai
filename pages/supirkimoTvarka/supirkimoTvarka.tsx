import styles from "../../styles/supirkimoTvarka.module.scss";
import Link from "next/link";

export default function SupirkimoTvarka() {
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
        <div>
          <img src="/icon.png" alt="icon" className={styles.icon} />
          <p className={styles.bText}>SUPIRKIMO</p>
          <p className={styles.sText}>TVARKA</p>
        </div>
        <div className={styles.Vienas_Keturi}>
          <img src="/arrow5.png" alt="Arrow" className={styles.arrow5}></img>
          <div>
            <p>1</p>
            <p>Skambutis telefonu ar žinutė</p>
            <img src="/arrow1.png" alt="Arrow" className={styles.arrow1}></img>
            <img src="/greenPhone.png" alt="green Phone" />
            <img src="/arrow2.png" alt="Arrow" className={styles.arrow2}></img>
          </div>
          <div>
            <p>2</p>
            <p>Aptarimas metalo kiekio ir kainos</p>
            <img src="/chat.png" alt="chat" />
            <img src="/arrow3.png" alt="Arrow" className={styles.arrow3}></img>
          </div>
          <div>
            <p>3</p>
            <p>Užsakymas transporto ir krovėjų (jei reikia)</p>
            <img src="/truck.png" alt="truck" />
          </div>
          <div>
            <p>4</p>
            <p>Atvežimas į aikštelę</p>
            <img src="/arrow4.png" alt="Arrow" className={styles.arrow4}></img>
            <img src="/place-holder.png" alt="place-holder" />
          </div>
        </div>
        <div className={styles.Penki_Astuoni}>
          <div>
            <p>5</p>
            <p>Rūšiavimas</p>
            <img src="/sort.png" alt="sort" />
            <img src="/arrow6.png" alt="Arrow" className={styles.arrow6}></img>
          </div>
          <div>
            <p>6</p>
            <p>Svėrimas</p>
            <img src="/weight-scale.png" alt="weight_scale" />
            <img src="/arrow7.png" alt="Arrow" className={styles.arrow7}></img>
          </div>
          <div>
            <p>7</p>
            <p>Dokumentų išrašymas</p>
            <img src="/contract.png" alt="contract" />
            <img src="/arrow8.png" alt="Arrow" className={styles.arrow8}></img>
          </div>
          <div>
            <p>8</p>
            <p>Atsiskaitymas grynais arba pavedimu</p>
            <img src="/card-machine.png" alt="card-machine" />
            <img src="/arrow9.png" alt="Arrow" className={styles.arrow9}></img>
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
