import { useEffect } from "react";
import { Link } from "react-router-dom";

import CloseIcon from "./icons/CloseIcon";
import { Image } from "../types";

type LightboxProps = {
  showLightbox: boolean;
  setShowLightbox: (showLightbox: boolean) => void;
  imageData: Image;
};

const Lightbox = ({
  showLightbox,
  setShowLightbox,
  imageData,
}: LightboxProps) => {
  // To prevent background scrolling when the modal is open
  useEffect(() => {
    if (showLightbox) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [showLightbox]);

  const handleClose = () => {
    setShowLightbox(false);
  };

  return (
    <div className="fixed top-0 left-0 z-10 bg-red-800 w-screen min-h-screen">
      <button
        className="absolute right-12 top-6 text-gray-beige-200 hover:text-white p-2 border-2 border-gray-beige-200 hover:border-white rounded-full"
        onClick={handleClose}
        title="Close Modal"
      >
        <CloseIcon extraClass="" />
      </button>
      <div className="flex items-center justify-center gap-32 bg-gray-beige-200 w-4/5 h-[80vh] rounded-lg p-2 mx-auto mt-24">
        <div className="bg-white p-2">
          <img
            src={imageData.download_url}
            width={imageData.width}
            alt=""
            className="w-60 h-72 object-fill"
          />
          <p></p>
        </div>
        <div className="w-1/3">
          <h1 className="uppercase font-semibold font-inconsolata text-3xl">
            {imageData.author}
          </h1>
          <p className="my-6 font-montserrat font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem aut,
            hic nam beatae vero voluptas quaerat dolorem accusamus quam velit?
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis, molestias!
          </p>
          <div className="flex justify-between items-end">
            {/* TODO: create a primary button */}
            <button className="bg-red-800 hover:bg-red-700 text-white px-4 py-2 rounded">
              Add to Favourites
            </button>
            <Link to="" className="font-medium hover:underline">
              Read more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lightbox;
