import { useState } from "react";

import ExpandIcon from "./icons/ExpandIcon";
import Lightbox from "./Lightbox";
import { Image } from "../types";

type ImageCardProps = {
  imageData: Image;
};

const ImageCard = ({ imageData }: ImageCardProps) => {
  const [showLightbox, setShowLightbox] = useState(false);

  const toggleLightbox = () => {
    setShowLightbox(!showLightbox);
  };

  return (
    <>
      <div
        className="relative group max-h-96 rounded-md hover:cursor-pointer hover:animate-wiggle bg-white p-4"
        onClick={toggleLightbox}
      >
        <img
          src={imageData.download_url}
          alt=""
          width="400"
          className="h-[300px] w-full rounded-t-md group-hover:opacity-50"
        />
        <ExpandIcon extraClass="absolute hidden group-hover:block top-1/2 left-1/2" />
        <p className="font-indieFlower lg:text-[1.5vw] text-center py-2">
          {imageData.author}
        </p>
      </div>
      {showLightbox && (
        <Lightbox setShowLightbox={setShowLightbox} imageData={imageData} />
      )}
    </>
  );
};

export default ImageCard;
