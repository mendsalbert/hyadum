import SearchBar from "../../SearchBar";
import {
  CakeIcon,
  CalendarIcon,
  CashIcon,
  FlagIcon,
  InboxIcon,
  LocationMarkerIcon,
  LogoutIcon,
  MailIcon,
  PrinterIcon,
} from "@heroicons/react/outline";
const NonTeaching = () => {
  return (
    <div className="w-9/12 p-7">
      <SearchBar showPrev={true} />
      <p className="text-blue-600 text-2xl font-bold py-10">
        Non Teaching Staff Details
      </p>
      <div className="border-2 p-4 rounded-lg">
        <div className="py-5">
          <div className="flex flex-row space-x-16">
            <div className="space-y-3">
              <div>
                <div className="bg-user-icon w-48 h-48 rounded-full bg-cover bg-center"></div>
              </div>
              <p className="text-xl font-bold text-gray-600">Mends Albert</p>
              <div className="p-2 w-full bg-blue-600 font-Montserrat text-white text-center rounded-lg cursor-pointer">
                Send Message
              </div>
              <div className="text-gray-500 cursor-pointer flex items-center space-x-2">
                <CalendarIcon className="h-6" />
                <p className="text-sm">2 Yo</p>
              </div>
              <div className="text-gray-500 cursor-pointer flex items-center space-x-2">
                <InboxIcon className="h-6" />
                <p className="text-sm">Class Six(6)</p>
              </div>
              <div className="text-gray-500 cursor-pointer flex items-center space-x-2">
                <CashIcon className="h-6" />
                <p className="text-sm">Salary - Ghc 700.00</p>
              </div>
            </div>
            <div>
              <p className="text-lg mb-1 font-bold text-gray-600">About</p>
              <p className="text-gray-500">
                Before being named CEO in August 2011, Tim was Apple's chief
                operating officer and was responsible for all of the company's
                worldwide sales and operations, including end-to-end management
                of Apple's supply chain, sales activities, and service and
                support in all markets aned countries.
              </p>
              <div className="grid grid-cols-2 gap-5 mt-9">
                <div className="bg-gray-200 p-2 rounded-lg text-gray-500  flex items-center space-x-2">
                  <MailIcon className="h-6" />
                  <p className="text-sm font-bold">mendsalbert</p>
                </div>
                <div className="bg-gray-200 p-2 rounded-lg text-gray-500  flex items-center space-x-2">
                  <LocationMarkerIcon className="h-6" />
                  <p className="text-sm font-bold">Sunyani Nkwabeng</p>
                </div>
                <div className="bg-gray-200 p-2 rounded-lg text-gray-500  flex items-center space-x-2">
                  <CakeIcon className="h-6" />
                  <p className="text-sm font-bold">21st May, 2021</p>
                </div>
                <div className="bg-gray-200 p-2 rounded-lg text-gray-500  flex items-center space-x-2">
                  <FlagIcon className="h-6" />
                  <p className="text-sm font-bold">Joined 26th October</p>
                </div>
                <div className="bg-blue-600 p-2 rounded-lg text-white  flex items-center space-x-2">
                  <PrinterIcon className="h-6" />
                  <p className="text-sm font-bold">Print Statement</p>
                </div>
                <div className="bg-green-600 p-2 rounded-lg text-white  flex items-center space-x-2">
                  <CashIcon className="h-6" />
                  <p className="text-sm font-bold">Salary- GHc 2,500.00</p>
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

export default NonTeaching;
