import SearchBar from "../SearchBar";

const AddAssignment = () => {
  return (
    <div className="w-full lg:w-9/12 lg:p-7 p-4  ">
      <SearchBar showPrev={true} />
      <div className="w-full ">
        <div>
          <p className="text-gray-600 text-xl font-bold pb-2">
            Assignment Available
          </p>
          <div className="w-full space-y-2">
            <div className="bg-gray-100 rounded-lg p-4 shadow-md">
              <p className="text-gray-700 text-lg py-2">Submit assignment</p>
              <hr className="" />
              <div>
                <p className="pb-2">Due date: 21st May,2020</p>
              </div>
              <div className="grid lg:grid-cols-3 grid-cols-1 gap-2 ">
                <div>
                  <select className="rounded-lg p-2 w-full  font-Montserrat  focus:outline-none">
                    <option>English</option>
                    <option>Math</option>
                    <option>Science</option>
                    <option>RME </option>
                  </select>
                </div>

                <div>
                  <input type="date" className="p-2 rounded-md w-full" />
                </div>
                <div className="rounded-lg p-2 w-full  font-Montserrat  focus:outline-none">
                  <input type="file" />
                </div>
                <div className="bg-blue-600 text-center p-2 rounded-lg w-full text-white cursor-pointer">
                  SUBMIT
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAssignment;
