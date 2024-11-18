import Button from "./Button";
import SearchIcon from "./icons/SearchIcon";

const Hero = () => {
  return (
    <section className="text-center bg-gray-beige-100 py-8">
      <h1 className="uppercase font-semibold font-inconsolata text-4xl 500:text-5xl sm:text-6xl tracking-wider">
        Tasbir Studios.
      </h1>
      <div className="text-xl sm:text-2xl font-medium font-montserrat mt-3">
        Our focus is locked on{" "}
        <div className="flex justify-center items-center text-4xl sm:text-6xl font-bold space-x-2 mt-2">
          <span className="animate-textFocus">Y</span>
          <span className="animate-textFocus">O</span>
          <span className="animate-textFocus">U</span>
        </div>
      </div>
      <form action="" className="flex items-center justify-center mt-5">
        <input
          type="text"
          placeholder="Search your favourite artists..."
          className="500:min-w-72 h-11 px-3 rounded-l-md"
        />
        <Button
          size="md"
          variant="primary"
          title="Search Artists"
          extraClass="rounded-l-none rounded-r-lg min-h-11"
          onClick={() => {}}
        >
          <SearchIcon />
        </Button>
      </form>
    </section>
  );
};

export default Hero;
