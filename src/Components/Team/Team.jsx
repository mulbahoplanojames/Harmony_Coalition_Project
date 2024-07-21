// Importing the necessary hooks from the React library.
import { useContext } from "react";

// Importing the AppContext from the Context/AppContext.jsx file.
import { AppContext } from "../../Context/AppContext";

// Importing the components that will be used in the Team component.
import CurrentLeaderShip from "../Current_LeaderShip/CurrentLeaderShip";
import PastLeaderShip from "../Past_LeaderShip/PastLeaderShip";

const Team = () => {
  // Using the useContext hook to access the darkMode property from the AppContext.
  const { darkMode } = useContext(AppContext);

  return (
    <>
      <div
        className={`pb-14 pt-20 md:px-8 px-4 rounded-sm  ${
          // Conditionally setting the background color based on the darkMode property.
          darkMode ? "bg-#1d232a" : "bg-white"
        }`}
      >
        {/* Rendering the CurrentLeaderShip component. */}
        <CurrentLeaderShip />
        {/* Rendering the PastLeaderShip component. */}
        <PastLeaderShip />
      </div>
    </>
  );
};

export default Team;
