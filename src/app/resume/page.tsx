import ResumeContainer from "@/src/features/resume/ResumeContainer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "19mod | Resume",
};

function page() {
  return <ResumeContainer />;
}

export default page;
