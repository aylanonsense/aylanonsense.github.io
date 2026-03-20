import YouTubeEmbed from "@/app/components/YouTubeEmbed"
import ProjectHeader from "@/app/components/ProjectHeader"
import ProjectContent from "@/app/components/ProjectContent"
import ProjectImage from '@/app/components/ProjectImage'

export default function Page() {
  return (
    <>
      <ProjectHeader
        title="Beach volleyball prototype"
        date="May 2015"
        shrink={true}>
        <ProjectImage
          src="/beach-volleyball-prototype-gameplay.gif"
          alt="Gameplay in which a mouse ricochets between tiles like a pinball"
          width={195}
          height={141}
          pixelated={true}
        />
      </ProjectHeader>
      <ProjectContent>
        <p>An online multiplayer beach volleyball game with moon gravity. This was just an excuse to learn network programming&mdash;I built my own netcode and implemented basic rollback. It was hosted on my site for a long time, but not anymore.</p>
      </ProjectContent>
    </>
  )
}
