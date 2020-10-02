import styles from "../../styles/drawer.module.scss";
import Link from "next/link";

export default function Drawer({ isOpen, onRequestClose }) {
  const _onHeaderClick = (event) => {
    event.stopPropagation();
  };
  if (!isOpen) return null;
  return (
    <div
      className={styles.overlay}
      onClick={() => {
        onRequestClose();
      }}
    >
      <nav className={styles.nav} onClick={_onHeaderClick}>
        <Link href="/">
          <p
            onClick={function () {
              onRequestClose();
            }}
          >
            PAGRINDINIS
          </p>
        </Link>
        <hr />
        <Link href="/apieMus/apieMus">
          <p
            onClick={function () {
              onRequestClose();
            }}
          >
            APIE MUS
          </p>
        </Link>
        <Link href="/paslaugos/paslaugos">
          <p
            onClick={function () {
              onRequestClose();
            }}
          >
            PASLAUGOS
          </p>
        </Link>
        <Link href="/klientams/klientams">
          <p
            onClick={function () {
              onRequestClose();
            }}
          >
            KLIENTAMS
          </p>
        </Link>
        <Link href="/supirkimoTvarka/supirkimoTvarka">
          <p
            onClick={function () {
              onRequestClose();
            }}
          >
            SUPIRKIMO TVARKA
          </p>
        </Link>
        <Link href="/kontaktai/kontaktai">
          <p
            onClick={() => {
              onRequestClose();
            }}
          >
            KONTAKTAI
          </p>
        </Link>
        <p
          onClick={() => {
            onRequestClose();
          }}
        >
          ATGAL
        </p>
      </nav>
    </div>
  );
}
