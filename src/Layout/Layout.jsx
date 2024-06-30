import { Outlet } from "react-router-dom";
import Navbar from "../Constant/Navbar/Navbar";
import Footer from "../Constant/Footer/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div>{<Outlet />}</div>
      <Footer />
    </>
  );
};

export default Layout;
