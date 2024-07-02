import { useContext } from "react";
import { AppContext } from "../../Context/AppContext";
import CurrentLeaderShip from "../Current_LeaderShip/CurrentLeaderShip";
import PastLeaderShip from "../Past_LeaderShip/PastLeaderShip";

const Team = () => {
  const { darkMode } = useContext(AppContext);

  return (
    <>
      <div
        className={`py-14 md:px-8 px-4 rounded-sm ${
          darkMode ? "bg-#1d232a" : "bg-white"
        }`}
      >
        <CurrentLeaderShip />
        <PastLeaderShip />
      </div>
    </>
  );
};

export default Team;
