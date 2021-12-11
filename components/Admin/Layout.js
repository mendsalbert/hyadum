import Header from "../Admin/Header";
import Sidebar from "../Admin/Sidebar";
import SideRight from "../Admin/SideRight";
const Layout = (props) => {
  return (
    <>
      <Header />
      <div className="font-Montserrat flex flex-row w-full  ">
        {/* side */}
        <Sidebar />
        {/* main */}
        {props.children}
        {/* right */}
        <SideRight />
      </div>
    </>
  );
};

export default Layout;
