import { Outlet } from "react-router-dom";
import Navbar from "../Constant/Navbar/Navbar";
import Footer from "../Constant/Footer/Footer";

const Layout = () => {
  return (
    <>
      <div className="pt-[6rem] ">
        <Navbar />
        <div className="md:px-[2.2rem] px-[.8rem]">{<Outlet />}</div>
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default Layout;
