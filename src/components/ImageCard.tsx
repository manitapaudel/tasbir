type ImageCardProps = {
  url: string;
  author: string;
};

const ImageCard = ({ url, author }: ImageCardProps) => {
  return (
    <div className="max-h-96 rounded-md">
      <img src={url} alt="" width="400" className="h-[300px] rounded-md" />
      <p className="uppercase font-inconsolata lg:text-[1.5vw] tracking-wider font-medium text-center text-gallery-med">
        {author}
      </p>
    </div>
  );
};

export default ImageCard;
