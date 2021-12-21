import SearchBar from "../SearchBar";
const Admission = () => {
  return (
    <div className="w-9/12 p-7">
      <SearchBar showPrev={false} />
      <div className="w-full ">
        <p className="text-blue-600 text-2xl font-bold pb-0 pt-5">
          Admit a student
        </p>
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
              <p className="text-center p-2 text-white">Add</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admission;
