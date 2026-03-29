import ProjectHeader from "@/app/components/ProjectHeader"
import ProjectContent from "@/app/components/ProjectContent"
import ProjectImage from "@/app/components/ProjectImage"
import ExternalLink from "@/app/components/ExternalLink"

export default function Page() {
  return (
    <>
      <ProjectHeader
        title="Castle minigames"
        date="August 2019"
        compact={true}>
        <ProjectImage
          src="/castle-minigames-clip.gif"
          alt="Gameplay from a variety of minigames: an endless runner, a racing game, a platformer, and a basketball shooting game."
          width={192}
          height={192}
          pixelated={true} />
      </ProjectHeader>
      <ProjectContent compact={true}>
        <p>I was commissioned to develop a dozen small minigames for the <ExternalLink href="https://castle.xyz/">Castle game platform</ExternalLink> to serve as a starting point for beginner game devs. There was a top-down racing game, a platformer, a boids flocking simulation, an endless runner, and an asteroids clone among others.</p>
      </ProjectContent>
    </>
  )
}
