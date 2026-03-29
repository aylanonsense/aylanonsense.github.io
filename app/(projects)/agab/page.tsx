import ProjectHeader from "@/app/components/ProjectHeader"
import ProjectContent from "@/app/components/ProjectContent"
import ProjectImage from "@/app/components/ProjectImage"
import ExternalLink from "@/app/components/ExternalLink"

export default function Page() {
  return (
    <>
      <ProjectHeader
        title="AGAB"
        date="April 2018"
        links={[
          "https://aylanonsense.itch.io/agab",
          "https://github.com/aylanonsense/agab",
        ]}
        compact={true}>
        <ProjectImage
          src="/agab-gameplay-1.gif"
          alt="A squishy green blob collects tomatoes to turn red."
          width={128}
          height={128}
          pixelated={true} />
      </ProjectHeader>
      <ProjectContent compact={true}>
        <p>A short game where you gobble up tomatoes. Your jump arc is fixed but you have the ability to stick to walls and ceilings. Developed for a weekend-long <ExternalLink href="https://itch.io/jam/slime-studio-jam">Slime Jam</ExternalLink>.</p>
      </ProjectContent>
    </>
  )
}
