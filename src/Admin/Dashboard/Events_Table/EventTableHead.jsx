const EventTableHead = () => {
  return (
    <>
      <thead className="text-center bg-slate-100 text-base">
        <tr>
          <th>#</th>
          <th>Image</th>
          <th>Title</th>
          <th>Start Date </th>
          <th>End Date </th>
          <th>Start Time</th>
          <th>End Time</th>
          <th>Venue</th>
          <th>Description</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
    </>
  );
};

export default EventTableHead;
