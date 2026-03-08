import YouTubeEmbed from "@/app/components/YouTubeEmbed";
import ProjectHeader from "@/app/components/ProjectHeader";

export default function Page() {
  return (
    <>
      <ProjectHeader
        title="Beast Breaker"
        releaseDate="September 2021"
        links={[
          "https://store.epicgames.com/en-US/p/beast-breaker",
          "https://www.nintendo.com/us/store/products/beast-breaker-switch/"
        ]}>
        <YouTubeEmbed
          src="https://www.youtube-nocookie.com/embed/SZhqedzllLE?si=N72-HHaKdfa4vvwN"
          aspectRatio={560 / 315} />
      </ProjectHeader>
      <p>A turn-based action adventure combining traditional RPG mechanics with Peggle-like bouncing and ricochets. You play as Skipper, a small mouse tasked with defending world of small creatures from mosaic glass Beasts. The core gameplay revolves around battling Beasts, crafting/upgrading equipment, conversing with your companions, and uncovering the overarching narrative over the course of a 15-hour playthrough.</p>
    </>
  );
}
