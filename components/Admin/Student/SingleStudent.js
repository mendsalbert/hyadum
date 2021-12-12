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
const SingleStudent = () => {
  return (
    <div className="w-9/12 p-7">
      <SearchBar showPrev={true} />
      <p className="text-blue-600 text-2xl font-bold py-10">
        Student Details (Mends Albert)
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
              <p className="text-lg mb-1 font-bold text-gray-600">About</p>
              <p className="text-gray-500">
                Before being named CEO in August 2011, Tim was Apple's chief
                operating officer and was responsible for all of the company's
                worldwide sales and operations, including end-to-end management
                of Apple's supply chain, sales activities, and service and
                support in all markets aned countries.
              </p>
              <div className="grid grid-cols-2 gap-5 mt-9">
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

export default SingleStudent;
