import { LiaDownloadSolid } from "react-icons/lia";
import { robotoCondensed, sourceSans } from "./layout";
import Button from "../_components/Button";
import SelectedProjectCard from "../_components/SelectedProjectCard";
import ExportedImage from "next-image-export-optimizer";
import mainImg from "@/public/img/favicon.png";
import data from "@/public/portfolio.json";

function Page() {
  return (
    <div className="h-full w-full">
      <section className="mt-16 flex flex-col items-center gap-3">
        <ExportedImage
          src={mainImg}
          alt="main image"
          className="z-10 h-28 w-28 rounded-full"
        />
        <h1
          className={`${sourceSans.className} z-10 bg-gradient-to-r from-neutral-50 via-neutral-50 to-neutral-500 bg-clip-text text-center text-5xl font-bold leading-none text-transparent`}
        >
          I&#44;m&#160;!&#40;webflow&#41;&#160;developer;
          <br />
          Crafting&#160;&#123;designs&#125;&#160;&&&#160;&#123;experiences&#125;
          <br />
          with&#160;&#123;programming&#125;
        </h1>
        <Button className="mt-14">
          <p
            className={`${robotoCondensed.className} text-sm text-neutral-400`}
          >
            Download CV
          </p>
          <LiaDownloadSolid className="h-5 text-neutral-400" />
        </Button>
      </section>
      <section className="mb-28 mt-32 flex flex-col items-center gap-14">
        <h2 className="z-10 bg-gradient-to-r from-neutral-50 via-neutral-50 to-neutral-500 bg-clip-text text-4xl font-bold leading-none text-transparent">
          Selected Projects
        </h2>
        <div className="flex w-full flex-col gap-8">
          {data
            .filter((project) => project.selected)
            .map((project) => (
              <SelectedProjectCard project={project} key={project.id} />
            ))}
        </div>
      </section>
    </div>
  );
}

export default Page;
