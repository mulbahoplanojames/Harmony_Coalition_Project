import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../Constant/Navbar/Navbar";
import Footer from "../Constant/Footer/Footer";
import { useAuth } from "../Context/AuthContext";
import LogInNavbar from "../Constant/LogIn_Navabr/LogInNavbar";
// import { quickLinks, supportLinks, legalLinks } from "../Data/Data";

const Layout = () => {
  // getting the user from the useAuth function from the AuthContext
  const user = useAuth();

  // if the user is not logged in, redirect to the login page else render the layout
  if (!user.token) {
    return <Navigate to="/home" />;
  }

  return (
    <>
      {!user.token ? <Navbar /> : <LogInNavbar />}
      {/* <div className="pt-[4rem] md:px-[2rem] px-2"> */}
      <Outlet />
      {/* </div> */}
      <Footer />
    </>
  );
};

export default Layout;
