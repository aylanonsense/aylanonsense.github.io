import ProjectHeader from "@/app/components/ProjectHeader"
import ProjectContent from "@/app/components/ProjectContent"
import ProjectImage from "@/app/components/ProjectImage"

export default function Page() {
  return (
    <>
      <ProjectHeader
        title="Racquet Panic"
        date="October 2016">
        <ProjectImage
          src="/racquet-panic-gameplay-1.gif"
          alt="A pixelated red train collects coins and dodges spears on cloudy hilltops."
          width={128}
          height={128}
          pixelated={true} />
      </ProjectHeader>
      <ProjectContent>
        <p>Tennis + breakout! You have a couple swings (lob, forehand, spike) and have to destroy all the bricks without letting the ball bounce twice in a row. Perfect hits give you extra super meter, and filling the meter grants you powerful buffs (e.g. multiball).</p>
      </ProjectContent>
    </>
  )
}
