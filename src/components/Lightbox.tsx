import { Image } from "../types";
import CloseIcon from "./icons/CloseIcon";

type LightboxProps = {
  setShowLightbox: (showLightbox: boolean) => void;
  imageData: Image;
};

const Lightbox = ({ setShowLightbox, imageData }: LightboxProps) => {
  const handleClose = () => {
    setShowLightbox(false);
  };

  return (
    <div className="fixed top-0 left-0 z-10 bg-red-100 bg-opacity-50 w-screen h-screen">
      <button className="" onClick={handleClose}>
        <CloseIcon extraClass="absolute right-12 top-6" />
      </button>
      <div className="bg-white w-2/3 rounded-lg py-5 px-10 mx-auto mt-5">
        <img
          src={imageData.download_url}
          width={imageData.width}
          height={imageData.height}
          alt=""
        />
      </div>
      <div></div>
    </div>
  );
};

export default Lightbox;
