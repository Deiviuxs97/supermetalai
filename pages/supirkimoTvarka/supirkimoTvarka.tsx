import styles from "../../styles/supirkimoTvarka.module.scss";
import Nav from "../nav/nav";
import Pasiulymas from "../pasiulymas/pasiulymas";
import Footer from "../footer/footer";

export default function SupirkimoTvarka() {
  return (
    <div>
      <section className={styles.containerTop}>
        <Nav />
        <div className={styles.iconContainer}>
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

      <Pasiulymas />

      <Footer />
    </div>
  );
}
