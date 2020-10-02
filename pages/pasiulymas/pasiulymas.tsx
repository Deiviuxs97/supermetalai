import styles from "../../styles/pasiulymas.module.scss";

export default function Pasiulymas() {
  return (
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
        <p className={styles.apieMusTekstas}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam facilisis
          venenatis dictum. Fusce ultricies eu mauris ac eleifend. Donec ut
          aliquam mi. Nullam tellus nunc, consectetur dictum malesuada non,
          tincidunt et turpis. Cras et odio vehicula, sagittis tellus sit amet,
          sollicitudin tellus. Duis et accumsan mauris. Fusce eu libero nunc.
          Nam vitae mauris euismod, finibus velit vel, placerat ligula. Duis non
          libero a turpis efficitur luctus. Fusce rutrum blandit odio, quis
          hendrerit quam luctus id.
        </p>

        <p className={styles.pasiulymas}>Norite gauti pasiūlymą?</p>

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
              facilisis venenatis dictum. Fusce ultricies eu mauris ac eleifend.{" "}
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
              facilisis venenatis dictum. Fusce ultricies eu mauris ac eleifend.{" "}
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
  );
}
