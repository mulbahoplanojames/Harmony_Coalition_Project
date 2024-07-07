import { Outlet } from "react-router-dom";
import Navbar from "../Constant/Navbar/Navbar";
import Footer from "../Constant/Footer/Footer";
import LogInNavbar from "../Constant/LogIn_Navabr/LogInNavbar";
import { AppContext } from "../Context/AppContext";
import { useContext } from "react";

const Layout = () => {
  const { isLogIn } = useContext(AppContext);

  return (
    <>
      <div className="pt-[6rem] ">
        {isLogIn ? <LogInNavbar /> : <Navbar />}
        {/* <LogInNavbar /> */}
        <div className="md:px-[3rem] px-[.7rem]">{<Outlet />}</div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
