import ProjectContent from "@/app/components/ProjectContent"
import ProjectHeader from "@/app/components/ProjectHeader"
import ProjectImage from "@/app/components/ProjectImage"

export default function Page() {
  return (
    <>
      <ProjectHeader
        title="Recommendation Dog!!"
        releaseDate="January 15, 2023"
        links={[
          "https://play.date/games/recommendation-dog/",
        ]}>
        <ProjectImage
          src="/recommendation-dog-title-art.webp"
          alt="TODO"
          width={400}
          height={240}
          pixelated={true}
          unoptimized={true}
        />
      </ProjectHeader>
      <ProjectContent>
        <p>A puzzle game where you are a dog with a rolodex in charge of recommending people for absurd jobs. Good boy!</p>
        <ProjectImage
          src="/recommendation-dog-screenshot-1.webp"
          alt="TODO"
          width={400}
          height={240}
          pixelated={true}
          unoptimized={true}
        />
        <ProjectImage
          src="/recommendation-dog-gameplay-1.gif"
          alt="TODO"
          width={280}
          height={280}
          pixelated={true}
        />
      </ProjectContent>
    </>
  )
}
