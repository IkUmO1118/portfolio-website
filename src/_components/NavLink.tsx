import { roboto } from "@/app/layout";
import Link from "next/link";

function NavLink() {
  return (
    <nav className={`${roboto.className} text-sm text-neutral-400`}>
      <ul className="flex gap-4">
        <li>
          <Link href="/">Home</Link>
        </li>
        &frasl;
        <li>
          <Link href="/resume">Resume</Link>
        </li>
        &frasl;
        <li>
          <Link href="/projects">Projects</Link>
        </li>
        &frasl;
        <li>
          <a
            href="https://github.com/IkUmO1118"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavLink;
