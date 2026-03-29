import ProjectContent from "@/app/components/ProjectContent"
import ProjectHeader from "@/app/components/ProjectHeader"
import ProjectImage from "@/app/components/ProjectImage"

export default function Page() {
  return (
    <>
      <ProjectHeader
        title="Efflorescence"
        date="January 2005">
        <ProjectImage
          src="/efflorescence-screenshot-1.jpg"
          alt="Strange fruit with digits printed on them hang from a pair of trees."
          width={888}
          height={617} />
      </ProjectHeader>
      <ProjectContent>
        <p>An extremely esoteric math game about making trees bloom. The player clicks fruits to make them fall to the ground and that changes some of the numbers but I don't really remember the exact mechanics. One of my early Flash games.</p>
      </ProjectContent>
    </>
  )
}
