import YouTubeEmbed from "@/app/components/YouTubeEmbed";
import ProjectHeader from "@/app/components/ProjectHeader";

export default function Page() {
  return (
    <>
      <ProjectHeader title="Beast Breaker">
        <YouTubeEmbed
          src="https://www.youtube-nocookie.com/embed/SZhqedzllLE?si=N72-HHaKdfa4vvwN"
          aspectRatio={560 / 315} />
      </ProjectHeader>
      <p>Released September 2021</p>
      <p><a href="https://store.epicgames.com/en-US/p/beast-breaker" target="_blank" rel="noopener noreferrer">Switch</a></p>
      <p><a href="https://www.nintendo.com/us/store/products/beast-breaker-switch/" target="_blank" rel="noopener noreferrer">Epic Games</a></p>
    </>
  );
}
