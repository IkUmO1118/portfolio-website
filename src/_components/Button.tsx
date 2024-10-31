import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
}

function Button({ children, className }: ButtonProps) {
  return (
    <button
      className={`${className} z-10 w-max border border-neutral-700 bg-neutral-900`}
    >
      <div className="flex items-center gap-3 bg-neutral-800/20 px-8 py-5">
        {children}
      </div>
    </button>
  );
}

export default Button;
