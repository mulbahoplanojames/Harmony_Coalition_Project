import { PiUsersThree } from "react-icons/pi";
import { IoPersonAddOutline } from "react-icons/io5";
import { TbUserEdit } from "react-icons/tb";
import { SlEnvolopeLetter } from "react-icons/sl";
import { MdEventAvailable } from "react-icons/md";

const adminNavLinks = [
  {
    id: 1,
    name: "All Students",
    path: "/admin/",
    icon: <PiUsersThree />,
  },
  {
    id: 2,
    name: "Add Student",
    path: "/admin/add-student",
    icon: <IoPersonAddOutline />,
  },
  {
    id: 3,
    name: "Edit Student",
    path: "/admin/edit-student",
    icon: <TbUserEdit />,
  },
  {
    id: 4,
    name: "Send Newsletter",
    path: "/admin/send-newsletter",
    icon: <SlEnvolopeLetter />,
  },
  {
    id: 5,
    name: "Add Events",
    path: "/admin/add-events",
    icon: <MdEventAvailable />,
  },
];

export default adminNavLinks;

// =========================================================================
import stephen from "/src/assets/stephen.jpeg";
// import eric from "/src/assets/eric.jpeg";
import jeff from "/src/assets/jeff.jpeg";
import kelvin from "/src/assets/kelvin.jpeg";
import girl from "/src/assets/girl.jpeg";
import pro from "/src/assets/pro.jpeg";

import { MdModeEdit, MdDeleteForever } from "react-icons/md";

export const DeleteBtn = () => {
  return (
    <div className="bg-red-200 text-md cursor-pointer p-1 rounded-md">
      <MdDeleteForever className="text-red-500 " />
    </div>
  );
};

export const EditBtn = () => {
  return (
    <div className="bg-green-200 cursor-pointer text-md p-1 rounded-md">
      <MdModeEdit className="text-green-500" />
    </div>
  );
};

export const CombinedBtn = () => {
  return (
    <>
      <div className="flex justify-between items-center gap-2">
        <EditBtn />
        <DeleteBtn />
      </div>
    </>
  );
};

export const registerStudents = [
  {
    id: 1,
    avatar: stephen,
    firstName: "Jane",
    lastName: "Smith",
    email: "janesmith@example.com",
    phoneNumber: "234-567-8901",
    address: "456 Oak St",
    birthDate: "02/15/1995",
    gender: "Female",
    department: "Electrical Engineering",
    visaStartDate: "03/15/2022",
    visaEndDate: "03/15/2023",
    visaStatus: "Approved",
    visaImage: "visa-image-2.jpg",
    status: <CombinedBtn />,
  },
  {
    id: 2,
    avatar: pro,
    firstName: "Michael",
    lastName: "Johnson",
    email: "m.johnson@example.com",
    phoneNumber: "345-678-9012",
    address: "789 Pine Ave",
    birthDate: "07/20/1988",
    gender: "Male",
    department: "Software Engineering",
    visaStartDate: "04/10/2022",
    visaEndDate: "04/10/2023",
    visaStatus: "Approved",
    visaImage: "visa-image-3.jpg",
    status: <CombinedBtn />,
  },
  {
    id: 3,
    avatar: kelvin,
    firstName: "Susan",
    lastName: "Williams",
    email: "s.williams@example.com",
    phoneNumber: "456-789-0123",
    address: "890 Elm St",
    birthDate: "11/05/1992",
    gender: "Female",
    department: "Finance",
    visaStartDate: "05/20/2022",
    visaEndDate: "05/20/2023",
    visaStatus: "Pending",
    visaImage: "visa-image-4.jpg",
    status: <CombinedBtn />,
  },
  {
    id: 4,
    avatar: girl,
    firstName: "David",
    lastName: "Brown",
    email: "david.brown@example.com",
    phoneNumber: "567-890-1234",
    address: "234 Maple Dr",
    birthDate: "09/12/1985",
    gender: "Male",
    department: "Human Resources",
    visaStartDate: "06/01/2022",
    visaEndDate: "06/01/2023",
    visaStatus: "Approved",
    visaImage: "visa-image-5.jpg",
    status: <CombinedBtn />,
  },
  {
    id: 5,
    avatar: jeff,
    firstName: "Emily",
    lastName: "Jones",
    email: "emily.jones@example.com",
    phoneNumber: "678-901-2345",
    address: "567 Cedar Ln",
    birthDate: "04/30/1991",
    gender: "Female",
    department: "Public Relations",
    visaStartDate: "07/15/2022",
    visaEndDate: "07/15/2023",
    visaStatus: "Approved",
    visaImage: "visa-image-6.jpg",
    status: <CombinedBtn />,
  },
];
