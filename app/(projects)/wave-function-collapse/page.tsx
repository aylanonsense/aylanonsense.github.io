import ExternalLink from "@/app/components/ExternalLink"
import ProjectHeader from "@/app/components/ProjectHeader"
import ProjectContent from "@/app/components/ProjectContent"
import ProjectImage from "@/app/components/ProjectImage"

export default function Page() {
  return (
    <>
      <ProjectHeader
        title="Wave function collapse prototype"
        date="May 2017">
        <ProjectImage
          src="/wave-function-collapse-output-1.gif"
          alt="Pixelated red, yelllow, and blue patterns emerge out of flat colors."
          width={240}
          height={135}
          pixelated={true} />
      </ProjectHeader>
      <ProjectContent compact={true}>
        <p>An implementation of the <ExternalLink href="https://github.com/mxgmn/WaveFunctionCollapse">Wave Function Collapse</ExternalLink> algorithm for generating patterns that match a reference image. Handy for game development and a fun algorithm to program.</p>
        <ProjectImage
          src="/wave-function-collapse-clip.gif"
          alt="A red-and-blue pattern appears from a purple background."
          width={75}
          height={75}
          pixelated={true} />
      </ProjectContent>
    </>
  )
}
