import Logo from "../Svg/Logo";
const CompanyInfo = () => {
  return (
    <div className="mx-4 sm:mx-16 md:mx-20 lg:mx-32 mt-10">
      <div className="flex flex-col justify-center items-center font-Montserrat">
        <div className="flex flex-row items-center mt-5 py-4 space-x-1 md:space-x-2">
          <Logo height="h-12" />
          <p className="font-Montserrat text-lg font-bold lg:text-2xl  text-gray-600">
            Hyadum
          </p>
        </div>
        <p className="text-2xl text-center font-bold text-gray-600 lg:w-9/12 lg:text-3xl mb-12">
          Building products and services to maximise the productivity and
          enhance their lifes
        </p>
        <p className="text-2xl text-left text-gray-600 lg:text-2xl mb-12">
          This is a full details about the company. This is a full details about
          the company. This is a full details about the company . This is a full
          details about the company. This is a full details about the
          companyThis is a full details about the company. This is a full
          details about the company.
        </p>
        <p className="text-2xl text-left text-gray-600  lg:text-2xl mb-12">
          This is a full details about the company . This is a full details
          about the company. This is a full details about the company . This is
          a full details about the company.
        </p>
      </div>
    </div>
  );
};

export default CompanyInfo;
