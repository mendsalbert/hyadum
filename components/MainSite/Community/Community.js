import {
  FacebookShareButton,
  FacebookIcon,
  TelegramShareButton,
  TelegramIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  PinterestShareButton,
  PinterestIcon,
  RedditShareButton,
  RedditIcon,
} from "next-share";
const Community = () => {
  return (
    <div id="community" className="">
      <div className="mx-4 sm:mx-16 md:mx-20 lg:mx-32 mt-10 font-Montserrat">
        <p className="text-2xl  text-left font-bold text-gray-700 lg:w-9/12 md:mb-10 mb-10 mt-10 md:mt-16  lg:text-2xl">
          Our Community
        </p>
        <div className="">
          <div className="w-full space-y-2 ">
            <div className="bg-header-backgroundImage bg-cover w-full lg:w-full h-64 relative"></div>
            <p className="text-xl text-gray-700 pt-2">Hyadum</p>
            <div className="bg-blue-600 w-20 h-1.5"></div>
            <p className="text-xl text-gray-600 ">
              Training the next best software engineers in the world
            </p>
            <p className="text-lg text-gray-500">
              Young people around the world are eger to learn to program Most
              especially you youth from Ghana West Africa Young people around
              the world are eger to learn to program Most especially you youth
              from Ghana West Africa Young people around the world are eger to
              learn to program Most especially you youth from Ghana West Africa
            </p>
          </div>
          <div className="flex flex-col lg:flex-row mt-10 lg:space-x-12 space-x-0">
            <div className="bg-header-backgroundImage bg-cover w-full  mb-9 lg:mb-0 lg:w-full h-48 relative"></div>
            <div className="bg-header-backgroundImage bg-cover w-full lg:w-full h-48 relative"></div>
          </div>
          <div>
            <p className="text-lg text-gray-600 py-5">JOIN OUR COMMUNITY</p>
            <div>
              <div className="space-x-2 py-0">
                <FacebookShareButton>
                  <FacebookIcon size={32} round />
                </FacebookShareButton>
                <PinterestShareButton>
                  <PinterestIcon size={32} round />
                </PinterestShareButton>
                <RedditShareButton>
                  <RedditIcon size={32} round />
                </RedditShareButton>
                <LinkedinShareButton>
                  <LinkedinIcon size={32} round />
                </LinkedinShareButton>
                <TwitterShareButton>
                  <TwitterIcon size={32} round />
                </TwitterShareButton>
                <TelegramShareButton>
                  <TelegramIcon size={32} round />
                </TelegramShareButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
