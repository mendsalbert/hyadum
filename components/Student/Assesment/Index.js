import SearchBar from "../SearchBar";
const Assesment = () => {
  return (
    <div className="lg:w-9/12 lg:p-7 w-full p-4">
      <SearchBar showPrev={true} />
      <p className="text-blue-600 text-2xl font-bold py-2">
        Assesment for Darko Ochere
      </p>
      <div className="w-full space-y-2">
        <div className="bg-gray-100 rounded-lg p-4 shadow-md">
          <p className="text-gray-700 text-lg py-2">Math</p>
          <div className="grid lg:grid-cols-5 grid-cols-1 gap-2 ">
            <div>
              <select className="rounded-lg p-2 w-full  font-Montserrat  focus:outline-none">
                <option>Home Work</option>
                <option>Assignment</option>
                <option>Class Work</option>
                <option>Class Test </option>
              </select>
            </div>

            <div>
              <input type="date" className="p-2 rounded-md w-full" />
            </div>
            <div>
              <input
                type="text"
                className="p-2 rounded-md w-full"
                placeholder="Remarks"
              />
            </div>
            <div className="bg-blue-600 text-center p-2 rounded-lg w-full text-white cursor-pointer">
              VIEW
            </div>
          </div>
          <hr className="mt-2" />
          <div>
            <p>Date - 20/20</p>
          </div>
        </div>
        <div className="bg-gray-100 rounded-lg p-4 shadow-md">
          <p className="text-gray-700 text-lg py-2">English</p>
          <div className="grid lg:grid-cols-5 grid-cols-1 gap-2 ">
            <div>
              <select className="rounded-lg p-2 w-full  font-Montserrat  focus:outline-none">
                <option>Home Work</option>
                <option>Assignment</option>
                <option>Class Work</option>
                <option>Class Test </option>
              </select>
            </div>

            <div>
              <input type="date" className="p-2 rounded-md w-full" />
            </div>
            <div>
              <input
                type="text"
                className="p-2 rounded-md w-full"
                placeholder="Remarks"
              />
            </div>
            <div className="bg-blue-600 text-center p-2 rounded-lg w-full text-white cursor-pointer">
              VIEW
            </div>
          </div>
          <hr className="mt-2" />
          <div>
            <p>Date - 20/20</p>
          </div>
        </div>
        <div className="bg-gray-100 rounded-lg p-4 shadow-md">
          <p className="text-gray-700 text-lg py-2">Science</p>
          <div className="grid lg:grid-cols-5 grid-cols-1 gap-2 ">
            <div>
              <select className="rounded-lg p-2 w-full  font-Montserrat  focus:outline-none">
                <option>Home Work</option>
                <option>Assignment</option>
                <option>Class Work</option>
                <option>Class Test </option>
              </select>
            </div>

            <div>
              <input type="date" className="p-2 rounded-md w-full" />
            </div>
            <div>
              <input
                type="text"
                className="p-2 rounded-md w-full"
                placeholder="Remarks"
              />
            </div>
            <div className="bg-blue-600 text-center p-2 rounded-lg w-full text-white cursor-pointer">
              VIEW
            </div>
          </div>
          <hr className="mt-2" />
          <div>
            <p>Date - 20/20</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assesment;
