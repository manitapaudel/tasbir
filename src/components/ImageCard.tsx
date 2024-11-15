type ImageCardProps = {
  url: string;
  author: string;
};

const ImageCard = ({ url, author }: ImageCardProps) => {
  return (
    <div className="rounded-md">
      <img src={url} alt="" height={300} width="400" className="rounded-md" />
      <p>{author}</p>
    </div>
  );
};

export default ImageCard;
