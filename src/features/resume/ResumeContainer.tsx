"use client";
import { sourceSans } from "@/src/app/layout";
import ResumeContents from "./ResumeContents";

function ResumeContainer() {
  return (
    <div className="w-full">
      <section className="mt-14 flex items-center justify-center">
        <h1
          className={`${sourceSans.className} z-10 bg-gradient-to-r from-neutral-50 via-neutral-50 to-neutral-500 bg-clip-text text-5xl font-bold leading-none text-transparent`}
        >
          Resume
        </h1>
      </section>
      <ResumeContents />
    </div>
  );
}

export default ResumeContainer;
