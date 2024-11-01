import {
  Inter,
  Roboto_Condensed,
  Roboto_Slab,
  Source_Sans_3,
} from "next/font/google";
export const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  display: "swap",
});
export const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  display: "swap",
});
export const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

import "./../style/globals.css";
import Header from "../_components/Header";
import Footer from "../_components/Footer";
import DotPattern from "../_components/ui/dot-pattern";

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>19mod | Designer & Developer</title>
        <meta
          name="description"
          content="This is the 19mod portfolio website, showcasing past projects, skills, and experience as a software engineer. A downloadable PDF version of the resume is also available."
        />
      </head>
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

export default RootLayout;
