import Header from "../Teacher/Header";
import Sidebar from "../Teacher/Sidebar";
import SideRight from "../Teacher/SideRight";
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
