import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ImageCardSkeleton = () => {
  return (
    <>
      {Array.from({ length: 12 }).map((_, index) => (
        <div className="flex flex-col gap-3" key={index}>
          <Skeleton height={330} />
        </div>
      ))}
    </>
  );
};

export default ImageCardSkeleton;
