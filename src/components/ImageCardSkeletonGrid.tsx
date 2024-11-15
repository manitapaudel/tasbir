import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ImageCardSkeleton = () => {
  return (
    <>
      {Array.from({ length: 12 }).map((_, index) => (
        <div className="flex flex-col gap-3" key={index}>
          <Skeleton height={300} className=" h-auto" />
          <Skeleton height={30} />
        </div>
      ))}
    </>
  );
};

export default ImageCardSkeleton;
