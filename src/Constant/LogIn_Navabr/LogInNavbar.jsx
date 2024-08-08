// Importing the necessary hooks from the React library. We're using useState and useContext.
import { useContext, useState } from "react";

// Importing the TbMenu2 icon from the react-icons library. This icon will be used for the menu button.
import { TbMenu2 } from "react-icons/tb";

// Importing the MdOutlineCancelPresentation icon from the react-icons library.
//This icon will be used for the close button.
import { MdOutlineCancelPresentation } from "react-icons/md";

// Importing the navLinks data from the Data.jsx file.
//This data will be used to populate the navigation links in the navbar.
import navLinks from "../../Data/Data";

// Importing the Link component from the react-router-dom library.
// This component will be used for navigation between pages.
import { Link } from "react-router-dom";

// Importing the ToggleDarkModeIcon component from the /Components/Toggle_DarkMode/ToggleDarkModeIcon.jsx file.
// This component will be used for toggling the dark mode of the application.
import ToggleDarkModeIcon from "../../Components/Toggle_DarkMode/ToggleDarkModeIcon";

// Importing the AppContext from the ../../Context/AppContext.jsx file.
// This context will be used to access the dark mode state of the application.
import { AppContext } from "../../Context/AppContext";

// Importing the ProfileAvatar component from the /Components/Profile_Avatar/ProfileAvatar.jsx file.
//This component will be used to display the profile avatar of the user.
import ProfileAvatar from "../../Components/Profile_Avatar/ProfileAvatar";

// Importing the logo image from the /src/assets/logo.jpg file. This image will be used as the logo on the navbar.
import logo from "/src/assets/logo.jpg";

/**
 * The LogInNavbar component renders the navigation bar of this website for the Log In page.
 * It contains links to different pages and a sign in button.
 * It also has a responsive menu for smaller devices.
 * This component utilizes the following:
 * - useState hook to keep track of whether the menu is open or not.
 * - useContext hook to access the darkMode state from the AppContext.
 */
const LogInNavbar = () => {
  // State variable to keep track of whether the menu is open or not.
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Accessing the darkMode state from the AppContext using the useContext hook.
  const { darkMode } = useContext(AppContext);

  return (
    <>
      <nav
        className={`flex justify-between items-center py-4 md:px-10 px-4 fixed z-50 w-full top-0 bg-[rgba(255,255,255,0.29)] shadow-[0_8px_32px_0_rgba(31,38,135,0.35)] backdrop-blur-[20px] rounded-[10px] border border-[rgba(255,255,255,0.28)] ${
          darkMode ? "text-white" : "text-black"
        }`}
      >
        {/* Link to the home page */}
        <Link
          to="/"
          className={`text-2xl font-bold flex justify-center items-center gap-2 `}
        >
          <img src={logo} alt="logo" className="w-10 h-10 rounded-md" />
          ALSULK
        </Link>
        {/*//! Menu items for larger devices and mapping through the links */}
        <ul className="max-lg:hidden">
          {navLinks.map((navlink) => (
            <li
              key={navlink.label}
              className={`inline-block px-8 after:contents[""] after:w-0 after:h-[2px] after:bg-primary_main after:block after:transition-all hover:after:w-full after:duration-300 after:ease-in`}
            >
              <Link
                to={navlink.path}
                className={`font-montserrat  text-base leading-normal ${
                  darkMode ? "text-white" : "text-black"
                }`}
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                {navlink.label}
              </Link>
            </li>
          ))}
        </ul>
        {/*//! Contact Us button */}
        <div className="lg:gap-x-6 gap-x-4 flex justify-center items-center">
          <ToggleDarkModeIcon />
          <ProfileAvatar />
          {/*//! Menu toggle button for smaller devices */}
          <TbMenu2
            className={`max-lg:block hidden text-3xl cursor-pointer ${
              darkMode ? "text-black" : "text-black"
            }`}
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          />
        </div>
      </nav>

      {/*//! Responsive menu for smaller devices */}
      {isMenuOpen && (
        <div>
          <nav className="lg:bottom-auto bg-primary_main fixed top-16 bottom-0 left-0 right-0 z-50">
            {/* Close button for the menu */}
            <div
              className="max-lg:block fixed right-0 hidden px-8 py-4 cursor-pointer"
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
            >
              <MdOutlineCancelPresentation className=" text-3xl text-white" />
            </div>
            <ul className=" lg:hidden bg-1 gap-y-7 z-40 flex flex-col items-center justify-center h-full">
              {/* Menu items for smaller devices */}
              {navLinks.map((navlink) => (
                <li
                  key={navlink.label}
                  onClick={() => {
                    setIsMenuOpen(!isMenuOpen);
                    window.scrollTo(0, 8000);
                  }}
                >
                  <Link
                    to={navlink.path}
                    className="font-montserrat active:text-black text-2xl leading-normal text-white"
                  >
                    {navlink.label}
                  </Link>
                </li>
              ))}
              <Link
                to="/sign-up"
                className="py-1.5 lg:px-4 px-5 border-[1px] border-white text-xl lg:text-lg rounded-3xl text-white hover:opacity-50"
                onClick={() => {
                  setIsMenuOpen(!isMenuOpen);
                  window.scrollTo(0, 8000);
                }}
              >
                sign in
              </Link>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default LogInNavbar;
