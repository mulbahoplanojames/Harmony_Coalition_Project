import { BsMoonStars } from "react-icons/bs";
import { MdOutlineWbSunny } from "react-icons/md";
import { AppContext } from "../../Context/AppContext";
import { useContext } from "react";

const ToggleDarkModeIcon = () => {
  const { toggleDarkMode } = useContext(AppContext);

  return (
    <>
      <label className="swap swap-rotate">
        {/* this hidden checkbox controls the state */}
        <input type="checkbox" onClick={toggleDarkMode} />

        {/* sun icon */}
        <MdOutlineWbSunny className="swap-on h-6 w-6 fill-current" />

        {/* moon icon */}
        <BsMoonStars className="swap-off h-6 w-6 fill-current" />
      </label>
    </>
  );
};

export default ToggleDarkModeIcon;
