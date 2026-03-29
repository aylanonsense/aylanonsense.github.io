import ProjectHeader from "@/app/components/ProjectHeader"
import ProjectContent from "@/app/components/ProjectContent"
import ProjectImage from "@/app/components/ProjectImage"

export default function Page() {
  return (
    <>
      <ProjectHeader
        title="Mindsweeper"
        date="January 2005"
        compact={true}>
        <ProjectImage
          src="/mindsweeper-gameplay-1.gif"
          alt="A grid of tiles gets filled in with colored numbers."
          width={935}
          height={787}
          pixelated={true} />
      </ProjectHeader>
      <ProjectContent compact={true}>
        <p>The first game I was ever commissioned to make. For an old Flash site that's now defunct. It's like Minesweeper but worse.</p>
      </ProjectContent>
    </>
  )
}
