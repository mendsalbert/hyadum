import SearchBar from "../SearchBar";
const FinalGrade = () => {
  return (
    <div className="lg:w-9/12 lg:p-7 w-full p-4">
      <SearchBar showPrev={true} />
      <p className="text-blue-600 text-2xl font-bold py-2">
        Exams score for Darko Ochere
      </p>
      <div className="w-full space-y-2">
        <div className="bg-gray-100 rounded-lg p-4 shadow-md">
          <p className="text-gray-700 text-lg py-2">Math</p>
          <div className="grid lg:grid-cols-4 grid-cols-1 gap-2 ">
            <div>
              <input
                type="text"
                className="p-2 rounded-md w-full"
                placeholder="Score  (70%)"
              />
            </div>
            <div>
              <input
                type="text"
                className="p-2 rounded-md w-full"
                placeholder="Score (30%)"
              />
            </div>
            <div>
              <input
                type="text"
                className="p-2 rounded-md w-full"
                placeholder="Remarks"
              />
            </div>
            <div className="bg-blue-600 text-center p-2 rounded-lg w-full text-white cursor-pointer">
              ADD
            </div>
          </div>
        </div>
        <div className="bg-gray-100 rounded-lg p-4 shadow-md">
          <p className="text-gray-700 text-lg py-2">Science</p>
          <div className="grid lg:grid-cols-4 grid-cols-1 gap-2 ">
            <div>
              <input
                type="text"
                className="p-2 rounded-md w-full"
                placeholder="Score  (70%)"
              />
            </div>
            <div>
              <input
                type="text"
                className="p-2 rounded-md w-full"
                placeholder="Score (30%)"
              />
            </div>
            <div>
              <input
                type="text"
                className="p-2 rounded-md w-full"
                placeholder="Remarks"
              />
            </div>
            <div className="bg-blue-600 text-center p-2 rounded-lg w-full text-white cursor-pointer">
              ADD
            </div>
          </div>
        </div>
        <div className="bg-gray-100 rounded-lg p-4 shadow-md">
          <p className="text-gray-700 text-lg py-2">English</p>
          <div className="grid lg:grid-cols-4 grid-cols-1 gap-2 ">
            <div>
              <input
                type="text"
                className="p-2 rounded-md w-full"
                placeholder="Score  (70%)"
              />
            </div>
            <div>
              <input
                type="text"
                className="p-2 rounded-md w-full"
                placeholder="Score (30%)"
              />
            </div>
            <div>
              <input
                type="text"
                className="p-2 rounded-md w-full"
                placeholder="Remarks"
              />
            </div>
            <div className="bg-blue-600 text-center p-2 rounded-lg w-full text-white cursor-pointer">
              ADD
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalGrade;
