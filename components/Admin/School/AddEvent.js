import SearchBar from "../SearchBar";
const AddEvent = () => {
  const addCol = () => {};
  return (
    <div className="w-9/12 p-7">
      <SearchBar showPrev={true} />
      <div className="w-full ">
        <div>
          <p className="text-gray-600 text-xl font-bold">
            Add Event (Term plan)
          </p>
          <div>
            <div>
              {/* <span>Term(Semester):</span> */}
              <div className="border-gray-300 border-2 mb-5 mt-3 w-full flex flex-row items-center rounded-xl ">
                <select className="rounded-lg p-2 w-full bg-transparent font-Montserrat  focus:outline-none">
                  <option>1st Term </option>
                  <option>2nd Term </option>
                  <option>3rd Term </option>
                </select>
              </div>

              <div className="border-gray-300 border-2 mb-5 mt-3 w-full flex flex-row items-center rounded-xl ">
                <input
                  type="date"
                  placeholder="Salary"
                  className=" rounded-lg p-2 w-full bg-transparent font-Montserrat  focus:outline-none"
                />
              </div>

              <div className="border-gray-300 border-2 mb-5 mt-3 w-full flex flex-row items-center rounded-xl ">
                <textarea
                  rows={4}
                  placeholder="Enter Event(Activity)"
                  className=" rounded-lg p-2 w-full bg-transparent font-Montserrat  focus:outline-none"
                ></textarea>
              </div>

              <div className="bg-gray-900 my-5 w-full flex flex-row items-center rounded-xl justify-center cursor-pointer ">
                <p className="text-center p-2 text-white">Add</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEvent;
