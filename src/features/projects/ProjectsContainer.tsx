"use client";
import { robotoSlab, sourceSans } from "@/src/app/layout";
import { ProjectProps } from "@/src/utils/helper";
import ExportedImage from "next-image-export-optimizer";
import { useEffect, useState } from "react";
import {
  BiLogoJava,
  BiLogoJavascript,
  BiLogoMongodb,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from "react-icons/bi";
import { FaLaravel, FaPython } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { RiNextjsFill, RiSupabaseFill } from "react-icons/ri";
import { SiPhp } from "react-icons/si";
import { Skill } from "../home/SelectedProjectCard";

const iconMap = {
  react: <BiLogoReact className="h-8 w-8 text-neutral-50" key="react" />,
  nextjs: <RiNextjsFill className="h-8 w-8 text-neutral-50" key="nextjs" />,
  javascript: (
    <BiLogoJavascript className="h-8 w-8 text-neutral-50" key="javascript" />
  ),
  typescript: (
    <BiLogoTypescript className="h-8 w-8 text-neutral-50" key="typescript" />
  ),
  tailwindcss: (
    <BiLogoTailwindCss className="h-8 w-8 text-neutral-50" key="tailwindcss" />
  ),
  java: <BiLogoJava className="h-8 w-8 text-neutral-50" key="java" />,
  python: <FaPython className="h-8 w-8 text-neutral-50" key="python" />,
  php: <SiPhp className="h-8 w-8 text-neutral-50" key="php" />,
  laravel: <FaLaravel className="h-8 w-8 text-neutral-50" key="laravel" />,
  mysql: <GrMysql className="h-8 w-8 text-neutral-50" key="mysql" />,
  mongodb: <BiLogoMongodb className="h-8 w-8 text-neutral-50" key="mongodb" />,
  supabase: (
    <RiSupabaseFill className="h-8 w-8 text-neutral-50" key="supabase" />
  ),
};

function ProjectsContainer() {
  const [projects, setProjects] = useState<ProjectProps[]>([]);

  useEffect(() => {
    fetch("/portfolio.json")
      .then((response) => response.json())
      .then((data: ProjectProps[]) => setProjects(data));
  }, []);

  return (
    <div className="h-full w-full">
      <section className="mt-14 flex items-center justify-center">
        <h1
          className={`${sourceSans.className} z-10 bg-gradient-to-r from-neutral-50 via-neutral-50 to-neutral-500 bg-clip-text text-5xl font-bold leading-none text-transparent`}
        >
          Projects
        </h1>
      </section>
      <section className="mb-36 mt-16 grid grid-cols-[1fr_1fr] gap-11 px-7">
        {projects.map((project) => (
          <div
            className="z-10 h-72 border-2 border-neutral-500 bg-white"
            key={project.id}
          >
            <div className="relative h-full w-full overflow-hidden">
              <ExportedImage
                src={project.thumbnail}
                fill
                sizes="100vw"
                unoptimized={true}
                alt={project.summary}
                className="object-cover object-top opacity-95 transition-all duration-150"
              />
              <a
                className="absolute left-0 top-0 z-10 flex h-full w-full cursor-pointer flex-col justify-between px-3 pb-5 pt-2 text-neutral-100 opacity-0 transition-all duration-300 hover:bg-neutral-900/60 hover:opacity-100"
                href={project.githubURL}
                target="_blank"
              >
                <div className="flex flex-col gap-1">
                  <h3 className={`${robotoSlab.className} text-2xl font-bold`}>
                    {project.title}
                  </h3>
                  <div className="flex gap-3">
                    {project.skillStack.map((skill) => iconMap[skill as Skill])}
                  </div>
                </div>
                <p className="text-sm">{project.summary}</p>
              </a>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default ProjectsContainer;
