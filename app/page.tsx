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
          <p>Games</p>
          <section className={styles["big-games"]}>
            <Image
              src="/beast-breaker.avif"
              width={800}
              height={500}
              alt="Picture of the author"
            />
            <Image
              src="/clone-drone-in-the-hyperdome.jpg"
              width={800}
              height={500}
              alt="Picture of the author"
            />
            <Image
              src="/lost-your-marbles.jpg"
              width={800}
              height={500}
              alt="Picture of the author"
            />
          </section>
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
