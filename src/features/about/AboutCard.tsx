import { robotoCondensed } from "@/src/app/layout";
import { ReactNode } from "react";
type AboutCardProps = {
  type: string;
  skills: string[];
  children: ReactNode;
};

function AboutCard({ type, skills, children }: AboutCardProps) {
  return (
    <div className="z-10 h-80 w-64 border border-neutral-800 bg-neutral-900">
      <div className="flex h-full w-full flex-col gap-4 bg-neutral-800/20 p-8 pt-36">
        {children}
        <h3 className={`${robotoCondensed.className} text-lg text-neutral-400`}>
          {type}
        </h3>
        <ul className={`text-sm text-neutral-400 ${robotoCondensed.className}`}>
          {skills.map((skill) => (
            <li key={skill}>&bull;&ensp;{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AboutCard;
