import { useEffect, useState } from "react";

const Home = () => {
  const [images, setImages] = useState([]);
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
  return <div className="bg-gallery-bg h-auto py-10 px-20">Home Alone!</div>;
};

export default Home;
