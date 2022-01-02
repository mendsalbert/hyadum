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
const ReportPage = () => {
  return (
    <div className="w-full lg:w-9/12 lg:p-7 p-4  ">
      {/* <SearchBar showPrev={true} /> */}
      <div className="w-full ">
        <div>
          <p className="text-gray-600 text-xl font-bold">
            Report for Mends Albert(2nd term)
          </p>
          <div>
            <div>
              <div className="border-gray-300 border-2 mb-5 mt-3 w-full flex flex-row items-center rounded-xl ">
                <input
                  type="date"
                  placeholder="Salary"
                  className=" rounded-lg p-2 w-full bg-transparent font-Montserrat  focus:outline-none"
                />
              </div>

              <div className="border-2 p-4 rounded-lg"></div>

              <div className="bg-gray-900 my-5 w-full flex flex-row items-center rounded-xl justify-center cursor-pointer ">
                <p className="text-center p-2 text-white">Print</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportPage;
