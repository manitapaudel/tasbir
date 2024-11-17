import { useRef } from "react";

import useOutsideClickHandler from "../hooks/useOutsideClickHandler";
import CloseIcon from "./icons/CloseIcon";
import { Link } from "react-router-dom";

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
      className={`fixed 850:hidden top-0 bottom-0 z-10 bg-red-800 text-white font-montserrat py-10 w-[100vw] 500:w-[60vw] sm:w-[50vw] h-full ease-in-out duration-300
 ${drawerOpen ? "translate-x-0 " : "-translate-x-full"}`}
      ref={drawerRef}
    >
      <button
        className="absolute right-5 top-5 border-2 p-2 rounded-full"
        onClick={() => setDrawerOpen(false)}
      >
        <CloseIcon />
      </button>

      <div>
        <Link to="/" className="font-medium text-2xl">
          <img
            src="/logo-sm.png"
            width={200}
            alt="Tasbir logo with r as a feather"
            className="max-h-[72px]"
          />
        </Link>

        <div className="flex flex-col gap-10 px-5 py-10">
          <Link
            to="/"
            className="font-medium text-white hover:text-gray-beige-200"
          >
            Our Portfolio
          </Link>
          <Link to="/" className="font-medium hover:text-gray-beige-200">
            Events
          </Link>
          <button className="bg-white text-red-800 hover:bg-gray-beige-200 px-4 py-2 rounded">
            Book Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
