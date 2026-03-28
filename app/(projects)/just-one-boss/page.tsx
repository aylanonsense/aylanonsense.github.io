import ExternalLink from "@/app/components/ExternalLink"
import ProjectContent from "@/app/components/ProjectContent"
import ProjectHeader from "@/app/components/ProjectHeader"
import ProjectImage from "@/app/components/ProjectImage"
import SoundCloudEmbed from "@/app/components/SoundCloudEmbed"

export default function Page() {
  return (
    <>
      <ProjectHeader
        title="Just One Boss"
        date="February 2018"
        links={[
          "https://aylanonsense.itch.io/just-one-boss",
          "https://www.lexaloffle.com/bbs/?pid=49234",
          "https://www.newgrounds.com/portal/view/708665",
          "https://github.com/aylanonsense/just-one-boss",
        ]}>
        <ProjectImage
          src="/just-one-boss-gameplay-1.gif"
          alt={"The title screen for \"Just One Boss\"."}
          width={128}
          height={128}
          pixelated={true} />
      </ProjectHeader>
      <ProjectContent>
        <p>A single challenging boss fight against a magic mirror. You move about a grid dodging the boss's attacks while collecting glowing tiles to progress towards victory. As the fight continues the boss begins weaving in more challenging attacks and mechanics.</p>
        <ProjectImage
          src="/just-one-boss-clip.gif"
          alt="A magic mirror throws cards and shoots lasers at a little blue character."
          width={128}
          height={128}
          pixelated={true} />
        <p>&quot;Just One Boss&quot; has been played millions of times across dozens of sites and even has its own <ExternalLink href="https://www.speedrun.com/just_one_boss">speedrunning community</ExternalLink>.</p>
        <ProjectImage
          src="/just-one-boss-gameplay-2.gif"
          alt="A magic mirror pounds its fist and splits into five multicolored reflections."
          width={128}
          height={128}
          pixelated={true} />
        <p>I developed the game over three months, during which I taught myself basic music theory to compose the game's chiptune tracks.</p>
        <SoundCloudEmbed src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A558696030&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=true" />
      </ProjectContent>
    </>
  )
}
