import { Link } from "react-router-dom";
import { AppContext } from "../../Context/AppContext";
import { useContext, useEffect, useState } from "react";
import { useAuth } from "../../Context/AuthContext";
import axios from "axios";

const ProfileAvatar = () => {
  const { darkMode } = useContext(AppContext);
  const [userAvatar, setUserAvatar] = useState(null);

  // The Base Url for the API
  const BASE_URL = import.meta.env.VITE_REACT_BASE_URL;

  useEffect(() => {
    axios
      .get(`${BASE_URL}/students/api/profile/`, {
        headers: {
          Authorization: `Token ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        setUserAvatar(response.data.student.user.picture);
      })
      .catch((error) => {
        console.log("Error Fetching User Data:", error);
      });
  }, [BASE_URL]);

  const user = useAuth();

  // if (!user) return null;

  return (
    <div className="dropdown dropdown-end ">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle avatar border-2 border-primary_main"
      >
        <div className="w-10 rounded-full">
          <img alt="User Avatar" src={userAvatar ? userAvatar : ""} />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
      >
        <li>
          <Link
            to="/student_profile"
            className={`justify-between ${
              darkMode ? "text-black" : "text-black"
            }`}
          >
            Profile
            <span className={`badge ${darkMode ? "text-black" : "text-black"}`}>
              New
            </span>
          </Link>
        </li>
        <li>
          <Link
            to="/student_profile_settings"
            className={`${darkMode ? "text-black" : "text-black"}`}
          >
            Settings
          </Link>
        </li>
        <li>
          <p
            onClick={user.logOut}
            className={`${darkMode ? "text-black" : "text-black"}`}
          >
            Logout
          </p>
        </li>
        <li>
          <p
            onClick={user.logOutAllDevices}
            className={`capitalize ${darkMode ? "text-black" : "text-black"}`}
          >
            Logout of all Devices
          </p>
        </li>
      </ul>
    </div>
  );
};

export default ProfileAvatar;
