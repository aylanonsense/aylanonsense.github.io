import ProjectContent from "@/app/components/ProjectContent";
import ProjectHeader from "@/app/components/ProjectHeader";
import ProjectImage from "@/app/components/ProjectImage";

export default function Page() {
  return (
    <>
      <ProjectHeader
        title="Staring"
        date="August 2019">
        <ProjectImage
          src="/staring-gameplay-1.gif"
          alt={"The title screen for \"Staring\"."}
          width={300}
          height={195}
          pixelated={true} />
      </ProjectHeader>
      <ProjectContent>
        <ProjectImage
          src="/staring-clip.gif"
          alt="A purple and green blob dodge laser-like stares from goopy onlookers."
          width={190}
          height={190}
          pixelated={true} />
        <ProjectImage
          src="/staring-gameplay-2.gif"
          alt={"A purple blob fails to dodge laser-like stares from goopy onlookers and text appears on-screen, \"Some days are harder than others\"."}
          width={600}
          height={390}
          pixelated={true} />
        {/* <ProjectImage
          src="/staring-photo.jpg"
          alt="An event booth decorated with hand-drawn eyeballs."
          width={3000}
          height={2250} /> */}
      </ProjectContent>
    </>
  );
}
