import { ResumeProps } from "@/src/utils/helper";
import { useEffect, useState } from "react";
import ResumeContent from "./ResumeContent";

function ResumeContents() {
  const [resumes, setResumes] = useState<ResumeProps[]>([]);

  useEffect(() => {
    fetch("/resume.json")
      .then((response) => response.json())
      .then((data: ResumeProps[]) => setResumes(data));
  }, []);

  return (
    <section className="mb-36 mt-16 grid w-full grid-cols-[1fr_1fr] gap-14">
      <div className="flex flex-col gap-10">
        <h3 className="text-base font-bold text-neutral-400">Education</h3>
        <div className="flex flex-col">
          {resumes
            .filter((resume) => resume.type === "education")
            .map((resume) => (
              <ResumeContent resume={resume} key={resume.id} />
            ))}
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <h3 className="text-base font-bold text-neutral-400">Experiece</h3>
        <div className="flex flex-col">
          {resumes
            .filter((resume) => resume.type === "experiece")
            .map((resume) => (
              <ResumeContent resume={resume} key={resume.id} />
            ))}
        </div>
      </div>
    </section>
  );
}

export default ResumeContents;
