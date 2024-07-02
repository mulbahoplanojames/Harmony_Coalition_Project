// This component is responsible for toggling the dark mode of this application.

// Importing the necessary icons from the react-icons library.
import { BsMoonStars } from "react-icons/bs";
import { MdOutlineWbSunny } from "react-icons/md";

// Importing the AppContext from the Context/AppContext.jsx file.
import { AppContext } from "../../Context/AppContext";

// Importing the useContext hook from the React library.
import { useContext } from "react";

const ToggleDarkModeIcon = () => {
  // The darkMode state is used to determine whether the application is in dark mode or not.
  const { darkMode } = useContext(AppContext);

  // This function is responsible for toggling the dark mode of the application.
  const { toggleDarkMode } = useContext(AppContext);

  return (
    <>
      {/* This label element wraps around a hidden checkbox element and the two icons.*/}
      <label className="swap swap-rotate">
        {/* The hidden checkbox controls the state of the dark mode. */}
        <input type="checkbox" onClick={toggleDarkMode} />

        {/* The sun icon is displayed when the dark mode is on. */}
        {/* The className attribute uses the ternary operator to determine the color of the icon. */}
        <MdOutlineWbSunny
          className={`swap-on h-6 w-6 fill-current ${
            darkMode ? "text-black" : "text-black"
          }`}
        />

        {/* The moon icon is displayed when the dark mode is off. */}
        <BsMoonStars
          className={`swap-off h-6 w-6 fill-current ${
            darkMode ? "text-black" : "text-black"
          }`}
        />
      </label>
    </>
  );
};

// Exporting the ToggleDarkModeIcon component so that it can be used in other parts of the application.
export default ToggleDarkModeIcon;
