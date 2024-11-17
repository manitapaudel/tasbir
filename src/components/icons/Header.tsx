const Header = () => {
  return (
    <header className="text-center bg-gray-beige-100 py-8">
      <h1 className="uppercase font-semibold font-inconsolata text-6xl tracking-wider">
        Tasbir Studios.
      </h1>
      <div className="text-2xl font-medium font-montserrat mt-3">
        Our focus is locked on{" "}
        <div className="flex justify-center items-center text-6xl font-bold space-x-2 mt-2">
          <span className="animate-textFocus">Y</span>
          <span className="animate-textFocus">O</span>
          <span className="animate-textFocus">U</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
