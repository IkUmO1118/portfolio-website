import SelectedProjects from "@/src/features/home/SelectedProjects";
import HomeTopSection from "./HomeTopSection";

function HomeContainer() {
  return (
    <div className="h-full w-full">
      <HomeTopSection />
      <section className="mb-28 mt-32 flex flex-col items-center gap-14">
        <h2 className="z-10 bg-gradient-to-r from-neutral-50 via-neutral-50 to-neutral-500 bg-clip-text text-4xl font-bold leading-none text-transparent">
          Selected Projects
        </h2>
        <div className="flex w-full flex-col gap-8">
          <SelectedProjects />
        </div>
      </section>
    </div>
  );
}

export default HomeContainer;
