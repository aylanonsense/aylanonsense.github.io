import Link from "next/link"
import ProjectContent from "@/app/components/ProjectContent"
import ProjectHeader from "@/app/components/ProjectHeader"
import ProjectImage from "@/app/components/ProjectImage"

export default function Page() {
  return (
    <>
      <ProjectHeader
        title="Platform fighter prototype"
        date="May 2016">
        <ProjectImage
          src="/platform-fighter-prototype-gameplay-1.gif"
          alt="An alligator-like character dashes through the air before biting another character."
          width={687}
          height={507}
          pixelated={true} />
      </ProjectHeader>
      <ProjectContent>
        <p>Prototype for a Smash-like fighting game. The character would have been an alligator construction worker carrying a girder.</p>
      </ProjectContent>
    </>
  )
}
