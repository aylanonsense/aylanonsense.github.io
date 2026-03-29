import ProjectHeader from "@/app/components/ProjectHeader"
import ProjectContent from "@/app/components/ProjectContent"
import ProjectImage from "@/app/components/ProjectImage"

export default function Page() {
  return (
    <>
      <ProjectHeader
        title="Train prototype"
        date="July 2016">
        <ProjectImage
          src="/train-prototype-gameplay-2.gif"
          alt="A pixelated red train collects coins and dodges spears on cloudy hilltops."
          width={128}
          height={128}
          pixelated={true} />
      </ProjectHeader>
      <ProjectContent compact={true}>
        <p>Snake but an autoscroller. You're a little red train that picks up animal companions and tries to get them to the end of the level. I set the project down because Snake controls + constant vertical scrolling + a pixelated display is a rough combination.</p>
        <p>The working title was &quot;Super Yay Train&quot;.</p>
        <ProjectImage
          src="/train-prototype-gameplay-1.gif"
          alt={"The text \"Super Yay Train\" hovers over a bouncing train of animals."}
          width={128}
          height={128}
          pixelated={true} />
      </ProjectContent>
    </>
  )
}
