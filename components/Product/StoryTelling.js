import {
  ChartSquareBarIcon,
  CurrencyDollarIcon,
  PresentationChartLineIcon,
  GlobeIcon,
} from "@heroicons/react/outline";
const StoryTelling = () => {
  return (
    <div className="mx-4 sm:mx-16 md:mx-20 lg:mx-32 font-Montserrat">
      <div className="grid grid-cols-2 gap-10 py-8">
        <div className="bg-yellow-200 p-5 rounded-lg flex flex-row items-start justify-between ">
          <div className="w-2/12">
            <ChartSquareBarIcon className="h-20 text-gray-700" />
          </div>
          <div className="w-10/12">
            <p className="text-lg text-gray-700">
              Grow your school , Move from the old way of doing things to the
              new way of doing things
            </p>
          </div>
        </div>
        <div className="bg-red-200 p-5 rounded-lg flex flex-row items-start justify-between ">
          <div className="w-2/12">
            <CurrencyDollarIcon className="h-20 text-gray-700" />
          </div>
          <div className="w-10/12">
            <p className="text-lg text-gray-700">
              Grow your school , Move from the old way of doing things to the
              new way of doing things
            </p>
          </div>
        </div>
        <div className="bg-blue-200 p-5 rounded-lg flex flex-row items-start justify-between ">
          <div className="w-2/12">
            <PresentationChartLineIcon className="h-20 text-gray-700" />
          </div>
          <div className="w-10/12">
            <p className="text-lg text-gray-700">
              Grow your school , Move from the old way of doing things to the
              new way of doing things
            </p>
          </div>
        </div>
        <div className="bg-green-200 p-5 rounded-lg flex flex-row items-start justify-between ">
          <div className="w-2/12">
            <GlobeIcon className="h-20 text-gray-700" />
          </div>
          <div className="w-10/12">
            <p className="text-lg text-gray-700">
              Grow your school , Move from the old way of doing things to the
              new way of doing things
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryTelling;
