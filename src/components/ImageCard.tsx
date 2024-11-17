type ImageCardProps = {
  url: string;
  author: string;
};

const ImageCard = ({ url, author }: ImageCardProps) => {
  return (
    <div className="max-h-96 rounded-md hover:cursor-pointer hover:animate-wiggle bg-white p-4">
      <img
        src={url}
        alt=""
        width="400"
        className="h-[300px] w-full rounded-t-md"
      />
      <p className="font-indieFlower lg:text-[1.5vw] text-center py-2">
        {author}
      </p>
    </div>
  );
};

export default ImageCard;
