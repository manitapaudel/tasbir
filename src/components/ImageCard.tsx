type ImageCardProps = {
  url: string;
  author: string;
};

const ImageCard = ({ url, author }: ImageCardProps) => {
  return (
    <div className="rounded-md">
      <img src={url} alt="" height="300" width="400" className="rounded-md" />
      <p className="uppercase font-inconsolata lg:text-[1.5vw] tracking-wider font-medium text-center text-gallery-med">
        {author}
      </p>
    </div>
  );
};

export default ImageCard;
