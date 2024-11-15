import { useEffect, useState } from "react";
import ImageCard from "../components/ImageCard";

type Image = {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
};

const Home = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://picsum.photos/v2/list?page=${page}&limit=10`
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
  }, [page]);

  console.log(images);

  if (loading) {
    return <div>Loading ...</div>;
  }

  return (
    <main className="bg-gallery-bg min-h-[85vh] py-10 px-20">
      <section className="grid grid-cols-4 gap-4">
        {images.map((image) => (
          <ImageCard
            key={image.id}
            url={image.download_url}
            author={image.author}
          />
        ))}
      </section>
    </main>
  );
};

export default Home;
