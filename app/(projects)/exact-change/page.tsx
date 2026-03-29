import ExternalLink from "@/app/components/ExternalLink"
import ProjectContent from "@/app/components/ProjectContent"
import ProjectHeader from "@/app/components/ProjectHeader"
import ProjectImage from "@/app/components/ProjectImage"

export default function Page() {
  return (
    <>
      <ProjectHeader
        title="Exact Change"
        date="August 2019">
        <ProjectImage
          src="/exact-change-gameplay-1.gif"
          alt="A floating blue eye requests $20 be made into $15.21 change. A set of orange hands offers up the difference."
          width={128}
          height={128}
          pixelated={true} />
      </ProjectHeader>
      <ProjectContent>
        <p>A game about counting change! The eye in the center names the price, the blue hands on the left offer some amount of dollars, and you must count out the change. Developed for the <ExternalLink href="https://www.kickstarter.com/projects/markkleeb/wonderville-arcade">Wonderbundle</ExternalLink>&mdash;a collection of small games to help raise funds for the creation of <ExternalLink href="https://www.wonderville.nyc/">Wonderville</ExternalLink>, an indie game bar in NYC.</p>
      </ProjectContent>
    </>
  )
}
