import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  href: string;
}

function Button({ children, className, href }: ButtonProps) {
  return (
    <Link
      className={`${className} z-10 w-max border border-neutral-700/80 bg-neutral-900 decoration-neutral-500 hover:underline`}
      href={href}
      target="_blank"
    >
      <div className="flex items-center gap-3 bg-neutral-800/20 px-8 py-5">
        {children}
      </div>
    </Link>
  );
}

export default Button;
