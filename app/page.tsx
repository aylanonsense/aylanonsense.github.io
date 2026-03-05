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
            <li className={styles["title-art"]}>
              <Image
                src="/Clone Drone in the Hyperdome title art.webp"
                width={376}
                height={500}
                alt="Clone Drone in the Hyperdome"
              />
            </li>
            <li className={styles["title-art"]}>
              <Image
                src="/Beast Breaker title art.webp"
                width={376}
                height={500}
                alt="Beast Breaker"
              />
            </li>
            <li className={styles["title-art"]}>
              <Image
                src="/Lost Your Marbles title art.webp"
                width={376}
                height={500}
                alt="Lost Your Marbles"
              />
            </li>
            <li className={styles.big}>
              <Image
                src="/Just One Boss gameplay.gif"
                className={styles.pixelated}
                width={128}
                height={128}
                alt="Just One Boss"
              />
            </li>
            <li className={styles.big}>
              <Image
                src="/arpongi gameplay.gif"
                className={styles.pixelated}
                width={127}
                height={127}
                alt="arpongi"
              />
            </li>
            <li className={styles.big}>
              <Image
                src="/8 Legs to Love gameplay.gif"
                className={styles.pixelated}
                width={128}
                height={128}
                alt="8 Legs to Love"
              />
            </li>
            <li className={styles.big}>
              <Image
                src="/staring gameplay.gif"
                className={styles.pixelated}
                width={190}
                height={190}
                alt="staring"
              />
            </li>
            <li className={styles.big}>
              <Image
                src="/Recommendation Dog gameplay.gif"
                className={styles.pixelated}
                width={280}
                height={280}
                alt="Recommendation Dog"
              />
            </li>
            <li className={styles.big}>
              <Image
                src="/Quickdraw Blackjack gameplay.gif"
                className={styles.pixelated}
                width={190}
                height={190}
                alt="Quickdraw Blackjack"
              />
            </li>
            <li className={styles.medium}>
              <Image
                src="/AGAB gameplay.gif"
                className={styles.pixelated}
                width={128}
                height={128}
                alt="AGAB"
              />
            </li>
            <li className={styles.medium}>
              <Image
                src="/Snowball Showdown gameplay.gif"
                className={styles.pixelated}
                width={127}
                height={127}
                alt="Snowball Showdown"
              />
            </li>
            <li className={styles.medium}>
              <Image
                src="/Juggle Panic gameplay.gif"
                className={styles.pixelated}
                width={126}
                height={126}
                alt="Juggle Panic"
              />
            </li>
            <li className={styles.medium}>
              <Image
                src="/Reel Steal gameplay.gif"
                className={styles.pixelated}
                width={240}
                height={240}
                alt="Reel Steal"
              />
            </li>
            <li className={styles.small}>
              <Image
                src="/Snowboarding prototype gameplay.gif"
                className={styles.pixelated}
                width={128}
                height={128}
                alt="Snowboarding prototype"
              />
            </li>
            <li className={styles.small}>
              <Image
                src="/Western prototype gameplay.gif"
                className={styles.pixelated}
                width={128}
                height={128}
                alt="Western prototype"
              />
            </li>
            <li className={styles.small}>
              <Image
                src="/Castle minigames gameplay.gif"
                className={styles.pixelated}
                width={192}
                height={192}
                alt="Castle minigames"
              />
            </li>
            <li className={styles.small}>
              <Image
                src="/Grapple prototype 2 gameplay.gif"
                className={styles.pixelated}
                width={75}
                height={75}
                alt="Grapple prototype #2"
              />
            </li>
            <li className={styles.small}>
              <Image
                src="/Tennis prototype gameplay.gif"
                className={styles.pixelated}
                width={30}
                height={30}
                alt="Tennis prototype"
              />
            </li>
            <li className={styles.small}>
              <Image
                src="/Exact change gameplay.gif"
                className={styles.pixelated}
                width={70}
                height={70}
                alt="Exact change"
              />
            </li>
            <li className={styles.small}>
              <Image
                src="/Plat fighter gameplay.gif"
                className={styles.pixelated}
                width={118}
                height={118}
                alt="Plat fighter"
              />
            </li>
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
          </ul>
        </section>
      </main>
    </div>
  );
}
