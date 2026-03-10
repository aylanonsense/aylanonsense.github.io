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
      <p>An action adventure combining turn-based RPG mechanics with Peggle-like bouncing and ricochets. You play as a small mouse defending a world of woodland critters from massive monsters made of mosaic glass tiles. The core gameplay revolves around battling monsters, crafting/upgrading equipment, conversing with companions, and uncovering the overarching narrative over the course of a 15-hour playthrough.</p>
    </>
  );
}
