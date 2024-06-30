import { BsMoonStars } from "react-icons/bs";
import { MdOutlineWbSunny } from "react-icons/md";

const ToggleDarkMode = () => {
  return (
    <>
      <label className="swap swap-rotate">
        {/* this hidden checkbox controls the state */}
        <input type="checkbox" />

        {/* sun icon */}
        <MdOutlineWbSunny className="swap-on h-10 w-10 fill-current" />

        {/* moon icon */}
        <BsMoonStars className="swap-off h-10 w-10 fill-current" />
      </label>
    </>
  );
};

export default ToggleDarkMode;
