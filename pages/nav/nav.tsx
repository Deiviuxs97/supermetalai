import styles from "../../styles/nav.module.scss";
import Link from "next/link";
import Drawer from "../drawer/drawer";
import { useEffect, useState } from "react";

export default function Nav() {
  //---------------------------------------------- Logo

  const [windowSize, setWindowSize] = useState({});

  useEffect(() => {
    window.addEventListener("resize", handleSize);
    return () => window.removeEventListener("scroll", handleSize);
  });

  const handleSize = () => {
    setWindowSize(window.innerWidth);
  };

  if (windowSize <= 1030) {
    var logo = "/favicon.png";
  } else {
    var logo = "/supermetalai.png";
  }
  //---------------------------------------------- Burger

  const [burgerState, setBurger] = useState(false);

  const burger = () => {
    setBurger(true);
  };

  //---------------------------------------------- Return

  return (
    <nav className={styles.nav}>
      <Drawer isOpen={burgerState} onRequestClose={() => setBurger(false)} />
      <div className={styles.navVidus}>
        <div className={styles.logo}>
          <Link href="/">
            <img src={logo} alt="super"></img>
          </Link>
        </div>
        <div className={styles.navVirsus}>
          <p>
            <a href="tel:+37060523568">8 605 23 568</a>,
            <a href="mailto:info@supermetalai.lt">info@supermetalai.lt</a>
          </p>
          <p>Darbo laikas: I-V 8-18 val., VI 9-15 val.</p>
        </div>

        <div className={styles.navApacia}>
          <Link href="/">
            <img src={logo} alt="super"></img>
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

        <div className={styles.burgerToggle} onClick={burger}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </nav>
  );
}
