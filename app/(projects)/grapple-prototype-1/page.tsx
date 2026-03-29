import Link from "next/link"
import ProjectContent from "@/app/components/ProjectContent"
import ProjectHeader from "@/app/components/ProjectHeader"
import ProjectImage from "@/app/components/ProjectImage"

export default function Page() {
  return (
    <>
      <ProjectHeader
        title="Grapple prototype #1"
        date="February 2014"
        compact={true}>
        <ProjectImage
          src="/grapple-prototype-1-gameplay-1.gif"
          alt="A mailman swings between floating islands made of tiles using a grappling hook."
          width={195}
          height={142}
          pixelated={true} />
      </ProjectHeader>
      <ProjectContent compact={true}>
        <p>Prototype for a web game about where you move about with grappling hooks delivering mail. The levels are tile-based and get baked to line segments at build-time for optimized grapple collision detection. This was followed up by <Link href="/grapple-prototype-2">grapple prototype #2</Link> when I wasn't satisfied with some of the math.</p>
      </ProjectContent>
    </>
  )
}
