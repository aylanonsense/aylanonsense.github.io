import Link from 'next/link';
import ProjectGrid from '@/app/components/ProjectGrid'
import ProjectGridCell from '@/app/components/ProjectGridCell'
import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.page}>
      <header>
        <h1><Link href="/">ayla~nonsense</Link></h1>
        <p>Game developer</p>
      </header>
      <main>
        <section>
          <ProjectGrid>
            <ProjectGridCell
              shape="poster"
              src="/clone-drone-in-the-hyperdome-title-art.webp"
              alt="Clone Drone in the Hyperdome"
              href="/clone-drone-in-the-hyperdome"
              width={376}
              height={500} />
            <ProjectGridCell
              shape="poster"
              src="/beast-breaker-title-art.webp"
              alt="Beast Breaker"
              href="/beast-breaker"
              width={376}
              height={500} />
            <ProjectGridCell
              shape="poster"
              src="/lost-your-marbles-title-art.webp"
              alt="Lost Your Marbles"
              width={376}
              height={500} />
            <ProjectGridCell
              shape="big"
              src="/just-one-boss-clip.gif"
              alt="Just One Boss"
              href="/just-one-boss"
              width={128}
              height={128}
              pixelated={true} />
            <ProjectGridCell
              shape="big"
              src="/arpongi-clip.gif"
              alt="arpongi"
              width={127}
              height={127}
              pixelated={true} />
            <ProjectGridCell
              shape="big"
              src="/eight-legs-to-love-clip.gif"
              alt="8 Legs to Love"
              width={128}
              height={128}
              pixelated={true} />
            <ProjectGridCell
              shape="big"
              src="/staring-clip.gif"
              alt="staring"
              width={190}
              height={190}
              pixelated={true} />
            <ProjectGridCell
              shape="big"
              src="/recommendation-dog-clip.gif"
              alt="Recommendation Dog"
              width={280}
              height={280}
              pixelated={true} />
            <ProjectGridCell
              shape="big"
              src="/quickdraw-blackjack-clip.gif"
              alt="Quickdraw Blackjack"
              width={190}
              height={190}
              pixelated={true} />
            <ProjectGridCell
              shape="medium"
              src="/agab-clip.gif"
              alt="AGAB"
              width={128}
              height={128}
              pixelated={true} />
            <ProjectGridCell
              shape="medium"
              src="/snowball-showdown-clip.gif"
              alt="Snowball Showdown"
              width={127}
              height={127}
              pixelated={true} />
            <ProjectGridCell
              shape="medium"
              src="/juggle-panic-clip.gif"
              alt="Juggle Panic"
              width={126}
              height={126}
              pixelated={true} />
            <ProjectGridCell
              shape="medium"
              src="/reel-steal-clip.gif"
              alt="Reel Steal"
              width={240}
              height={240}
              pixelated={true} />
            <ProjectGridCell
              shape="small"
              src="/snowboarding-prototype-clip.gif"
              alt="Snowboarding prototype"
              width={128}
              height={128}
              pixelated={true} />
            <ProjectGridCell
              shape="small"
              src="/western-prototype-clip.gif"
              alt="Western prototype"
              width={128}
              height={128}
              pixelated={true} />
            <ProjectGridCell
              shape="small"
              src="/castle-minigames-clip.gif"
              alt="Castle minigames"
              width={192}
              height={192}
              pixelated={true} />
            <ProjectGridCell
              shape="small"
              src="grapple-prototype-2-clip.gif"
              alt="Grapple prototype #2"
              width={75}
              height={75}
              pixelated={true} />
            <ProjectGridCell
              shape="small"
              src="/tennis-prototype-clip.gif"
              alt="Tennis prototype"
              width={30}
              height={30}
              pixelated={true} />
            <ProjectGridCell
              shape="small"
              src="/exact-change-clip.gif"
              alt="Exact change"
              width={70}
              height={70}
              pixelated={true} />
            <ProjectGridCell
              shape="small"
              src="plat-fighter-prototype-clip.gif"
              alt="Plat fighter prototype"
              width={118}
              height={118}
              pixelated={true} />
            <ProjectGridCell
              shape="small"
              src="/beevoobaa-clip.gif"
              alt="beevoobaa"
              width={75}
              height={75}
              pixelated={true} />
            <ProjectGridCell
              shape="small"
              src="/efflorescence-clip.gif"
              alt="Efflorescence"
              width={150}
              height={150}
              pixelated={true} />
            <ProjectGridCell
              shape="small"
              src="boss-fight-prototype-clip.gif"
              alt="Boss fight prototype"
              width={46}
              height={46}
              pixelated={true} />
            <ProjectGridCell
              shape="small"
              src="/grapple-prototype-1-clip.gif"
              alt="Grapple prototype #1"
              width={105}
              height={105}
              pixelated={true} />
            <ProjectGridCell
              shape="small"
              src="/mindsweeper-clip.gif"
              alt="Mindsweeper"
              width={156}
              height={156}
              pixelated={true} />
            <ProjectGridCell
              shape="small"
              src="/minepick-platformer-prototype-clip.gif"
              alt="Minepick platformer prototype"
              width={50}
              height={50}
              pixelated={true} />
            <ProjectGridCell
              shape="small"
              src="/nebulaic-clip.gif"
              alt="Nebulaic"
              width={125}
              height={125}
              pixelated={true} />
            <ProjectGridCell
              shape="small"
              src="/wave-function-collapse-clip.gif"
              alt="Wave function collapse"
              width={75}
              height={75}
              pixelated={true} />
            <ProjectGridCell
              shape="small"
              src="/time-travel-prototype-clip.gif"
              alt="Time travel prototype"
              width={50}
              height={50}
              pixelated={true} />
            <ProjectGridCell
              shape="small"
              src="/racquet-panic-clip.gif"
              alt="Racquet Panic"
              width={72}
              height={72}
              pixelated={true} />
            <ProjectGridCell
              shape="small"
              src="/virtual-pet-prototype-clip.gif"
              alt="Virtual pet prototype"
              width={100}
              height={100}
              pixelated={true} />
            <ProjectGridCell
              shape="small"
              src="/train-prototype-clip.gif"
              alt="Train prototype"
              width={64}
              height={64}
              pixelated={true} />
            <ProjectGridCell
              shape="small"
              src="/voxel-landscape-generation-clip.gif"
              alt="Voxel landscape generation"
              width={150}
              height={150}
              pixelated={true} />
            <ProjectGridCell
              shape="small"
              src="/emoji-surgeon-thumbnail.png"
              alt="Emoji surgeon"
              width={120}
              height={120} />
          </ProjectGrid>
        </section>
      </main>
    </div>
  );
}
