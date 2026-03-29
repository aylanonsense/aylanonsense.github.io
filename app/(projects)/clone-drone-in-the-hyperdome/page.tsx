import ProjectContent from "@/app/components/ProjectContent"
import ProjectHeader from "@/app/components/ProjectHeader"
import ProjectImage from "@/app/components/ProjectImage"
import ProjectVideo from "@/app/components/ProjectVideo"
import YouTubeEmbed from "@/app/components/YouTubeEmbed"

export default function Page() {
  return (
    <>
      <ProjectHeader
        title="Clone Drone in the Hyperdome"
        releaseDate="December 12, 2024"
        links={[
          "https://store.steampowered.com/app/2401230/Clone_Drone_in_the_Hyperdome/",
          "https://www.meta.com/experiences/clone-drone-in-the-hyperdome/4523126804481573/",
        ]}>
        <YouTubeEmbed
          src="https://www.youtube-nocookie.com/embed/Lak9cQqVsrM?si=XFuV7R1CJdw9pcjK"
          aspectRatio={560 / 315} />
      </ProjectHeader>
      <ProjectContent>
        <p>A virtual reality laser sword fighting game with full voxel destruction and physics-based combat. Compete in runs of the Crashloop to gain powerful Turbofists in the hopes of eventually defeating the evil Captain in the Hyperdome itself!</p>
        {/* <ProjectVideo
          src="https://www.youtube-nocookie.com/embed/xwJryg1nNfc?si=0uKtyJXYUo0-o_5G"
          width={560}
          height={315} /> */}
        <p>A free update to CDHD released July 2025 introduced endless mode with the Skyscrapper: an infinite tower of robot carnage!</p>
        {/* <ProjectImage
          src="/clone-drone-in-the-hyperdome-screenshot-1.jpg"
          alt="A robot's head is sliced off its body with a laser sword."
          width={1280}
          height={720} /> */}
        <p>CDHD received Very Positive reviews on <a href="https://store.steampowered.com/app/2401230/Clone_Drone_in_the_Hyperdome/" target="_blank" rel="noopener noreferrer">Steam</a> and averaged 4.6 out of 5 stars on the <a href="https://www.meta.com/experiences/clone-drone-in-the-hyperdome/4523126804481573/" target="_blank" rel="noopener noreferrer">Meta Store</a>.</p>
        {/* <ProjectImage
          src="/clone-drone-in-the-hyperdome-screenshot-2.jpg"
          alt={"A robot named Phantoma says, \"...we may finally have a chance at defeating The Captain.\"."}
          width={1280}
          height={720} /> */}
      </ProjectContent>
    </>
  )
}
