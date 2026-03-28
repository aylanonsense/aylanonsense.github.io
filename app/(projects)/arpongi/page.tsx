import ExternalLink from "@/app/components/ExternalLink"
import ProjectContent from "@/app/components/ProjectContent"
import ProjectHeader from "@/app/components/ProjectHeader"
import ProjectImage from "@/app/components/ProjectImage"

export default function Page() {
  return (
    <>
      <ProjectHeader
        title="arpongi"
        date="May 2018">
        <ProjectImage
          src="/arpongi-gameplay-1.gif"
          alt={"The title screen to the game \"arpongi\", each side of the screen showing a player selection for \"Knight\", \"Thief\", or \"Witch\"."}
          width={128}
          height={128}
          pixelated={true} />
      </ProjectHeader>
      <ProjectContent>
        <p>A pong-like game where hitting the ball grants you experience and gold that can be spent placing miniature buildings on the field. Knocking the ball into a building triggers special effects like spawning troops or healing lost health.</p>
        <ProjectImage
          src="/arpongi-gameplay-2.gif"
          alt="A blue figure and a yellow figure knock a pong ball across a tiny landscape dotted with buildings."
          width={128}
          height={128}
          pixelated={true} />
        <p>&quot;aprongi&quot; was commissioned as part of the <ExternalLink href="https://www.deathbyaudioarcade.com/dreamboxxx">DreamboxXx</ExternalLink>, a custom arcade cabinet that has been on display at many NYC bars and venues such as <ExternalLink href="https://www.facebook.com/TheSpectrumBK/">Spectrum</ExternalLink> and <ExternalLink href="https://www.facebook.com/TheSpectrumBK/">All Night Skate</ExternalLink>. It was also selected to be featured at <ExternalLink href="https://gamecenter.nyu.edu/meet-the-2018-no-quarter-artists-ayla-myers/">No Quarter</ExternalLink> in 2018.</p>
        <ProjectImage
          src="/arpongi-cabinet.gif"
          alt={"A glowing reflective arcade cabinet entitled \"DreamBoxXx\"."}
          width={500}
          height={750} />
      </ProjectContent>
    </>
  )
}
