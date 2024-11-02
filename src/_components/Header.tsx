import { robotoCondensed } from "../app/layout";
import NavLink from "./NavLink";
import Link from "next/link";

function Header() {
  return (
    <header className="flex items-center justify-between border-b border-neutral-800">
      <div className="flex items-center gap-4">
        <Link href="/about" className="z-10 text-xs text-neutral-400">
          Ikumo Takahashi
        </Link>
        <a
          className={`${robotoCondensed.className} z-10 flex h-12 w-24 cursor-pointer items-center justify-center rounded-full bg-neutral-800 text-xs text-neutral-100 hover:underline`}
          href="/files/test-resume.pdf"
          target="_blank"
        >
          CV
        </a>
      </div>
      <NavLink />
    </header>
  );
}

export default Header;
