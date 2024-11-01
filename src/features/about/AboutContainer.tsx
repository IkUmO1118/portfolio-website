import { GoPencil } from "react-icons/go";
import { FaLaptopCode } from "react-icons/fa6";
import { LuFileCode2 } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";

import { sourceSans } from "@/src/app/layout";
import AboutCard from "./AboutCard";

function AboutContainer() {
  return (
    <div className="w-full">
      <section className="mt-14 flex items-center justify-center">
        <h1
          className={`${sourceSans.className} z-10 bg-gradient-to-r from-neutral-50 via-neutral-50 to-neutral-500 bg-clip-text text-5xl font-bold leading-none text-transparent`}
        >
          About Site
        </h1>
      </section>
      <section className="mt-16 flex w-full justify-center gap-4">
        <AboutCard type="UI&ensp;&&ensp;UX" skills={["Figma", "Dribbble"]}>
          <GoPencil className="h-7 w-7 justify-self-center text-neutral-400" />
        </AboutCard>
        <AboutCard
          type="Frontend"
          skills={["Next.js", "Tailwind&ensp;CSS", "TypeScript"]}
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
    </div>
  );
}

export default AboutContainer;
