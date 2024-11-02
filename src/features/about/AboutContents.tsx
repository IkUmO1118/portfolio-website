import { GoPencil } from "react-icons/go";
import { FaLaptopCode } from "react-icons/fa6";
import { LuFileCode2 } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import AboutCard from "./AboutCard";

function AboutContents() {
  return (
    <section className="mt-16 flex w-full justify-center gap-4">
      <AboutCard type="UI&ensp;&&ensp;UX" skills={["Figma", "Dribbble"]}>
        <GoPencil className="h-7 w-7 justify-self-center text-neutral-400" />
      </AboutCard>
      <AboutCard
        type="Frontend"
        skills={["Next.js", "Tailwind CSS", "TypeScript"]}
      >
        <FaLaptopCode className="h-7 w-7 justify-self-center text-neutral-400" />
      </AboutCard>
      <AboutCard type="Code&ensp;Management" skills={["Git", "GitHub"]}>
        <LuFileCode2 className="h-7 w-7 justify-self-center text-neutral-400" />
      </AboutCard>
      <AboutCard type="Infrastructure" skills={["AWS", "NGINX"]}>
        <IoSettingsOutline className="h-7 w-7 justify-self-center text-neutral-400" />
      </AboutCard>
    </section>
  );
}

export default AboutContents;
