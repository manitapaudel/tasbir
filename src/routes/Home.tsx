import { useEffect, useState } from "react";

import ImageCard from "../components/ImageCard";
import Button from "../components/Button";
import ChevronLeft from "../components/icons/ChevronLeft";
import ChevronRight from "../components/icons/ChevronRight";
import ImageCardSkeletonGrid from "../components/ImageCardSkeletonGrid";
import { Image } from "../types";

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
    <main className="bg-gallery-bg min-h-[85vh] px-5 py-10 500:px-10 md:px-20">
      <h1 className="uppercase font-semibold font-inconsolata text-3xl text-center py-5">
        Gallery
      </h1>
      <section className="grid 500:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 place-content-center">
        {loading ? (
          <ImageCardSkeletonGrid />
        ) : (
          images.map((image) => <ImageCard key={image.id} imageData={image} />)
        )}
      </section>
      <section className="flex justify-center gap-10 py-10">
        <Button
          disabled={currentPage === 1}
          label="Prev"
          Icon={<ChevronLeft />}
          iconPosition="start"
          onClick={handlePrevPage}
        />
        <Button
          disabled={currentPage === 10}
          label="Next"
          Icon={<ChevronRight />}
          iconPosition="end"
          onClick={handleNextPage}
        />
      </section>
    </main>
  );
};

export default Home;
