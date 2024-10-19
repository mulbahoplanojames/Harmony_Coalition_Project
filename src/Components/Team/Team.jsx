// Importing the components that will be used in the Team component.
import CurrentLeaderShip from "../Current_LeaderShip/CurrentLeaderShip";
import PastLeaderShip from "../Past_LeaderShip/PastLeaderShip";

const Team = () => {
  // Using the useContext hook to access the darkMode property from the AppContext.

  return (
    <>
      <div className={`pb-14 pt-20 md:px-8 px-4 rounded-sm `}>
        {/* Rendering the CurrentLeaderShip component. */}
        <CurrentLeaderShip />
        {/* Rendering the PastLeaderShip component. */}
        <PastLeaderShip />
      </div>
    </>
  );
};

export default Team;
