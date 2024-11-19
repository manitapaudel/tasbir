import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import ExpandIcon from "./icons/ExpandIcon";
import Lightbox from "./Lightbox";
import { Image } from "../types";
import HeartIcon from "./icons/HeartIcon";
import { getLocalStorage } from "../utils";

type ImageCardProps = {
  imageData: Image;
};

const ImageCard = ({ imageData }: ImageCardProps) => {
  const [showLightbox, setShowLightbox] = useState(false);
  const favourites = getLocalStorage("favourites", []);
  const isFavourite = favourites.some(
    (item: Image) => item.id === imageData.id
  );

  const toggleLightbox = () => {
    setShowLightbox(!showLightbox);
  };

  return (
    <>
      <div
        className="group max-h-96 rounded-md hover:cursor-pointer hover:animate-wiggle bg-white p-4"
        onClick={toggleLightbox}
      >
        <div className="relative" title="Click to open lightbox">
          <LazyLoadImage
            src={imageData.download_url}
            alt=""
            width="400"
            className="h-[300px] w-full rounded-t-md group-hover:opacity-50"
          />
          <ExpandIcon extraClass="absolute hidden group-hover:block top-1/2 left-1/2" />
          {isFavourite && (
            <HeartIcon extraClass="absolute top-2 right-2 text-red-800" />
          )}
        </div>

        <p className="font-indieFlower text-xl lg:text-2xl text-center py-2">
          {imageData.author}
        </p>
      </div>
      {showLightbox && (
        <Lightbox
          showLightbox={showLightbox}
          setShowLightbox={setShowLightbox}
          imageData={imageData}
        />
      )}
    </>
  );
};

export default ImageCard;
