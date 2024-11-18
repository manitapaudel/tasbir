import { useState } from "react";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

import ImageCard from "../components/ImageCard";
import Button from "../components/Button";
import ChevronLeft from "../components/icons/ChevronLeft";
import ChevronRight from "../components/icons/ChevronRight";
import ImageCardSkeletonGrid from "../components/ImageCardSkeletonGrid";
import { Image } from "../types";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { isPending, data } = useQuery({
    queryKey: ["images", currentPage],
    queryFn: () =>
      fetch(`https://picsum.photos/v2/list?page=${currentPage}&limit=100`).then(
        (res) => res.json()
      ),
    placeholderData: (prevData) => prevData,
  });

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  return (
    <main className="bg-gray-beige-100 min-h-[85vh] px-5 py-10 500:px-10 md:px-20">
      <section className="grid grid-cols-1 500:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 place-content-center">
        {isPending ? (
          <ImageCardSkeletonGrid />
        ) : (
          data.map((image: Image) => (
            <ImageCard key={image.id} imageData={image} />
          ))
        )}
      </section>
      <section className="flex justify-center items-center gap-10 py-10">
        <Button
          disabled={currentPage === 1}
          size="md"
          variant="text"
          onClick={handlePrevPage}
        >
          <>
            <ChevronLeft /> <span className="font-medium mb-0.5">Prev</span>
          </>
        </Button>
        <p className="text-sm font-semibold font-montserrat">
          Page: {currentPage}
        </p>
        <Button
          disabled={currentPage === 10}
          size="md"
          variant="text"
          onClick={handleNextPage}
        >
          <>
            <span className="font-medium mb-0.5">Next</span>
            <ChevronRight />
          </>
        </Button>
      </section>
    </main>
  );
};

export default Home;
