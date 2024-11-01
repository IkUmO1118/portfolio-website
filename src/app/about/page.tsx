import AboutContainer from "@/src/features/about/AboutContainer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "19mod | About site",
};

function Page() {
  return <AboutContainer />;
}

export default Page;
