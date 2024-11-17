import { useEffect } from "react";
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
    <div className="fixed top-0 left-0 z-10 bg-red-100 bg-opacity-50 w-screen min-h-screen">
      <button className="" onClick={handleClose} title="Close Modal">
        <CloseIcon extraClass="absolute right-12 top-6" />
      </button>
      <div className="bg-white w-2/3 rounded-lg p-3 mx-auto mt-1">
        <img
          src={imageData.download_url}
          width={imageData.width}
          alt=""
          className="w-full h-auto max-h-[80vh] "
        />
      </div>
    </div>
  );
};

export default Lightbox;
