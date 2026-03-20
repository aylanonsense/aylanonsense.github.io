import ExternalLink from "@/app/components/ExternalLink"
import ProjectContent from "@/app/components/ProjectContent"
import ProjectHeader from "@/app/components/ProjectHeader"
import ProjectImage from "@/app/components/ProjectImage"

export default function Page() {
  return (
    <>
      <ProjectHeader
        title="8 Legs to Love"
        date="June 2017"
        links={[
          "https://aylanonsense.itch.io/8-legs-to-love",
          "https://www.lexaloffle.com/bbs/?pid=41423",
          "https://www.newgrounds.com/portal/view/709469",
          "https://github.com/aylanonsense/8-legs-to-love",
        ]}
        shrinkContent={true}>
        <ProjectImage
          src="/eight-legs-to-love-gameplay-1.gif"
          alt={"A spider hangs beneath \"8 Legs to Love\" spelled out in silky letters, with blinking \"Press Z to start\" text below."}
          width={128}
          height={128}
          pixelated={true}
        />
      </ProjectHeader>
      <ProjectContent>
        <p>An arcade game where you play as a spider constructing a web and eating bugs for points. Each level poses a unique challenge.</p>
        <ProjectImage
          src="/eight-legs-to-love-gameplay-2.gif"
          alt="A spider constructs a web between the moving girders of a construction site."
          width={128}
          height={128}
          pixelated={true}
        />
        <p>The webs are chains of particles that follow a modified Hooke's Law, including mechanical failure from over-extension.</p>
        <ProjectImage
          src="/eight-legs-to-love-gameplay-3.gif"
          alt="A massive spider coats the earth and the moon in its web."
          width={128}
          height={128}
          pixelated={true}
        />
      </ProjectContent>
    </>
  )
}
