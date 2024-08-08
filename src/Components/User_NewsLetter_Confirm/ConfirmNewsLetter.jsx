// This component is responsible for verifying a user's subscription to the newsletter.

// Importing axios for making HTTP requests
import axios from "axios";
// Importing useEffect and useState from React
import { useEffect, useState } from "react";
// Importing useParams from React Router
import { useParams } from "react-router-dom";

const ConfirmNewsLetter = () => {
  // Destructuring the useParams object to get the 'id' and 'number' parameters from the URL
  const { id, number } = useParams();
  // Initializing the isVerified state variable to false
  const [isVerified, setIsVerified] = useState(false);

  // Base URL for the API
  const BASE_URL = import.meta.env.VITE_REACT_BASE_URL;

  // useEffect hook to fetch the newsletter data when the component mounts and whenever the 'id' or 'number' parameter changes
  useEffect(() => {
    const fetchNewsletterData = async () => {
      try {
        // Decoding the 'id' and 'number' parameters to handle special characters in the URL
        const decodedId = decodeURIComponent(id);
        const decodedNumber = decodeURIComponent(number);

        // Making a GET request to the newsletter confirmation endpoint with the decoded 'id' and 'number' parameters
        const response = await axios.get(
          `${BASE_URL}/newsletter/confirm/${decodedId}/${decodedNumber}/`
        );

        console.log("response", response.data);

        // Checking if the response status is 200 (OK)
        if (response.status === 200) {
          // If the response status is 200, setting the isVerified state variable to true
          setIsVerified(true);
        } else {
          // If the response status is not 200, setting the isVerified state variable to false
          setIsVerified(false);
        }
      } catch (error) {
        // Handling any errors that occur during the fetch request
        setIsVerified(false);
        console.log("Error Fetching User Data:", error);
      }
    };

    // Checking if both 'id' and 'number' parameters exist
    if (id && number) {
      fetchNewsletterData(); // Calling the fetchNewsletterData function to fetch the newsletter data
    }
  }, [id, number]); // Re-running the useEffect hook whenever the 'id' or 'number' parameter changes

  return (
    <>
      {isVerified ? (
        <div className="grid h-full w-full place-items-center bg-[#1d232a] text-white">
          <h1 className="text-4xl">
            Thank you for subscribing to our newsletter
          </h1>
        </div>
      ) : (
        <div className="grid h-full w-full place-items-center bg-[#1d232a] text-white">
          <h1 className="text-4xl">Invalid Link</h1>
        </div>
      )}
    </>
  );
};

export default ConfirmNewsLetter;
