import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../Constant/Navbar/Navbar";
import Footer from "../Constant/Footer/Footer";
import { useAuth } from "../Context/AuthContext";
import LogInNavbar from "../Constant/LogIn_Navabr/LogInNavbar";
import { AppContext } from "../Context/AppContext";
import { useContext } from "react";

const Layout = () => {
  // getting the user from the useAuth function from the AuthContext
  const user = useAuth();

  // getting the isLoggedIn state from the AppContext
  const { isLoggedIn } = useContext(AppContext);

  // if the user is not logged in, redirect to the login page else render the layout
  if (!user.token) {
    return <Navigate to="/login" />;
  } else {
    return (
      <>
        {isLoggedIn ? <LogInNavbar /> : <Navbar />}
        <div className="pt-[4rem] md:px-[2rem] px-2">
          <Outlet />
        </div>
        <Footer />
      </>
    );
  }
};

export default Layout;
