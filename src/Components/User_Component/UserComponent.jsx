// Importing the axios library for making HTTP requests
import axios from "axios";
// Importing the useEffect and useState hooks from the React library
import { useEffect, useState } from "react";
// Importing the Link component and the useParams hook from the react-router-dom library
import { Link, useParams } from "react-router-dom";

// The path to the verified image asset
const verifiedImage = "/src/assets/verified.jpg";

const UserComponent = () => {
  const { id, token } = useParams();
  const [isVerified, setIsVerified] = useState(false);
  const [error, setError] = useState(false);

  // Base URL for the API
  const BASE_URL = import.meta.env.VITE_REACT_BASE_URL;

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const decodedId = decodeURIComponent(id);
        const decodedToken = decodeURIComponent(token);

        const response = await axios.get(
          `${BASE_URL}/accounts/activate/${decodedId}/${decodedToken}/`,
          {
            headers: {
              Accept: "application/json; version=v1",
            },
          }
        );

        if (response.status === 200) {
          setIsVerified(true);
        } else {
          setIsVerified(false);
        }
      } catch (error) {
        setIsVerified(false);
        setError(true);
        console.log("Error Fetching User Data:", error);
      }
    };

    if (id && token) {
      fetchUserData();
    }
  }, [id, token]);

  return (
    <>
      {isVerified ? (
        <div className="w-full h-fit grid place-items-center bg-primary_main px-2 md:py-[4.3rem] py-10">
          <div className="py-10 md:px-12 px-4 rounded-md bg-white grid md:grid-cols-2 grid-cols-1 container mx-auto place-items-center md:gap-12 gap-y-8">
            <div>
              <h1 className="text-3xl font-bold pb-4 md:pr-16 pr-2">
                Your Account has been Successfully Activated
              </h1>
              <p className="text-lg md:pr-16 pb-10">
                Your account has been successfully activated. You can now login
                to your account
              </p>
              <Link
                to={"/log-in"}
                className="bg-primary_main text-white py-3 px-6 rounded-md"
              >
                Back to Login
              </Link>
            </div>
            <div className="w-full md:h-[25rem] h-[14rem] bg-red-300 overflow-hidden border-2 border-primary_main md:order-last order-first">
              <img
                src={verifiedImage}
                alt="Account verified image"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full h-screen flex justify-center flex-col items-center bg-primary_main px-2 md:py-[4.3rem] py-10">
          <h1 className="text-3xl font-bold text-white">
            Account not activated
          </h1>
          <p className="text-lg text-white">Please Try again</p>
        </div>
      )}
    </>
  );
};

export default UserComponent;
