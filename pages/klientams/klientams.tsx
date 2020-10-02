import styles from "../../styles/klientams.module.scss";
import Nav from "../nav/nav";
import Pasiulymas from "../pasiulymas/pasiulymas";
import Footer from "../footer/footer";

export default function Klientams() {
  return (
    <div>
      <section className={styles.containerTop}>
        <Nav />
        <div className={styles.iconContainer}>
          {/* <img src="/icon.png" alt="icon" className={styles.icon} /> */}
          <p className={styles.bText}>KLIENTAMS</p>
        </div>
        <div className={styles.fIrJuridinis}>
          <p>Tekstas</p>
          <p>Fizinis ir juridinis</p>
        </div>
      </section>

      <Pasiulymas />

      <Footer />
    </div>
  );
}
