import { Link } from "react-router-dom";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import adminNavLinks from "../Admin_Data/AdminData";
import { useAuth } from "../../../Context/AuthContext";

import avatar from "/src/assets/userAvatar.jpg";

const AdminNavbar = () => {
  // The Base Url for the API

  const user = useAuth();

  return (
    <>
      <nav className="navbar md:px-8 px-2 fixed md:w-[83.2%]  bg-[rgba(255,255,255,0.29)] shadow-[0_8px_32px_0_rgba(31,38,135,0.35)] backdrop-blur-[20px]  border border-[rgba(255,255,255,0.28)]">
        <div className="navbar-start">
          <div className="dropdown md:hidden block z-50">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <HiOutlineMenuAlt2 className="text-2xl" />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-1 w-52 p-2 shadow z-50"
            >
              {adminNavLinks.map((link) => (
                <li key={link.id}>
                  <Link to={link.path}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <Link to={"/admin"} className="text-xl md:hidden block">
            ALSULK
          </Link>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src={user.studentInfo.imag ? user.studentInfo.image : avatar}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <p onClick={() => user.AdminLogout()}>Logout</p>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default AdminNavbar;
