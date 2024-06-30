import { Outlet } from "react-router-dom";
import Navbar from "../Constant/Navbar/Navbar";
import Footer from "../Constant/Footer/Footer";

const Layout = () => {
  return (
    <>
      <div className="px-6">
        <Navbar />
        <div>{<Outlet />}</div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
