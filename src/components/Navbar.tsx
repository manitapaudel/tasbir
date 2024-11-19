import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { navLinks } from "./constants";
import HamburgerIcon from "./icons/HamburgerIcon";
import Drawer from "./Drawer";
import Button from "./Button";

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
        className={`sticky top-0 z-10 flex items-center justify-between font-montserrat bg-gray-beige-100 h-[10vh] min-h-[72px] 500:px-[5vw] transition-shadow duration-300 ${
          hasShadow ? "shadow-lg" : ""
        }`}
      >
        <Link to="/">
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
        <Button
          size="md"
          variant="primary"
          extraClass="hidden sm:block"
          onClick={() => {}}
        >
          Book Us
        </Button>

        <Button
          size="lg"
          variant="text"
          extraClass="block sm:hidden"
          title="Open drawer"
          onClick={toggleDrawer}
        >
          <HamburgerIcon extraClass="text-red-800" />
        </Button>
      </nav>
      <Drawer setDrawerOpen={setDrawerOpen} drawerOpen={drawerOpen} />
    </>
  );
};

export default Navbar;
