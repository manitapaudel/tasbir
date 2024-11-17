import { Link } from "react-router-dom";
import HamburgerIcon from "./icons/HamburgerIcon";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-10 flex items-center justify-between font-montserrat bg-gray-beige-100 h-[10vh] px-[5vw]">
      <Link to="/" className="font-medium text-2xl">
        Tasbir.
      </Link>
      <div className="hidden sm:flex gap-20">
        <Link to="/" className="font-medium hover:text-red-800">
          Our Portfolio
        </Link>
        <Link to="/" className="font-medium hover:text-red-800">
          Events
        </Link>
      </div>
      <button className="hidden sm:block bg-red-800 hover:bg-red-700 text-white px-4 py-2 rounded">
        Book Us
      </button>

      <button
        className="block sm:hidden text-red-800 hover:text-red-700 hover:cursor-pointer"
        title="Open drawer"
      >
        <HamburgerIcon />
      </button>
    </nav>
  );
};

export default Navbar;
