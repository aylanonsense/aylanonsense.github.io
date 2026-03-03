import Image from 'next/image';
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.content}>
      <header>
        <h1>ayla~nonsense</h1>
        <p>Game developer</p>
      </header>
      <main>
        <section className={styles.games}>
          <section className={styles["big-games"]}>
            <Image
              src="/Clone Drone in the Hyperdome cover art 4.jpg"
              width={375}
              height={500}
              alt="Picture of the author"
            />
            <Image
              src="/Beast Breaker cover art 2.jpg"
              width={375}
              height={500}
              alt="Picture of the author"
            />
            <Image
              src="/Lost Your Marbles cover art.jpg"
              width={375}
              height={500}
              alt="Picture of the author"
            />
          </section>
          <video width="320" height="240" preload="none" muted={true} autoPlay={true}>
            <source src="/Clone Drone in the Hyperdome gameplay.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <section>
            <h2>Small games</h2>
          </section>
          <section>
            <h2>Mini games</h2>
          </section>
        </section>
        <section>
          <p>Resume</p>
        </section>
      </main>
    </div>
  );
}
