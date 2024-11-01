import { sourceSans } from "@/src/app/layout";

function ProjectsContainer() {
  return (
    <div className="h-full w-full">
      <section className="mt-14 flex items-center justify-center">
        <h1
          className={`${sourceSans.className} z-10 bg-gradient-to-r from-neutral-50 via-neutral-50 to-neutral-500 bg-clip-text text-5xl font-bold leading-none text-transparent`}
        >
          Projects
        </h1>
      </section>
      <section className="mt-16 flex gap-14"></section>
    </div>
  );
}

export default ProjectsContainer;
