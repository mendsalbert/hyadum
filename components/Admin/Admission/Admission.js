import SearchBar from "../SearchBar";
const Admission = () => {
  return (
    <div className="w-9/12 p-7">
      <SearchBar showPrev={false} />
      <div className="w-full ">
        <p className="text-blue-600 text-2xl font-bold pb-0 pt-5">
          Admit a student
        </p>
        <p className="text-gray-600 text-lg font-bold py-2">
          General Information
        </p>
        <div>
          <div className="space-y-4 bg-gray-50 shadow-xl p-4 rounded-lg">
            <p className="text-gray-600 text-lg font-bold py-2">
              Student Information:
            </p>
            <span>Student photo:</span>
            <div className="border-gray-300 border-2 w-full flex flex-row items-center rounded-xl ">
              {/* <span>Picture of student</span> */}
              <input
                accept="image/*"
                required
                type="file"
                placeholder="Enter blog title"
                className=" rounded-lg p-2 w-full bg-transparent font-Montserrat  focus:outline-none"
              />
            </div>
            <div className="flex flex-row space-x-4">
              <div className="border-gray-300 border-2  w-full flex flex-row items-center rounded-xl ">
                <input
                  type="text"
                  placeholder="Frist Name"
                  className=" rounded-lg p-2 w-full bg-transparent font-Montserrat  focus:outline-none"
                />
              </div>
              <div className="border-gray-300 border-2  w-full flex flex-row items-center rounded-xl ">
                <input
                  type="text"
                  placeholder="Middle Name"
                  className=" rounded-lg p-2 w-full bg-transparent font-Montserrat  focus:outline-none"
                />
              </div>
              <div className="border-gray-300 border-2  w-full flex flex-row items-center rounded-xl ">
                <input
                  type="text"
                  placeholder="Last Name"
                  className=" rounded-lg p-2 w-full bg-transparent font-Montserrat  focus:outline-none"
                />
              </div>
            </div>
            <div className="flex flex-row space-x-4">
              <div className="border-gray-300 border-2  w-full flex flex-row items-center rounded-xl ">
                <input
                  type="text"
                  placeholder="Student Id"
                  className=" rounded-lg p-2 w-full bg-transparent font-Montserrat  focus:outline-none"
                />
              </div>
              <div className="border-gray-300 border-2  w-full flex flex-row items-center rounded-xl ">
                <input
                  type="text"
                  placeholder="Username"
                  className=" rounded-lg p-2 w-full bg-transparent font-Montserrat  focus:outline-none"
                />
              </div>
              <div className="border-gray-300 border-2  w-full flex flex-row items-center rounded-xl ">
                <input
                  type="password"
                  placeholder="Password"
                  className=" rounded-lg p-2 w-full bg-transparent font-Montserrat  focus:outline-none"
                />
              </div>
            </div>
            <div className="flex flex-row space-x-4">
              <div className="border-gray-300 border-2  w-full flex flex-row items-center rounded-xl ">
                <input
                  type="text"
                  placeholder="Place of Residence"
                  className=" rounded-lg p-2 w-full bg-transparent font-Montserrat  focus:outline-none"
                />
              </div>
              <div className="border-gray-300 border-2  w-full flex flex-row items-center rounded-xl ">
                <input
                  type="text"
                  placeholder="Home Town"
                  className=" rounded-lg p-2 w-full bg-transparent font-Montserrat  focus:outline-none"
                />
              </div>
            </div>
            <div className="flex flex-row space-x-4">
              <div className="border-gray-300 border-2  w-full flex flex-row items-center rounded-xl ">
                <select className="rounded-lg p-2 w-full bg-transparent font-Montserrat  focus:outline-none">
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
              <div className="border-gray-300 border-2  w-full flex flex-row items-center rounded-xl ">
                <input
                  type="date"
                  placeholder="Username"
                  className=" rounded-lg p-2 w-full bg-transparent font-Montserrat  focus:outline-none"
                />
              </div>
              <div className="border-gray-300 border-2  w-full flex flex-row items-center rounded-xl ">
                <select className="rounded-lg p-2 w-full bg-transparent font-Montserrat  focus:outline-none">
                  <option>Kindergarten</option>
                  <option>Nursury</option>
                  <option>Primary 1</option>
                  <option>Primary 2</option>
                  <option>Primary 3</option>
                  <option>Primary 4</option>
                </select>
              </div>
            </div>

            <p className="text-gray-600 text-lg font-bold py-2">
              Guradians Information:
            </p>
            <div className="flex flex-row space-x-4">
              <div className="border-gray-300 border-2  w-full flex flex-row items-center rounded-xl ">
                <input
                  type="text"
                  placeholder="Father's Name"
                  className=" rounded-lg p-2 w-full bg-transparent font-Montserrat  focus:outline-none"
                />
              </div>
              <div className="border-gray-300 border-2  w-full flex flex-row items-center rounded-xl ">
                <input
                  type="text"
                  placeholder="Mother's Name"
                  className=" rounded-lg p-2 w-full bg-transparent font-Montserrat  focus:outline-none"
                />
              </div>
            </div>
            <div className="flex flex-row space-x-4">
              <div className="border-gray-300 border-2  w-full flex flex-row items-center rounded-xl ">
                <input
                  type="text"
                  placeholder="Father's Contact"
                  className=" rounded-lg p-2 w-full bg-transparent font-Montserrat  focus:outline-none"
                />
              </div>
              <div className="border-gray-300 border-2  w-full flex flex-row items-center rounded-xl ">
                <input
                  type="text"
                  placeholder="Mother's Contact"
                  className=" rounded-lg p-2 w-full bg-transparent font-Montserrat  focus:outline-none"
                />
              </div>
            </div>
            <div className="border-gray-300 border-2  w-full flex flex-row items-center rounded-xl ">
              <input
                type="text"
                placeholder="Gurdance Place of Residence"
                className=" rounded-lg p-2 w-full bg-transparent font-Montserrat  focus:outline-none"
              />
            </div>
            <div className="bg-gray-900  w-full flex flex-row items-center rounded-xl justify-center cursor-pointer ">
              <p className="text-center p-2 text-white">Add</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admission;
