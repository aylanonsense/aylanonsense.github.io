import ProjectHeader from "@/app/components/ProjectHeader"
import ProjectContent from "@/app/components/ProjectContent"
import ProjectImage from "@/app/components/ProjectImage"

export default function Page() {
  return (
    <>
      <ProjectHeader
        title="Western prototype"
        date="September 2017"
        compact={true}>
        <ProjectImage
          src="/western-prototype-gameplay.gif"
          alt="A swordsman silhouetted by the sun fights past screens of gunslingers."
          width={128}
          height={128}
          pixelated={true} />
      </ProjectHeader>
      <ProjectContent compact={true}>
        <p>A series of duels between a swordsman and a group of armed bandits. Each screen features a unique challenge. I dropped the project because it didn't feel like there was enough design space, but I like the bit of lighting/shadow code I wrote for it.</p>
      </ProjectContent>
    </>
  )
}
