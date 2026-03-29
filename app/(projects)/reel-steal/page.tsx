import ProjectContent from "@/app/components/ProjectContent"
import ProjectHeader from "@/app/components/ProjectHeader"
import ProjectImage from "@/app/components/ProjectImage"

export default function Page() {
  return (
    <>
      <ProjectHeader
        title="Reel Steal"
        releaseDate="January 15, 2023"
        links={[
          "https://play.date/games/reel-steal/",
        ]}>
        <ProjectImage
          src="/reel-steal-title-art.webp"
          alt={"A villainous figure with a fishing hook stands alongside the text \"Reel Steal\"."}
          width={1600}
          height={960}
          pixelated={true} />
      </ProjectHeader>
      <ProjectContent>
        <p>Play as a pair of thieves who perform heists using comically large fishing hooks and an excessive number of fishing puns.</p>
        <ProjectImage
          src="/reel-steal-screenshot-1.webp"
          alt={"A shawowy figure named \"Angler\" say \"Welcome to the Crook, Line and Sinker, your friendly bait shop and home base here at the Kill-de-Sac.\""}
          width={400}
          height={240}
          pixelated={true} />
        <ProjectImage
          src="/reel-steal-screenshot-2.webp"
          alt={"A map of various expensive-looky locations in \"The Kill-De-Sac\"."}
          width={400}
          height={240}
          pixelated={true} />
        <ProjectImage
          src="/reel-steal-screenshot-3.webp"
          alt="A small character suspended on a fishing hook navigates some platforms."
          width={400}
          height={240}
          pixelated={true} />
      </ProjectContent>
    </>
  )
}
