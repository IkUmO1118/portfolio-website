import { ResumeProps } from "@/src/utils/helper";

function ResumeContent({ resume }: { resume: ResumeProps }) {
  return (
    <div className="flex gap-6">
      <div className="relative flex flex-col">
        <div className="z-10 h-5 w-5 rounded-full border-2 border-white bg-neutral-900"></div>
        <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-white"></div>
      </div>
      <div className="flex flex-col gap-1">
        <h4 className="z-10 text-lg font-semibold text-neutral-200">
          {resume.title}
        </h4>
        <p className="z-10 text-xs font-medium text-neutral-500">
          {resume.duration}
        </p>
        <p className="z-10 mb-10 mt-5 text-base font-light text-neutral-100">
          {resume.description}
        </p>
      </div>
    </div>
  );
}

export default ResumeContent;
