import type { Metadata } from "next";
import { Inter, Roboto_Condensed } from "next/font/google";
export const roboto = Roboto_Condensed({
  subsets: ["latin"],
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

import "./../_style/globals.css";
import Header from "@/_components/Header";
import Footer from "../_components/Footer";
import DotPattern from "@/components/ui/dot-pattern";

export const metadata: Metadata = {
  title: {
    template: "%s | 19mod",
    default: "19mod | Designer & Developer",
  },
  description:
    "This is the 19mod portfolio website, showcasing past projects, skills, and experience as a software engineer. A downloadable PDF version of the resume is also available.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} grid min-h-screen min-w-full grid-rows-[7rem_1fr_6rem] bg-neutral-900 px-36`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
        <DotPattern width={27} height={27} />
      </body>
    </html>
  );
}
