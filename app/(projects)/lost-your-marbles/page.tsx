import ExternalLink from "@/app/components/ExternalLink";
import ProjectContent from "@/app/components/ProjectContent";
import ProjectHeader from "@/app/components/ProjectHeader";
import ProjectImage from "@/app/components/ProjectImage";

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
          alt={"A robot named Phantoma says, \"...we may finally have a chance at defeating The Captain.\"."}
          width={400}
          height={240}
          pixelated={true} />
      </ProjectHeader>
      <ProjectContent>
        <p>Released and developed exclusively for Season 1 of the <ExternalLink href="https://play.date/">Playdate</ExternalLink>, &quot;Lost Your Marbles&quot; is half visual novel half marble platformer. Players navigate marble mazes</p>
        <p>Help Prota find her dog Minty by talking with the fantastical (and absurd) inhabitants of Pomegranate Village. Your dialogue choices in the overarching narrative are determined by the exits you take in the marble mazes.</p>
        <ProjectImage
          src="/lost-your-marbles-gameplay-3.gif"
          alt={"A robot named Phantoma says, \"...we may finally have a chance at defeating The Captain.\"."}
          width={400}
          height={240}
          pixelated={true} />
        <ProjectImage
          src="/lost-your-marbles-gameplay-2.gif"
          alt={"A robot named Phantoma says, \"...we may finally have a chance at defeating The Captain.\"."}
          width={400}
          height={240}
          pixelated={true} />
      </ProjectContent>
    </>
  );
}
