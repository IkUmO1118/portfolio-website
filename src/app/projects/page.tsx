import ProjectsContainer from "@/src/features/projects/ProjectsContainer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "19mod | projects",
};

function Page() {
  return <ProjectsContainer />;
}

export default Page;
