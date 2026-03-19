import ExternalLink from "@/app/components/ExternalLink";
import ProjectContent from "@/app/components/ProjectContent";
import ProjectHeader from "@/app/components/ProjectHeader";
import ProjectImage from "@/app/components/ProjectImage";

export default function Page() {
  return (
    <>
      <ProjectHeader
        title="Just One Boss"
        releaseDate="February 2018"
        links={[
          "https://aylanonsense.itch.io/just-one-boss",
          "https://www.lexaloffle.com/bbs/?pid=49234",
          "https://www.newgrounds.com/portal/view/708665",
          "https://github.com/aylanonsense/just-one-boss",
        ]}>
        <ProjectImage
          src="/just-one-boss-gameplay-1.gif"
          alt="TODO"
          width={128}
          height={128}
          pixelated={true} />
      </ProjectHeader>
      <ProjectContent>
        <p>TODO</p>
        <ProjectImage
          src="/just-one-boss-clip.gif"
          alt="TODO"
          width={128}
          height={128}
          pixelated={true} />
        <ProjectImage
          src="/just-one-boss-gameplay-2.gif"
          alt="TODO"
          width={128}
          height={128}
          pixelated={true} />
        <ProjectImage
          src="/just-one-boss-gameplay-3.gif"
          alt="TODO"
          width={128}
          height={128}
          pixelated={true} />
      </ProjectContent>
    </>
  );
}
