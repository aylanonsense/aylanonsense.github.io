import ExternalLink from "@/app/components/ExternalLink"
import ProjectContent from "@/app/components/ProjectContent"
import ProjectHeader from "@/app/components/ProjectHeader"
import ProjectImage from "@/app/components/ProjectImage"

export default function Page() {
  return (
    <>
      <ProjectHeader
        title="Juggle Panic"
        date="March 2018"
        links={[
          "https://aylanonsense.itch.io/juggle-panic",
          "https://github.com/aylanonsense/juggle-panic",
          "https://www.lexaloffle.com/bbs/?pid=50260",
        ]}
        compact={true}>
        <ProjectImage
          src="/juggle-panic-gameplay-1.gif"
          alt={"The title \"Juggle Panic\" slides out of view to show two players atop a rainbow background."}
          width={128}
          height={128}
          pixelated={true} />
      </ProjectHeader>
      <ProjectContent compact={true}>
        <p>A two-player juggling extravaganza! First to drop five balls loses. The game features a ton of alternate game modes.</p>
        <ProjectImage
          src="/juggle-panic-gameplay-2.gif"
          alt="Two players throw balls back-and-forth, exploding if they touch the ground."
          width={128}
          height={128}
          pixelated={true} />
        <ProjectImage
          src="/juggle-panic-gameplay-3.gif"
          alt={"\"Sudden death activated!\" appears before a player throws a ball and immediately wins."}
          width={128}
          height={128}
          pixelated={true} />
        <ProjectImage
          src="/juggle-panic-gameplay-4.gif"
          alt={"\"Leapfrog mode activated!\" appears overhead two green players leaping forwards and backwards."}
          width={128}
          height={128}
          pixelated={true} />
      </ProjectContent>
    </>
  )
}
