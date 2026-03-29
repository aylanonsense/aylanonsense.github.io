import Link from "next/link"
import ProjectContent from "@/app/components/ProjectContent"
import ProjectHeader from "@/app/components/ProjectHeader"
import ProjectImage from "@/app/components/ProjectImage"

export default function Page() {
  return (
    <>
      <ProjectHeader
        title="Boss fight prototype"
        date="November 2014">
        <ProjectImage
          src="/boss-fight-prototype-gameplay-1.gif"
          alt="A king-like boss summons ice cubes and smashes them while a small character throws projectiles at them."
          width={400}
          height={299}
          pixelated={true} />
      </ProjectHeader>
      <ProjectContent>
        <p>Prototype for a boss fight against a frosty monarch. It was originally intended to be one of a sequence of three boss fights, each one a member of elemental royalty.</p>
      </ProjectContent>
    </>
  )
}
