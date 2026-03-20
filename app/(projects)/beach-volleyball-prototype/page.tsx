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
          alt="A pixelated volleyball player bumps a ball and then spikes it into the sand."
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
