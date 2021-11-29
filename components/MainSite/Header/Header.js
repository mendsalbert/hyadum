import React, { useState } from "react";
import Logo from "../Svg/Logo";
import {
  MenuAlt3Icon,
  SearchIcon,
  XIcon,
  ArrowCircleRightIcon,
} from "@heroicons/react/outline";
const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="relative h-full">
      <div className="bg-white fixed w-full z-40 shadow-xl font-Montserrat ">
        <div className="mx-4 sm:mx-16 md:mx-20 lg:mx-32 ">
          <div className="flex justify-between items-center">
            <div className="flex flex-row items-center py-6 space-x-1 md:space-x-2">
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
              <h1 className="cursor-pointer">About us</h1>
              <h1 className="cursor-pointer">What we build</h1>
              <h1 className="cursor-pointer">Community</h1>
              <h1 className="cursor-pointer">Contact</h1>
              <SearchIcon className="h-6 cursor-pointer" />
            </div>
          </div>
        </div>
        {/* handburger overlay */}
        {toggle ? (
          <div className="bg-white shadow-xl sm:hidden w-11/12 transition-all h-screen absolute z-20 top-0 right-0">
            <div className="fixed top-0 right-0 p-4 cursor-pointer">
              <XIcon
                onClick={() => {
                  setToggle(false);
                }}
                className="h-10 text-gray-400"
              />
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="bg-header-backgroundImage bg-black bg-cover w-full h-screen relative">
        <div className="bg-black w-full h-screen opacity-75"></div>
        <div className=" absolute top-0 left-0 font-Montserrat mx-4 sm:mx-16 md:mx-20 lg:mx-32 flex flex-col justify-center items-start h-screen md:text-5xl text-3xl lg:text-6xl 2xl:text-9xl  font-bold text-white">
          <p className="w-full md:w-10/12 leading-snug">
            The next generation of softwares chaning peoples life
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
