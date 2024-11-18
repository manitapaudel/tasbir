import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getLocalStorage, setLocalStorage } from "../utils";
import HeartIcon from "./icons/HeartIcon";
import Button from "./Button";
import { Image } from "../types";

const FavouriteToggle = ({ imageData }: { imageData: Image }) => {
  const [favourites, setFavourites] = useState<Image[]>([]);
  const [isFavourite, setIsFavourite] = useState(false);

  useEffect(() => {
    const storedFavourites = getLocalStorage("favourites", []);
    setFavourites(storedFavourites);

    const hasItem = storedFavourites.some(
      (item: Image) => item.id === imageData.id
    );
    setIsFavourite(hasItem);
  }, [imageData.id]);

  const addToFavourites = () => {
    setIsFavourite(true);
    setFavourites((prevFavourites) => {
      const updatedFavourites = [...prevFavourites, imageData];
      setLocalStorage("favourites", updatedFavourites);
      return updatedFavourites;
    });
  };

  const removeFromFavourites = () => {
    setIsFavourite(false);

    setFavourites((prevFavourites) => {
      const filteredData = prevFavourites.filter(
        (item) => item.id !== imageData.id
      );
      setLocalStorage("favourites", filteredData);
      return filteredData;
    });
  };

  return (
    <div className="flex 500:flex-col-reverse lg:flex-row items-end 500:items-start lg:items-end justify-between gap-2">
      {!isFavourite ? (
        <Button
          size="md"
          variant="primary"
          extraClass="flex items-center gap-2"
          onClick={addToFavourites}
        >
          <>
            <HeartIcon />
            <span className="hidden 500:block">Add to Favourites</span>
          </>
        </Button>
      ) : (
        <Button
          size="md"
          variant="secondary"
          extraClass="flex items-center gap-2"
          title="Remove from favourites"
          onClick={removeFromFavourites}
        >
          <>
            <HeartIcon />
            <span className="hidden 500:block">Remove from Favourites</span>
          </>
        </Button>
      )}
      <Link to="" className="font-medium hover:underline">
        Read more
      </Link>
    </div>
  );
};

export default FavouriteToggle;