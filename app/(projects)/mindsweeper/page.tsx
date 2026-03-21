import ProjectHeader from "@/app/components/ProjectHeader"
import ProjectContent from "@/app/components/ProjectContent"
import ProjectImage from '@/app/components/ProjectImage'
import ExternalLink from "@/app/components/ExternalLink"

export default function Page() {
  return (
    <>
      <ProjectHeader
        title="Mindsweeper"
        date="January 2005"
        shrink={true}>
        <ProjectImage
          src="/mindsweeper-gameplay-1.gif"
          alt="Gameplay from a variety of minigames: an endless runner, a racing game, a platformer, and a basketball shooting game."
          width={935}
          height={787}
          pixelated={true}
        />
      </ProjectHeader>
      <ProjectContent>
        <p>The first game I was ever commissioned to make. Made for an old Flash site that's now defunct. It was like Minesweeper but worse.</p>
      </ProjectContent>
    </>
  )
}
