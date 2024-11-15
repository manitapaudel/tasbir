import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center font-montserrat bg-gallery-light h-[10vh] px-[5vw]">
      <Link to="/" className="font-medium text-2xl">
        Tasbir.
      </Link>
    </nav>
  );
};

export default Navbar;
