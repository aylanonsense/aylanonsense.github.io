import ProjectContent from "@/app/components/ProjectContent";
import ProjectHeader from "@/app/components/ProjectHeader";
import YouTubeEmbed from "@/app/components/YouTubeEmbed";

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
        <p>A virtual reality laser sword fighting game with voxel destruction and physics-based combat. Players participate in runs of the Crashloop to gain powerful weapons and super-powered gauntlets called Turbofists in the hopes of defeating the Captain in the Hyperdome.</p>
        <p>CDHD released to Very Positive reviews on <a href="https://store.steampowered.com/app/2401230/Clone_Drone_in_the_Hyperdome/" target="_blank" rel="noopener noreferrer">Steam</a> and 4.6 stars on the <a href="https://www.meta.com/experiences/clone-drone-in-the-hyperdome/4523126804481573/" target="_blank" rel="noopener noreferrer">Meta Store</a> on December 12, 2024.</p>
        <p>On July 27, 2025 a free update to CDHD was released which introduced the Skyscrapper, an endless tower of robot carnage.</p>
        <YouTubeEmbed
          src="https://www.youtube-nocookie.com/embed/xwJryg1nNfc?si=0uKtyJXYUo0-o_5G"
          width={560}
          height={315} />
      </ProjectContent>
    </>
  );
}
