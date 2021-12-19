import SearchBar from "../SearchBar";
const Expenses = () => {
  return (
    <div className="w-9/12 p-7">
      <SearchBar showPrev={true} />
      <p className="text-blue-600 text-2xl font-bold py-2">Add Expenses</p>
      <div className="w-full ">
        <div>
          <div>
            <div className="border-gray-300 border-2 my-5 w-full flex flex-row items-center rounded-xl ">
              <input
                type="text"
                placeholder="Name"
                className=" rounded-lg p-2 w-full bg-transparent font-Montserrat  focus:outline-none"
              />
            </div>
            <span>Teacher image:</span>
            <div className="border-gray-300 border-2 mb-5 mt-1 w-full flex flex-row items-center rounded-xl ">
              <input
                accept="image/*"
                required
                type="file"
                placeholder="Enter blog title"
                className=" rounded-lg p-2 w-full bg-transparent font-Montserrat  focus:outline-none"
              />
            </div>

            <div className="border-gray-300 border-2 mb-5 mt-3 w-full flex flex-row items-center rounded-xl ">
              <input
                type="text"
                placeholder="Salary"
                className=" rounded-lg p-2 w-full bg-transparent font-Montserrat  focus:outline-none"
              />
            </div>
            <div className="border-gray-300 border-2 mb-5 mt-3 w-full flex flex-row items-center rounded-xl ">
              <input
                type="text"
                placeholder="Class"
                className=" rounded-lg p-2 w-full bg-transparent font-Montserrat  focus:outline-none"
              />
            </div>
            <div className="border-gray-300 border-2 mb-5 mt-3 w-full flex flex-row items-center rounded-xl ">
              <textarea
                rows={4}
                placeholder="About Teacher"
                className=" rounded-lg p-2 w-full bg-transparent font-Montserrat  focus:outline-none"
              ></textarea>
            </div>

            <div className="bg-gray-900 my-5 w-full flex flex-row items-center rounded-xl justify-center cursor-pointer ">
              <p className="text-center p-2 text-white">Save</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expenses;
