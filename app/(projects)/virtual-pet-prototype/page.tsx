import ProjectHeader from "@/app/components/ProjectHeader"
import ProjectContent from "@/app/components/ProjectContent"
import ProjectImage from "@/app/components/ProjectImage"

export default function Page() {
  return (
    <>
      <ProjectHeader
        title="Virtual pet prototype"
        date="January 2004"
        shrink={true}>
        <ProjectImage
          src="/virtual-pet-prototype-gameplay-1.gif"
          alt="A black blob emerges from an egg."
          width={475}
          height={325}
        />
      </ProjectHeader>
      <ProjectContent>
        <p>One of the very first games I ever made. A little virtual pet game where you cared for your pet blob.</p>
      </ProjectContent>
    </>
  )
}
