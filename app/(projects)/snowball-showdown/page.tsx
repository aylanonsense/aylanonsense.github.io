import ExternalLink from "@/app/components/ExternalLink"
import ProjectContent from "@/app/components/ProjectContent"
import ProjectHeader from "@/app/components/ProjectHeader"
import ProjectImage from "@/app/components/ProjectImage"
import SoundCloudEmbed from "@/app/components/SoundCloudEmbed"

export default function Page() {
  return (
    <>
      <ProjectHeader
        title="Snowball Showdown"
        date="December 2018"
        links={[
          "https://aylanonsense.itch.io/snowball-showdown",
          "https://www.lexaloffle.com/bbs/?pid=snowball_showdown",
          "https://github.com/aylanonsense/snowball-showdown",
        ]}
        compact={true}>
        <ProjectImage
          src="/snowball-showdown-gameplay-1.gif"
          alt={"Title screen for \"Snowball Showdown\" with player one and player two."}
          width={128}
          height={128}
          pixelated={true} />
      </ProjectHeader>
      <ProjectContent compact={true}>
        <p>A one-button 1-v-1 standoff in a blizzard! Developed for <ExternalLink href="https://www.lexaloffle.com/bbs/?tid=32388">PICO-8 Advent Calendar 2018</ExternalLink>.</p>
        <ProjectImage
          src="/snowball-showdown-gameplay-2.gif"
          alt="Two players bow before beginning to pack snowballs."
          width={128}
          height={128}
          pixelated={true} />
        <ProjectImage
          src="/snowball-showdown-gameplay-4.gif"
          alt="A player dodges a snowball before throwing their own."
          width={128}
          height={128}
          pixelated={true} />
      </ProjectContent>
    </>
  )
}
