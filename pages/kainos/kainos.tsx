import styles from "../../styles/kainos.module.scss";
import Nav from "../nav/nav";
import Pasiulymas from "../pasiulymas/pasiulymas";
import Footer from "../footer/footer";

export default function Kainos() {
  return (
    <div>
      <section className={styles.containerTop}>
        <Nav />

        <div className={styles.iconContainer}>
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

      <Pasiulymas />

      <Footer />
    </div>
  );
}
