import React, { useState, useEffect } from "react";
import SearchBar from "../SearchBar";
import {
  CakeIcon,
  CalendarIcon,
  CashIcon,
  FlagIcon,
  IdentificationIcon,
  InboxIcon,
  LocationMarkerIcon,
  LogoutIcon,
  MailIcon,
  PhoneIcon,
} from "@heroicons/react/outline";
import Link from "next/link";
const Index = (props) => {
  return (
    <div className="w-full lg:w-9/12 lg:p-7 p-4">
      <SearchBar showPrev={true} />

      <div className="flex flex-row justify-between items-center">
        <p className="text-blue-600 text-2xl font-bold py-10">
          Mends Albert get access to your grades
        </p>
      </div>

      <div className="space-y-2 pb-3">
        <Link href="grade/assesment">
          <div className="bg-blue-600 px-4 py-1 text-white text-center rounded-md cursor-pointer">
            Assesment
          </div>
        </Link>

        <Link href="grade/report">
          <div className="bg-green-600 px-4 py-1 text-white text-center rounded-md cursor-pointer">
            Report
          </div>
        </Link>
      </div>
      <div className="border-2 p-4 rounded-lg">
        <div className="py-5">
          <div className="flex flex-col lg:flex-row lg:space-x-16 space-x-0">
            <div className="space-y-3">
              <div>
                <div className="bg-user-icon w-48 h-48 rounded-full bg-cover bg-center"></div>
              </div>
              <p className="text-xl font-bold text-gray-600">Mends Albert</p>
              <div className="p-2 w-full bg-blue-600 font-Montserrat text-white text-center rounded-lg cursor-pointer">
                Print Testimonial
              </div>
              <div className="text-gray-500 cursor-pointer flex items-center space-x-2">
                <CalendarIcon className="h-6" />
                <p className="text-sm">2 Yo</p>
              </div>
              <div className="text-gray-500 cursor-pointer flex items-center space-x-2">
                <InboxIcon className="h-6" />
                <p className="text-sm">Kindergarten 1</p>
              </div>
              <div className="text-gray-500 cursor-pointer flex items-center space-x-2">
                <PhoneIcon className="h-6" />
                <p className="text-sm">Gurdians Tel: 0249107812 1</p>
              </div>
            </div>
            <div>
              <p className="text-lg mb-1 font-bold lg:mt-0 mt-4 text-gray-600">
                About
              </p>
              <p className="text-gray-500">
                Mends Albert is a student of Divine Montesorre School. In class
                Six(6). He comes from Sampa in the Jarman North District Bono
                Region. Daniel Adu Sarkodie is the name of his class teacher. Mr
                an Mrs.Mends are his parents.
              </p>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-9">
                <div>
                  <IdentificationIcon className="h-6" />
                  <p className="text-sm font-bold">Guradians Names:</p>
                  <p className="text-sm font-bold">Father: Joseph Mensah</p>
                  <p className="text-sm font-bold">Mother: Obidiaba Martha</p>
                </div>
                <div>
                  <PhoneIcon className="h-6" />
                  <p className="text-sm font-bold">Guradians Contact:</p>
                  <p className="text-sm font-bold">Father: 0249107812</p>
                  <p className="text-sm font-bold">Mother: 0540913634</p>
                </div>
                <div className="bg-gray-200 p-2 rounded-lg text-gray-500  flex items-center space-x-2">
                  <CakeIcon className="h-6" />
                  <p className="text-sm font-bold">21st May, 1999</p>
                </div>
                <div className="bg-gray-200 p-2 rounded-lg text-gray-500  flex items-center space-x-2">
                  <FlagIcon className="h-6" />
                  <p className="text-sm font-bold">Joined 26th October</p>
                </div>
                <div className="bg-blue-600 p-2 rounded-lg text-white  flex items-center space-x-2">
                  <LogoutIcon className="h-6" />
                  <p className="text-sm font-bold">Performance - Average</p>
                </div>
                <div className="bg-red-600 p-2 rounded-lg text-white  flex items-center space-x-2">
                  <CashIcon className="h-6" />
                  <p className="text-sm font-bold">Fees: (-Ghc 500.00)</p>
                </div>
              </div>
              {/* <p className="text-2xl font-bold">Mends Albert</p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
