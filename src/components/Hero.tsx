import { ChangeEvent, FormEvent, useEffect, useState } from "react";

import { Image } from "../types";
import Button from "./Button";
import SearchIcon from "./icons/SearchIcon";

type HeroProps = {
  data: Image[];
  setResults: (results: Image[]) => void;
};

const Hero = ({ data, setResults }: HeroProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchCount, setSearchCount] = useState(0);

  // useEffect(() => {
  //   if (searchTerm === "") {
  //     setResults(data);
  //   }
  // }, [searchTerm]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const filteredData = data.filter((item) =>
      item.author.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setResults(filteredData);
    setSearchCount(filteredData.length);
  };
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) =>
    setSearchTerm(e.target.value);

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
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-center mt-5"
      >
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Search your favourite artists..."
          className="500:min-w-72 h-11 px-3 rounded-l-md"
          required
        />
        <Button
          size="md"
          variant="primary"
          title="Search Artists"
          type="submit"
          extraClass="rounded-l-none rounded-r-lg min-h-11"
          onClick={() => {}}
        >
          <SearchIcon />
        </Button>
      </form>
      <p className={"font-medium font-montserrat mt-2"}>
        {searchCount > 0 && (
          <>
            Showing <span className="text-red-800 text-lg">{searchCount}</span>{" "}
            search result{searchCount > 1 && "s"}.
          </>
        )}
      </p>
    </section>
  );
};

export default Hero;
