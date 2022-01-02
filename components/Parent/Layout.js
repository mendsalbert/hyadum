import Header from "../Parent/Header";
import Sidebar from "../Parent/Sidebar";
import SideRight from "../Parent/SideRight";
const Layout = (props) => {
  return (
    <>
      <div className="relative">
        <Header />
        <div className="font-Montserrat md:flex md:flex-col lg:flex lg:flex-row lg:w-full">
          {/* side */}
          <Sidebar />
          {/* main */}
          {props.children}
          {/* right */}
          <SideRight />
        </div>
      </div>
    </>
  );
};

export default Layout;
