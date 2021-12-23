import SearchBar from "../SearchBar";
const AddCourse = () => {
  return (
    <div className="w-9/12 p-7">
      <SearchBar showPrev={true} />
      <div className="w-full ">
        <p className="text-blue-600 text-2xl font-bold pb-3 pt-5">Add Course</p>

        <div>
          <div className="space-y-4 bg-gray-50 shadow-xl p-4 rounded-lg">
            <div className="space-y-4">
              <div className="border-gray-300 border-2  w-full flex flex-row items-center rounded-xl ">
                <input
                  type="text"
                  placeholder="Course Name"
                  className=" rounded-lg p-2 w-full bg-transparent font-Montserrat  focus:outline-none"
                />
              </div>
              <div className="border-gray-300 border-2  w-full flex flex-row items-center rounded-xl ">
                <select className="rounded-lg p-2 w-full bg-transparent font-Montserrat  focus:outline-none">
                  <option>Nursery</option>
                  <option>Class 1</option>
                  <option>Class 2</option>
                  <option>Class 3</option>
                  <option>Class 4</option>
                  <option>Class 5</option>
                </select>
              </div>

              <div className="border-gray-300 border-2  w-full flex flex-row items-center rounded-xl ">
                <input
                  type="text"
                  placeholder="Course Name"
                  className=" rounded-lg p-2 w-full bg-transparent font-Montserrat  focus:outline-none"
                />
              </div>
            </div>

            <div className="bg-gray-900  w-full flex flex-row items-center rounded-xl justify-center cursor-pointer ">
              <p className="text-center p-2 text-white">Save</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCourse;
