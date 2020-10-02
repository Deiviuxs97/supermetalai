import styles from "../../styles/paslaugos.module.scss";
import Link from "next/link";
import Nav from "../nav/nav";
import Pasiulymas from "../pasiulymas/pasiulymas";
import Footer from "../footer/footer";

export default function Paslaugos() {
  return (
    <div>
      <section className={styles.containerTop}>
        <Nav />
        <div className={styles.iconContainer}>
          {/* <img src="/icon.png" alt="icon" className={styles.icon} /> */}
          <p className={styles.bText}>PASLAUGOS</p>
        </div>

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

        <div className={styles.raktazodziai}>
          <p>ELEKTRONINĖ ĮRANGA</p>
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
        </div>
      </section>

      <Pasiulymas />

      <Footer />
    </div>
  );
}
