import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { navLinks } from "./constants";
import HamburgerIcon from "./icons/HamburgerIcon";
import Drawer from "./Drawer";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasShadow(true);
      } else {
        setHasShadow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <nav
        className={`sticky top-0 z-10 flex items-center justify-between font-montserrat bg-gray-beige-100 h-[10vh] min-h-[72px] px-[5vw] transition-shadow duration-300 ${
          hasShadow ? "shadow-lg" : ""
        }`}
      >
        <Link to="/" className="font-medium text-2xl">
          <img
            src="/tasbir-logo.png"
            width={200}
            alt="Tasbir logo with r as a feather"
            className="max-h-[72px]"
          />
        </Link>
        <div className="hidden sm:flex gap-10 md:gap-20">
          {navLinks.map(({ href, title }) => (
            <Link
              key={title}
              to={href}
              className="font-medium hover:text-red-800"
              onClick={() => setDrawerOpen(false)}
            >
              {title}
            </Link>
          ))}
        </div>
        <button className="hidden sm:block bg-red-800 hover:bg-red-700 text-white px-4 py-2 rounded">
          Book Us
        </button>

        <button
          className="block sm:hidden text-red-800 hover:text-red-700 hover:cursor-pointer"
          title="Open drawer"
          onClick={toggleDrawer}
        >
          <HamburgerIcon />
        </button>
      </nav>
      <Drawer setDrawerOpen={setDrawerOpen} drawerOpen={drawerOpen} />
    </>
  );
};

export default Navbar;
