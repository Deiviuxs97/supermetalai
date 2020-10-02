import styles from "../../styles/footer.module.scss";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className={styles.footerGreen}>
        <div>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            facilisis venenatis dictum. Fusce ultricies eu mauris ac eleifend.
            Donec ut aliquam mi. Nullam tellus nunc, consectetur dictum
            malesuada non, tincidunt et turpis. Cras et odio vehicula, sagittis
            tellus sit amet, sollicitudin tellus. Duis et accumsan mauris. Fusce
            eu libero nunc. Nam vitae mauris euismod, finibus velit vel,
            placerat ligula. Duis non libero a turpis efficitur luctus. Fusce
            rutrum blandit odio, quis hendrerit quam luctus id.
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
  );
}
