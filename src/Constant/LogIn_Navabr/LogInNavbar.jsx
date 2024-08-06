import { useContext, useState } from "react";
import { TbMenu2 } from "react-icons/tb";
import { MdOutlineCancelPresentation } from "react-icons/md";
import navLinks from "../../Data/Data";
import { Link } from "react-router-dom";
import ToggleDarkModeIcon from "../../Components/Toggle_DarkMode/ToggleDarkModeIcon";
import { AppContext } from "../../Context/AppContext";
import ProfileAvatar from "../../Components/Profile_Avatar/ProfileAvatar";

import logo from "/src/assets/logo.jpg";

/**
 * The Navbar component renders the navigation bar of this website.
 * It contains links to different pages and a sign in button.
 * It also has a responsive menu for smaller devices.
 */
const LogInNavbar = () => {
  // State variable to keep track of whether the menu is open or not.
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [menu, setMenu] = useState("Home");

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
                  setMenu(navlink.label);
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
                    setMenu(navlink.label);
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
