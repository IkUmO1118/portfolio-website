import { robotoCondensed } from "../app/layout";
import NavLink from "./NavLink";
import Link from "next/link";

function Header() {
  return (
    <header className="flex items-center justify-between border-b border-neutral-800">
      <div className="flex items-center gap-4">
        <Link href="about-site" className="z-10 text-xs text-neutral-400">
          Ikumo Takahashi
        </Link>
        <button
          className={`${robotoCondensed.className} z-10 flex h-12 w-24 items-center justify-center rounded-full bg-neutral-800 text-xs text-neutral-100 hover:underline`}
        >
          CV
        </button>
      </div>
      <NavLink />
    </header>
  );
}

export default Header;
