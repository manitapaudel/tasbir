import {
  LinkedinIcon,
  LinkedinShareButton,
  RedditIcon,
  RedditShareButton,
  TumblrIcon,
  TumblrShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";

const SocialShares = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <div className="flex gap-2">
      <RedditShareButton url={imageUrl} title={"Picsum Image"}>
        <RedditIcon size={28} round />
      </RedditShareButton>
      <TwitterShareButton url={imageUrl} title={"Picsum Image"}>
        <TwitterIcon size={28} round />
      </TwitterShareButton>
      <TumblrShareButton url={imageUrl}>
        <TumblrIcon size={28} round />
      </TumblrShareButton>
      <LinkedinShareButton url={imageUrl} title={"Picsum Image"}>
        <LinkedinIcon size={28} round />
      </LinkedinShareButton>
    </div>
  );
};

export default SocialShares;
