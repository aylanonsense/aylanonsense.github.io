import Link from "next/link"
import ProjectContent from "@/app/components/ProjectContent"
import ProjectHeader from "@/app/components/ProjectHeader"
import ProjectImage from "@/app/components/ProjectImage"

export default function Page() {
  return (
    <>
      <ProjectHeader
        title="Grapple prototype #2"
        date="November 2015">
        <ProjectImage
          src="/grapple-prototype-2-gameplay-1.gif"
          alt="A tiny figure swings between geometric objects using a grappling hook."
          width={448}
          height={355}
          pixelated={true} />
      </ProjectHeader>
      <ProjectContent>
        <p>A project I took on to really learn 2D geometry hit detection. The level is defined by a series of line segments and curves and the player's grappling hook reliably latches onto (and even slightly auto-aims towards) level geometry. High-speed objects are accurately interpolated. Just a chance to learn and practice.</p>
      </ProjectContent>
    </>
  )
}
