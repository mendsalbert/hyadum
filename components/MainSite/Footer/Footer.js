import Logo from "../Svg/Logo";
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
const Footer = () => {
  return (
    <div id="contact" className="bg-[#f7f7f7] py-9 lg:py-24 mt-6 lg:mt-12">
      <div className="mx-4 sm:mx-16 md:mx-20 lg:mx-32 mt-10 font-Montserrat">
        <div className="flex flex-col space-y-5 md:items-start md:flex-row md:space-y-0 md:justify-between  ">
          {/* <div className="grid grid-cols-4"> */}
          <div>
            <div className="flex flex-row items-center mt-2 py-2 space-x-1 md:space-x-2">
              <Logo height="h-12" />
              <p className="font-Montserrat text-lg font-bold lg:text-2xl  text-gray-600">
                Hyadum
              </p>
            </div>
            <div className="space-x-2 py-0">
              <FacebookShareButton>
                <FacebookIcon size={32} round />
              </FacebookShareButton>
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
          <div>
            <h2 className="text-xl text-gray-700 font-bold pb-2">Company</h2>
            <p className="text-lg text-gray-600 ">About us</p>
            <p className="text-lg text-gray-600 ">About us</p>
            <p className="text-lg text-gray-600 ">About us</p>
            <p className="text-lg text-gray-600 ">About us</p>
          </div>
          <div>
            <h2 className="text-xl text-gray-700 font-bold pb-2">Company</h2>
            <p className="text-lg text-gray-600 ">About us</p>
            <p className="text-lg text-gray-600 ">About us</p>
            <p className="text-lg text-gray-600 ">About us</p>
            <p className="text-lg text-gray-600 ">About us</p>
          </div>
          <div>
            <h2 className="text-xl text-gray-700 font-bold pb-2">Company</h2>
            <p className="text-lg text-gray-600 ">About us</p>
            <p className="text-lg text-gray-600 ">About us</p>
            <p className="text-lg text-gray-600 ">About us</p>
            <p className="text-lg text-gray-600 ">About us</p>
          </div>
        </div>
        <div className="bg-gray-300 w-full my-6 opacity-50 h-0.5"></div>
        <div className="flex flex-row justify-between">
          <p className="text-lg text-gray-700 ">Hyadum @2021</p>
          <p className="text-lg text-gray-700 ">English(US)</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
