"use client";
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
  react: <BiLogoReact className="h-9 w-9 text-neutral-50" key="react" />,
  nextjs: <RiNextjsFill className="h-9 w-9 text-neutral-50" key="nextjs" />,
  javascript: (
    <BiLogoJavascript className="h-9 w-9 text-neutral-50" key="javascript" />
  ),
  typescript: (
    <BiLogoTypescript className="h-9 w-9 text-neutral-50" key="typescript" />
  ),
  tailwindcss: (
    <BiLogoTailwindCss className="h-9 w-9 text-neutral-50" key="tailwindcss" />
  ),
  java: <BiLogoJava className="h-9 w-9 text-neutral-50" key="java" />,
  python: <FaPython className="h-9 w-9 text-neutral-50" key="python" />,
  php: <SiPhp className="h-9 w-9 text-neutral-50" key="php" />,
  laravel: <FaLaravel className="h-9 w-9 text-neutral-50" key="laravel" />,
  mysql: <GrMysql className="h-9 w-9 text-neutral-50" key="mysql" />,
  mongodb: <BiLogoMongodb className="h-9 w-9 text-neutral-50" key="mongodb" />,
  supabase: (
    <RiSupabaseFill className="h-9 w-9 text-neutral-50" key="supabase" />
  ),
};

import ExportedImage from "next-image-export-optimizer";
import { robotoCondensed, robotoSlab } from "../../app/layout";
import Button from "../../_components/Button";
import { ProjectProps } from "../../utils/helper";

export type Skill = keyof typeof iconMap;

function SelectedProjectCard({ project }: { project: ProjectProps }) {
  const isOdd: boolean = project.id % 2 === 0;

  return (
    <div className="z-10 h-96 w-full border border-neutral-700 bg-neutral-900">
      {!isOdd ? (
        <div className="grid h-full grid-cols-[5fr_4fr] gap-10 bg-neutral-800/20 px-8 pt-12">
          <div className="relative h-full w-full">
            <ExportedImage
              src={project.thumbnail}
              fill
              sizes="100vw"
              unoptimized={true}
              alt={project.summary}
              className="border-x border-t border-neutral-800 object-cover object-top opacity-90"
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
              <Button href={project.githubURL}>
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
              <Button href={project.githubURL}>
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
              unoptimized={true}
              alt={project.summary}
              className="border-x border-t border-neutral-800 object-cover object-top opacity-90"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default SelectedProjectCard;
