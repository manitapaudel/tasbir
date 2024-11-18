import { useRef } from "react";
import { Link } from "react-router-dom";

import useOutsideClickHandler from "../hooks/useOutsideClickHandler";
import CloseIcon from "./icons/CloseIcon";
import { navLinks } from "./constants";
import Button from "./Button";

type DrawerProps = {
  drawerOpen: boolean;
  setDrawerOpen: (drawerOpen: boolean) => void;
};

const Drawer = ({ drawerOpen, setDrawerOpen }: DrawerProps) => {
  const drawerRef = useRef<HTMLDivElement>(null);

  useOutsideClickHandler(drawerRef, () => {
    setDrawerOpen(false);
  });

  return (
    <div
      className={`fixed 850:hidden top-0 bottom-0 z-10 bg-red-800 text-white font-montserrat w-[100vw] 500:w-[60vw] sm:w-[50vw] h-full ease-in-out duration-300
 ${drawerOpen ? "translate-x-0 " : "-translate-x-full"}`}
      ref={drawerRef}
    >
      <button
        className="absolute right-5 top-5 border-2 p-2 rounded-full"
        onClick={() => setDrawerOpen(false)}
      >
        <CloseIcon />
      </button>

      <Link
        to="/"
        className="font-medium text-2xl"
        onClick={() => setDrawerOpen(false)}
      >
        <img
          src="/logo-sm.png"
          width={200}
          alt="Tasbir logo with r as a feather"
          className="max-h-[72px]"
        />
      </Link>

      <div className="flex flex-col gap-10 px-5 py-20">
        {navLinks.map(({ href, title }) => (
          <Link
            key={title}
            to={href}
            className="font-medium text-white hover:text-gray-beige-200"
          >
            {title}
          </Link>
        ))}
        <Button size="md" variant="secondary" onClick={() => {}}>
          Book Us
        </Button>
      </div>
    </div>
  );
};

export default Drawer;
