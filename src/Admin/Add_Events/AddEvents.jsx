import AddEventsForm from "../Dashboard/Add_Events_Form/AddEventsForm";
import BreadCrumb from "../Dashboard/BreadCrumb/BreadCrumb";

const AddEvents = () => {
  return (
    <>
      <BreadCrumb text={"Add Events"} />
      <AddEventsForm />
    </>
  );
};

export default AddEvents;
