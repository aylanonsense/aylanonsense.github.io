import ExternalLink from "@/app/components/ExternalLink";
import ProjectContent from "@/app/components/ProjectContent";
import ProjectHeader from "@/app/components/ProjectHeader";
import ProjectImage from "@/app/components/ProjectImage";

export default function Page() {
  return (
    <>
      <ProjectHeader
        title="Staring"
        date="August 2019"
        shrinkContent={true}>
        <ProjectImage
          src="/staring-clip.gif"
          alt="A purple and green blob dodge laser-like stares from goopy onlookers."
          width={190}
          height={190}
          pixelated={true} />
      </ProjectHeader>
      <ProjectContent>
        <p>A multiplayer twin-stick shooter where you dodge the laser-like stares of goopy onlookers. &quot;Staring&quot; was commissioned as part of <ExternalLink href="https://play.nyc/">PlayNYC</ExternalLink>'s Graffiti Games and exhibited at Playcrafting 2019.</p>
        <ProjectImage
          src="/staring-gameplay-1.gif"
          alt={"The title screen for \"Staring\"."}
          width={300}
          height={195}
          pixelated={true} />
        <p>The exhibition included an art installation featuring hundreds of paper eyes hand-drawn by event attendees glued to amorphous shapes made of black tissue paper atop wire scaffolding.</p>
        <ProjectImage
          src="/staring-photo.webp"
          alt="An event booth decorated with hand-drawn eyeballs."
          width={1599}
          height={1125} />
        <p>From <ExternalLink href="https://techraptor.net/gaming/features/play-nycs-graffiti-games-celebrated-lgbtq-experiences-and-they-were-pretty-darn-fun">TechRaptor's Robert Grosso</ExternalLink>:</p>
        <blockquote cite="https://techraptor.net/gaming/features/play-nycs-graffiti-games-celebrated-lgbtq-experiences-and-they-were-pretty-darn-fun">
          <p>&quot;Staring is the type of game Graffiti Games is meant to be. Solely from the perspective of its lone developer, Myers gives us a little taste of what she personally has gone through but finds a way to twist it into something positive.&quot;</p>
        </blockquote>
        <ProjectImage
          src="/staring-gameplay-2.gif"
          alt={"A purple blob fails to dodge laser-like stares from goopy onlookers and text appears on-screen, \"Some days are harder than others\"."}
          width={600}
          height={390}
          pixelated={true} />
      </ProjectContent>
    </>
  );
}
