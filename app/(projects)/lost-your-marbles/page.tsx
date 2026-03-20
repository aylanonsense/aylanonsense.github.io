import ExternalLink from "@/app/components/ExternalLink"
import ProjectContent from "@/app/components/ProjectContent"
import ProjectHeader from "@/app/components/ProjectHeader"
import ProjectImage from "@/app/components/ProjectImage"

export default function Page() {
  return (
    <>
      <ProjectHeader
        title="Lost Your Marbles"
        releaseDate="September 15, 2021"
        links={[
          "https://play.date/games/lost-your-marbles/",
        ]}>
        <ProjectImage
          src="/lost-your-marbles-gameplay-1.gif"
          alt={"The title screen for \"Lost Your Marbles\" with \"Continue\" and \"New Game\" buttons."}
          width={400}
          height={240}
          pixelated={true} />
      </ProjectHeader>
      <ProjectContent>
        <p>A unique cross between a visual novel and a marble platformer. Help Prota find her dog Minty by talking with the colorful (and oftentimes absurd) inhabitants of Pomegranate Village... except your dialogue choices in the overarching narrative are determined by the exits you take in challenging marble mazes!</p>
        <ProjectImage
          src="/lost-your-marbles-gameplay-3.gif"
          alt={"A marble rolls about a 2D world with \"Choose your paper\" written overtop."}
          width={400}
          height={240}
          pixelated={true} />
        <p>&quot;Lost Your Marbles&quot; was developed exclusively for <ExternalLink href="https://play.date/games/season-one/">Playdate Season One</ExternalLink> and received praise for its fantastical world and branching narrative.</p>
        <ProjectImage
          src="/lost-your-marbles-gameplay-2.gif"
          alt={"A character named \"Prota\" shares a conversation with a sunglass-wearing cactus named \"Spiky Jon\"."}
          width={400}
          height={240}
          pixelated={true} />
      </ProjectContent>
    </>
  )
}
