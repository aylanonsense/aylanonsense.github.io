import Image from 'next/image';
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <header>
        <h1>ayla~nonsense</h1>
      </header>
      <main>
        <section>
          <ul className={styles.grid}>
            <li className={styles.cover}>
              <Image
                src="/Clone Drone in the Hyperdome cover art 4.jpg"
                width={300}
                height={300}
                alt="x"
              />
            </li>
            <li className={styles.cover}>
              <Image
                src="/Beast Breaker cover art 2.jpg"
                width={375}
                height={500}
                alt="x"
              />
            </li>
            <li className={styles.cover}>
              <Image
                src="/Lost Your Marbles cover art.jpg"
                width={375}
                height={500}
                alt="x"
              />
            </li>
            <li className={styles.big}>
              <Image
                src="/Just One Boss gameplay.gif"
                className={styles.pixelated}
                width={375}
                height={375}
                alt="x"
              />
            </li>
            <li className={styles.big}>
              <Image
                src="/8 Legs to Love gameplay.gif"
                className={styles.pixelated}
                width={375}
                height={375}
                alt="x"
              />
            </li>
            <li className={styles.big}>
              <Image
                src="/arpongi gameplay.gif"
                className={styles.pixelated}
                width={375}
                height={375}
                alt="x"
              />
            </li>
            <li className={styles.big}></li>
            <li className={styles.big}></li>
            <li className={styles.big}></li>
            <li className={styles.medium}></li>
            <li className={styles.medium}></li>
            <li className={styles.medium}></li>
            <li className={styles.medium}></li>
            <li className={styles.medium}></li>
            <li className={styles.medium}></li>
            <li className={styles.medium}></li>
            <li className={styles.medium}></li>
            <li className={styles.medium}></li>
            <li className={styles.medium}></li>
            <li className={styles.medium}></li>
            <li className={styles.medium}></li>
            <li className={styles.small}></li>
            <li className={styles.small}></li>
            <li className={styles.small}></li>
            <li className={styles.small}></li>
            <li className={styles.small}></li>
            <li className={styles.small}></li>
            <li className={styles.small}></li>
            <li className={styles.small}></li>
            <li className={styles.small}></li>
            <li className={styles.small}></li>
            <li className={styles.small}></li>
            <li className={styles.small}></li>
            <li className={styles.tiny}></li>
            <li className={styles.tiny}></li>
            <li className={styles.tiny}></li>
            <li className={styles.tiny}></li>
            <li className={styles.tiny}></li>
            <li className={styles.tiny}></li>
            <li className={styles.tiny}></li>
            <li className={styles.tiny}></li>
            <li className={styles.tiny}></li>
            <li className={styles.tiny}></li>
            <li className={styles.tiny}></li>
            <li className={styles.tiny}></li>
            <li className={styles.tiny}></li>
            <li className={styles.tiny}></li>
            <li className={styles.tiny}></li>
            <li className={styles.tiny}></li>
            <li className={styles.tiny}></li>
            <li className={styles.tiny}></li>
            <li className={styles.tiny}></li>
            <li className={styles.tiny}></li>
            <li className={styles.tiny}></li>
            <li className={styles.tiny}></li>
            <li className={styles.tiny}></li>
            <li className={styles.tiny}></li>
          </ul>
        </section>
      </main>
    </div>
  );
}
