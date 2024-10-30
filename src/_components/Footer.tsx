import NavLink from "./NavLink";

function Footer() {
  return (
    <footer className="flex items-center justify-between border-t border-neutral-800">
      <div className="flex items-center">
        <p className="text-xs font-semibold text-neutral-400">
          &copy; 2024 All rights reserved.
        </p>
      </div>
      <NavLink />
    </footer>
  );
}

export default Footer;
