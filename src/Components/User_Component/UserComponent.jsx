import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserComponent = () => {
  const { id } = useParams();
  const { token } = useParams();
  //   const [userData, setUserData] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const decodedId = decodeURIComponent(id);
        const decodedToken = decodeURIComponent(token);

        // console.log(
        //   `Fetching data from: http://192.168.1.19:8000/students/api/activate_account/${decodedId}/${decodedToken}/`
        // );

        const response = await axios.get(
          `http://192.168.1.19:8000/students/api/activate_account/${decodedId}/${decodedToken}/`
        );

        console.log(response.data);
      } catch (error) {
        console.log("Error Fetching User Data:", error);
      }
    };

    if (id && token) {
      fetchUserData();
    }
  }, [id, token]);

  return (
    <div>
      <h1>Hi, Thanks for registering {"userData"}</h1>
    </div>
  );
};

export default UserComponent;
