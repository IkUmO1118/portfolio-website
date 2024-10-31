import {
  BiLogoJava,
  BiLogoJavascript,
  BiLogoMongodb,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from "react-icons/bi";
import { RiNextjsFill, RiSupabaseFill } from "react-icons/ri";
import { FaLaravel, FaPython } from "react-icons/fa";
import { SiPhp } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
const iconMap = {
  react: <BiLogoReact className="h-9 w-9 text-neutral-50" />,
  nextjs: <RiNextjsFill className="h-9 w-9 text-neutral-50" />,
  javascript: <BiLogoJavascript className="h-9 w-9 text-neutral-50" />,
  typescript: <BiLogoTypescript className="h-9 w-9 text-neutral-50" />,
  tailwindcss: <BiLogoTailwindCss className="h-9 w-9 text-neutral-50" />,
  java: <BiLogoJava className="h-9 w-9 text-neutral-50" />,
  python: <FaPython className="h-9 w-9 text-neutral-50" />,
  php: <SiPhp className="h-9 w-9 text-neutral-50" />,
  laravel: <FaLaravel className="h-9 w-9 text-neutral-50" />,
  mysql: <GrMysql className="h-9 w-9 text-neutral-50" />,
  mongodb: <BiLogoMongodb className="h-9 w-9 text-neutral-50" />,
  supabase: <RiSupabaseFill className="h-9 w-9 text-neutral-50" />,
};

import ExportedImage from "next-image-export-optimizer";
import { robotoCondensed, robotoSlab } from "../app/layout";
import Button from "./Button";
import { ProjectProps } from "../utils/helper";

type Skill = keyof typeof iconMap;

function SelectedProjectCard({ project }: ProjectProps) {
  return (
    <div className="z-10 h-96 w-full border border-neutral-700 bg-neutral-900">
      {project.id % 2 !== 0 ? (
        <div className="grid h-full grid-cols-[5fr_4fr] gap-10 bg-neutral-800/20 px-8 pt-12">
          <div className="relative h-full w-full">
            <ExportedImage
              src={project.thumbnail}
              fill
              alt={project.summary}
              className="border-x border-t border-neutral-800 object-cover object-top opacity-80"
            />
          </div>
          <div className="flex flex-col justify-between pb-6 pr-8">
            <div className="flex flex-col gap-1">
              <h3
                className={`${robotoSlab.className} text-3xl font-bold text-neutral-100`}
              >
                {project.title}
              </h3>
              <div className="flex gap-3">
                {project.skillStack.map((skill) => iconMap[skill as Skill])}
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-sm text-neutral-400">{project.summary}</p>
              <Button>
                <p
                  className={`${robotoCondensed.className} text-sm text-neutral-400`}
                >
                  View more
                </p>
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid h-full grid-cols-[4fr_5fr] gap-10 bg-neutral-800/20 px-8 pt-12">
          <div className="flex flex-col justify-between pb-6 pl-4">
            <div className="flex flex-col gap-1">
              <h3
                className={`${robotoSlab.className} text-3xl font-bold text-neutral-100`}
              >
                {project.title}
              </h3>
              <div className="flex gap-3">
                {project.skillStack.map((skill) => iconMap[skill as Skill])}
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-sm text-neutral-400">{project.summary}</p>
              <Button>
                <p
                  className={`${robotoCondensed.className} text-sm text-neutral-400`}
                >
                  View more
                </p>
              </Button>
            </div>
          </div>
          <div className="relative h-full w-full">
            <ExportedImage
              src={project.thumbnail}
              fill
              alt={project.summary}
              className="border-x border-t border-neutral-800 object-cover object-top opacity-80"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default SelectedProjectCard;
