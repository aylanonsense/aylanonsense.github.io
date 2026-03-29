import ProjectContent from "@/app/components/ProjectContent"
import ProjectHeader from "@/app/components/ProjectHeader"
import ProjectImage from "@/app/components/ProjectImage"

export default function Page() {
  return (
    <>
      <ProjectHeader
        title="Nebulaic"
        date="January 2008">
        <ProjectImage
          src="/nebulaic-gameplay-1.gif"
          alt="Floating red particles envelop and convert white and green particles to their color."
          width={575}
          height={575} />
      </ProjectHeader>
      <ProjectContent>
        <p>A Flash game for a school project. The particles of your color follow your mouse, and you use them to convert neutral particles over to your color. It's a simple little game about grabbing up all the particles using gravity physics.</p>
      </ProjectContent>
    </>
  )
}
