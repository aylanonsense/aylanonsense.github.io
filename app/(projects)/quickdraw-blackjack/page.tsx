import ExternalLink from "@/app/components/ExternalLink"
import ProjectContent from "@/app/components/ProjectContent"
import ProjectHeader from "@/app/components/ProjectHeader"
import ProjectImage from "@/app/components/ProjectImage"

export default function Page() {
  return (
    <>
      <ProjectHeader
        title="Quickdraw Blackjack"
        date="December 2018"
        links={[
          "https://github.com/aylanonsense/quickdraw-blackjack",
        ]}
          compact={true}>
        <ProjectImage
          src="/quickdraw-blackjack-gameplay-3.gif"
          alt={"Cards are thrown up and shot in quick order and the combined total is tallied to be 21. \"Blackjack!\" appears."}
          width={190}
          height={190}
          pixelated={true} />
      </ProjectHeader>
      <ProjectContent compact={true}>
        <p>A small mobile created made for the <ExternalLink href="https://castle.xyz/">Castle</ExternalLink> game platform. Given a hand of playing cards, you shoot cards thrown into the air in the hopes of forming a winning blackjack hand.</p>
        <ProjectImage
          src="/quickdraw-blackjack-gameplay-1.gif"
          alt={"A wooden board engraved with the words \"Quickdraw Blackjack\" appears above a sheriff's star that reads \"Play\"."}
          width={250}
          height={440}
          pixelated={true} />
        <ProjectImage
          src="/quickdraw-blackjack-gameplay-2.gif"
          alt={"Cards are thrown up and shot in quick order and the combined total is tallied to be 18. \"Miss!\" appears."}
          width={250}
          height={440}
          pixelated={true} />
      </ProjectContent>
    </>
  )
}
