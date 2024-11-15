type ImageCardProps = {
  url: string;
  author: string;
};

const ImageCard = ({ url, author }: ImageCardProps) => {
  return (
    <div className="rounded-md">
      <img src={url} alt="" height={300} width="400" className="rounded-md" />
      <p className="uppercase font-inconsolata text-2xl font-medium text-center text-gallery-med">
        {author}
      </p>
    </div>
  );
};

export default ImageCard;
