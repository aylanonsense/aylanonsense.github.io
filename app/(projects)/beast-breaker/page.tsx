import YouTubeEmbed from "@/app/components/YouTubeEmbed";
import ProjectHeader from "@/app/components/ProjectHeader";
import ProjectContent from "@/app/components/ProjectContent";
import ProjectImage from '@/app/components/ProjectImage';

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
      <ProjectContent>
        <p>An action adventure combining turn-based RPG mechanics with Peggle-like gameplay. You play as a small mouse defending a world of woodland critters from massive monsters made of mosaic glass tiles which you shatter by bouncing about like a pinball.</p>
        <ProjectImage
          src="/beast-breaker-gameplay.gif"
          alt="Gameplay in which a mouse ricochets between tiles like a pinball"
          width={1280}
          height={720} />
        <p>The core gameplay revolves around battling monsters, crafting/upgrading equipment, conversing with companions, and uncovering the overarching narrative over the course of a 15-hour playthrough.</p>
        <p>The game was praised for its story.</p>
        <ProjectImage
          src="/beast-breaker-screenshot-1.jpg"
          alt={"A hedgehog says to a mouse, \"Well, blow me over with a breeze! You may be tiny, but talk about making a big IMPACT!\"."}
          width={1280}
          height={720} />
      </ProjectContent>
    </>
  );
}
