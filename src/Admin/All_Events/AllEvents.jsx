import BreadCrumb from "../Dashboard/BreadCrumb/BreadCrumb";
import EventTable from "../Dashboard/Events_Table/EventsTable";
// import StudentTable from "../Dashboard/Student_Table/StudentTable";

const AllEvents = () => {
  return (
    <>
      <BreadCrumb text={"All Events"} />
      <EventTable />
    </>
  );
};

export default AllEvents;
