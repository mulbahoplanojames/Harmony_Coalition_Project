import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ConfirmNewsLetter = () => {
  const { id, number } = useParams();
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    const fetchNewsletterData = async () => {
      try {
        const decodedId = decodeURIComponent(id);
        const decodedNumber = decodeURIComponent(number);

        const response = await axios.get(
          `http://192.168.1.68:8000/newsletter/confirm/${decodedId}/${decodedNumber}/`
        );

        if (response.status === 200) {
          setIsVerified(true);
        } else {
          setIsVerified(false);
        }
      } catch (error) {
        setIsVerified(false);
        console.log("Error Fetching User Data:", error);
      }
    };

    if (id && number) {
      fetchNewsletterData();
    }
  }, [id, number]);

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
