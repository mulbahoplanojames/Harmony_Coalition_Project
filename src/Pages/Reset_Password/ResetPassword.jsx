import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import singUp_image from "/src/assets/resetpassword.png";
import { CgArrowLeftR } from "react-icons/cg";
import { useAuth } from "../../Context/AuthContext";
import axios from "axios";

import eyeOpen from "/src/assets/eye_open.png";
import eyeClose from "/src/assets/eye_close.png";

// This component is responsible for rendering the login page
const ResetPassword = () => {
  // The state is an object that holds the user's data from the form
  const [resetPassword, setResetPassword] = useState("");
  const [resetPasswordConfirm, setResetPasswordConfirm] = useState("");

  // State to check if the password is visibl or not
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  // The useParams hook returns an object that contains the route parameters
  const { id, token } = useParams();

  const [isResponseOk, setIsResponseOk] = useState(false);

  // The useAuth hook returns the loginAction function from the AuthContext
  const auth = useAuth();

  // This function is called when the form is submitted
  const handleResetSubmit = (e) => {
    // Prevent the default form submission behavior
    e.preventDefault();

    // If the user has filled in both the email and password fields
    if (
      resetPassword !== "" &&
      resetPasswordConfirm !== "" &&
      resetPassword === resetPasswordConfirm
    ) {
      // Call the loginAction function from the AuthContext
      auth.resetPasswordAction(resetPassword, id, token);
      setResetPassword("");
      setResetPasswordConfirm("");
      auth.setResetPasswordErrorMessage("");
      console.log(resetPassword, resetPasswordConfirm);
      // Return to prevent the rest of the function from running
      return;
    } else {
      // If the user has not filled in both fields, alert them
      auth.setResetPasswordErrorMessage(
        "Password Don't match || Invalid input field"
      );
    }
  };

  // The base Url of the API
  const BASE_URL = import.meta.env.VITE_REACT_BASE_URL;

  useEffect(() => {
    const fetchUserPassword = async () => {
      try {
        const decodedId = decodeURIComponent(id);
        const decodedToken = decodeURIComponent(token);

        const response = await axios.get(
          `${BASE_URL}/accounts/checkreset-link/${decodedId}/${decodedToken}/`
        );

        console.log(response.data);

        if (response.status === 200) {
          setIsResponseOk(true);
        } else {
          setIsResponseOk(false);
        }
        console.log(isResponseOk);
      } catch (error) {
        console.log(error);
      }
    };

    if (id && token) {
      fetchUserPassword();
    }
  }, [id, token, BASE_URL, isResponseOk]);

  return (
    <div className="flex justify-center items-center w-full h-fit py-14  bg-primary_main text-black">
      <div className="md:w-[80%] w-[95%] h-fit grid md:grid-cols-2 grid-cols-1 bg-white">
        <div className=" w-full md:h-full h-[15rem] overflow-hidden bg-purple-200">
          <img
            src={singUp_image}
            alt="Sign up illustration"
            className="w-full h-full object-contain"
          />
        </div>
        {/* // The right side of the page contains a form */}
        <div className="py-10 px-6">
          <h1 className="md:text-3xl text-2xl font-bold pb-4">
            Enter New Password
          </h1>
          <p className="text-base pb-6">
            To create a new password, please enter your new password in the
            field below and confirm it by entering it again in the second field.
            Once you have entered your new password, click the Submit button to
            update your password. Make sure your new password is strong and
            secure, combining letters, numbers, and special characters for
            better protection. If you encounter any issues, please contact our
            support team for assistance.
          </p>

          <form className="relative" onSubmit={handleResetSubmit}>
            {/* // The Reset Password input field */}
            <div className="mb-4">
              <label htmlFor="new password" className="inline-block pb-2">
                New Password
              </label>
              <div className="w-full h-12 bg-[#eaeef3]  px-1 gap-2 rounded-md outline-none flex justify-between overflow-hidden">
                <input
                  type={passwordVisible ? "text" : "password"}
                  name="password"
                  placeholder="Enter New Password Length 8-20"
                  // required
                  value={resetPassword}
                  onChange={(e) => setResetPassword(e.target.value)}
                  className="h-full  bg-[#eaeef3] w-full outline-none px-3"
                />
                {passwordVisible ? (
                  <img
                    src={eyeClose}
                    alt=""
                    className="w-6 h-6 mt-3 cursor-pointer"
                    onClick={() => {
                      setPasswordVisible(!passwordVisible);
                    }}
                  />
                ) : (
                  <img
                    src={eyeOpen}
                    alt=""
                    className="w-6 h-6 mt-3 cursor-pointer"
                    onClick={() => {
                      setPasswordVisible(!passwordVisible);
                    }}
                  />
                )}
              </div>
            </div>
            {/* // The CONFIRM Reset password input field */}
            <div className="mb-4">
              <label htmlFor="email" className="inline-block pb-2">
                Confirm New Password
              </label>
              <div className="w-full h-12 bg-[#eaeef3]  px-1 gap-2 rounded-md outline-none flex justify-between overflow-hidden">
                <input
                  type={confirmPasswordVisible ? "text" : "password"}
                  name="password"
                  placeholder="Confirm New Password Length 8-20"
                  // required
                  value={resetPasswordConfirm}
                  onChange={(e) => setResetPasswordConfirm(e.target.value)}
                  className="h-full  bg-[#eaeef3] w-full outline-none px-3"
                />
                {confirmPasswordVisible ? (
                  <img
                    src={eyeClose}
                    alt=""
                    className="w-6 h-6 mt-3 cursor-pointer"
                    onClick={() => {
                      setConfirmPasswordVisible(!confirmPasswordVisible);
                    }}
                  />
                ) : (
                  <img
                    src={eyeOpen}
                    alt=""
                    className="w-6 h-6 mt-3 cursor-pointer"
                    onClick={() => {
                      setConfirmPasswordVisible(!confirmPasswordVisible);
                    }}
                  />
                )}
              </div>
            </div>

            <p className="text-red-500 text-base">
              {auth.resetPasswordErrorMessage}
            </p>
            {/* // The button to submit the form */}
            <button
              type="submit"
              className=" bg-primary_main md:text-lg textb text-white border-none rounded-md mt-3 mb-4 hover:bg-opacity-70 py-2 md:px-6 px-4 mr-4"
            >
              Submit
            </button>
            {/* // The back home button */}
            <Link
              to="/"
              className="border-2 border-primary_main rounded-full  p-2 text-black inline-block absolute md:bottom-0 bottom-3 right-0"
              onClick={() => {
                window.scrollTo(0, 3000);
              }}
            >
              <CgArrowLeftR className="md:text-2xl text-xl animate-pulse" />
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ResetPassword;
