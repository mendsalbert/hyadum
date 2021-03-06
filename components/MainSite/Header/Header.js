import React, { useState } from "react";
import Link from "next/link";
import Logo from "../Svg/Logo";
import {
  MenuAlt3Icon,
  SearchIcon,
  XIcon,
  ArrowCircleRightIcon,
} from "@heroicons/react/outline";
import { useRouter } from "next/router";
import $ from "jquery";
const Header = () => {
  const [toggle, setToggle] = useState(false);
  const router = useRouter();
  const [whatWeBuild, setWhatWeBuild] = useState(false);
  const [community, setCommunity] = useState(false);
  const [contact, setContact] = useState(false);

  const activeTab = (tab) => {
    if (tab === "product") {
      setWhatWeBuild(true);
      setCommunity(false);
      setContact(false);
    } else if (tab === "community") {
      setWhatWeBuild(false);
      setCommunity(true);
      setContact(false);
    } else if (tab === "contact") {
      setWhatWeBuild(false);
      setContact(true);
      setCommunity(false);
    }
  };

  const scrollFunction = (targetId) => {
    $(function () {
      var target = $(`#${targetId}`);
      if (target.length) {
        $("html,body").animate(
          {
            scrollTop: target.offset().top,
          },
          1000
        );
        return false;
      }
    });
  };

  // console.log(router);
  return (
    <div className="relative h-full">
      <div className="bg-white fixed w-full z-40 shadow-xl font-Montserrat ">
        <div className="mx-4 sm:mx-16 md:mx-20 lg:mx-32 ">
          <div className="flex justify-between items-center">
            <div className="flex flex-row items-center py-3 md:py-4 space-x-1 md:space-x-2">
              <Logo height="h-14" />
              <p className="font-Montserrat text-lg font-bold  text-gray-600">
                Hyadum
              </p>
            </div>
            <div className="sm:hidden">
              <MenuAlt3Icon
                onClick={() => {
                  setToggle(true);
                }}
                className="h-10 cursor-pointer"
              />
            </div>
            <div className="hidden sm:flex space-x-3 text-lg text-gray-500 md:space-x-2 lg:space-x-8 ">
              <Link href="/about">
                <h1
                  className={`${
                    router.pathname === "/about"
                      ? "border-b-4"
                      : "cursor-pointer"
                  } `}
                >
                  About us
                </h1>
              </Link>

              <h1
                onClick={() => {
                  activeTab("product");
                  scrollFunction("whatWeBuild");
                }}
                className={`${
                  whatWeBuild ? "border-b-4 cursor-pointer" : "cursor-pointer"
                } `}
              >
                What we build
              </h1>

              <h1
                onClick={() => {
                  activeTab("community");
                  scrollFunction("community");
                }}
                className={`${
                  community ? "border-b-4 cursor-pointer" : "cursor-pointer"
                } `}
              >
                Community
              </h1>
              <h1
                onClick={() => {
                  activeTab("contact");
                  scrollFunction("contact");
                }}
                className={`${
                  contact ? "border-b-4 cursor-pointer" : "cursor-pointer"
                } `}
              >
                Contact
              </h1>
              {/* <SearchIcon className="h-6 cursor-pointer" /> */}
            </div>
          </div>
        </div>
        {/* handburger overlay */}
        {toggle ? (
          <div className="transition duration-700 ease-in-out bg-white shadow-xl sm:hidden w-11/12 h-screen absolute z-20 top-0 right-0">
            <div className="fixed top-0 right-0 p-4 cursor-pointer">
              <XIcon
                onClick={() => {
                  setToggle(false);
                }}
                className="h-10 text-gray-400"
              />
            </div>
            <div className="text-2xl p-6 space-y-5 text-center pt-24 text-gray-500">
              <div className="flex flex-row justify-center items-center">
                {/* <SearchIcon className="h-6 cursor-pointer" /> */}
              </div>
              <Link href="/about">
                <h1
                  onClick={() => {
                    setToggle(false);
                  }}
                  className={`${
                    router.pathname === "/about"
                      ? "border-b-4"
                      : "cursor-pointer"
                  } `}
                >
                  About us
                </h1>
              </Link>
              <h1
                onClick={() => {
                  activeTab("product");
                  scrollFunction("whatWeBuild");
                  setToggle(false);
                }}
                className={`${
                  whatWeBuild ? "border-b-4 cursor-pointer" : "cursor-pointer"
                } `}
              >
                What we build
              </h1>
              <h1
                onClick={() => {
                  activeTab("community");
                  scrollFunction("community");
                  setToggle(false);
                }}
                className={`${
                  community ? "border-b-4 cursor-pointer" : "cursor-pointer"
                } `}
              >
                Community
              </h1>
              <h1
                onClick={() => {
                  activeTab("contact");
                  scrollFunction("contact");
                  setToggle(false);
                }}
                className={`${
                  contact ? "border-b-4 cursor-pointer" : "cursor-pointer"
                } `}
              >
                Contact
              </h1>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="bg-header-backgroundImage  bg-black bg-cover w-full h-screen relative">
        <div className="bg-black w-full h-screen opacity-75"></div>
        <div className=" absolute top-0 left-0 font-Montserrat mx-4 sm:mx-16 md:mx-20 lg:mx-32 flex flex-col justify-center items-start h-screen md:text-5xl text-3xl lg:text-6xl 2xl:text-9xl  font-bold text-white">
          <p className="w-full md:w-10/12 leading-snug">
            The next generation of softwares changing peoples life
          </p>
          <div className="flex flex-row space-x-2 items-center mt-4">
            <ArrowCircleRightIcon className="h-10" />
            <span className="text-xl ">Welcome to Hyadum</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
