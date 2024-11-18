import { useEffect, useState } from "react";

import ImageCard from "../components/ImageCard";
import Button from "../components/Button";
import ChevronLeft from "../components/icons/ChevronLeft";
import ChevronRight from "../components/icons/ChevronRight";
import ImageCardSkeletonGrid from "../components/ImageCardSkeletonGrid";
import { Image } from "../types";
import Hero from "../components/Hero";

const Home = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://picsum.photos/v2/list?page=${currentPage}&limit=16`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch images.");
        }

        const data = await response.json();
        setImages(data);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [currentPage]);

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <main className="bg-gray-beige-100 min-h-[85vh] px-5 py-10 500:px-10 md:px-20">
      <Hero />
      <section className="grid grid-cols-1 500:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 place-content-center">
        {loading ? (
          <ImageCardSkeletonGrid />
        ) : (
          images.map((image) => <ImageCard key={image.id} imageData={image} />)
        )}
      </section>
      <section className="flex justify-center gap-10 py-10">
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
