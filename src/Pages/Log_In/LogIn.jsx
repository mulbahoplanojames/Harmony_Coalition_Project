import { useState } from "react";
import { Link } from "react-router-dom";
import singUp_image from "/src/assets/study1-removebg-preview.png";
import { CgArrowLeftR } from "react-icons/cg";
import { useAuth } from "../../Context/AuthContext";

import eyeOpen from "/src/assets/eye_open.png";
import eyeClose from "/src/assets/eye_close.png";

// This component is responsible for rendering the login page
const LogIn = () => {
  // The state is an object that holds the user's data from the form
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  // State to check if the password is visibl or not
  const [passwordVisible, setPasswordVisible] = useState(false);

  // The useAuth hook returns the loginAction function from the AuthContext
  const auth = useAuth();

  // This function is called when the form is submitted
  const handleSubmit = (e) => {
    // Prevent the default form submission behavior
    e.preventDefault();

    // If the user has filled in both the email and password fields
    if (userData.email !== "" && userData.password !== "") {
      // Call the loginAction function from the AuthContext
      auth.loginAction(userData);
      setUserData({
        email: "",
        password: "",
      });
      auth.setErrorMessage("");
      // Return to prevent the rest of the function from running
      return;
    } else {
      // If the user has not filled in both fields, alert them
      // alert("Please fill all the fields");
      auth.setErrorMessage("Invalid Email or Password");
    }
  };

  return (
    <div className="flex justify-center items-center w-full h-fit py-14  bg-primary_main text-black">
      <div className="md:w-[80%] w-[95%] h-fit grid md:grid-cols-2 grid-cols-1 bg-white rounded-md  overflow-hidden">
        <div className=" w-full md:h-full h-[15rem] overflow-hidden bg-purple-200">
          <img
            src={singUp_image}
            alt="Sign up illustration"
            className="w-full h-full object-contain"
          />
        </div>
        {/* // The right side of the page contains a form */}
        <div className="py-10 px-6">
          <h1 className="md:text-3xl text-2xl font-bold pb-4">Welcome Back</h1>
          <p className="text-base pb-6">
            The leadership of the Association of the Liberian Students at Kigali
            Independent University welcomes you to the official platform of the
            Association.
          </p>

          <form className="relative" onSubmit={handleSubmit}>
            {/* // The email input field */}
            <div className="mb-4">
              <label htmlFor="email" className="inline-block pb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                // required
                value={userData.email}
                onChange={(e) =>
                  setUserData({ ...userData, email: e.target.value })
                }
                className="w-full  bg-[#eaeef3] h-12 px-6 rounded-md outline-none"
              />
            </div>
            {/* // The password input field */}
            <div>
              <div>
                <label htmlFor="password" className="inline-block pb-2">
                  Password
                </label>
                <div className="w-full h-12 bg-[#eaeef3]  px-1 gap-2 rounded-md outline-none flex justify-between overflow-hidden">
                  <input
                    type={passwordVisible ? "text" : "password"}
                    name="password"
                    placeholder="Enter New Password"
                    // required
                    value={userData.password}
                    onChange={(e) =>
                      setUserData({ ...userData, password: e.target.value })
                    }
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
              <Link
                to="/forget-password"
                className="text-primary_main pt-3 md:pl-[72%] pl-[55%] text-base inline-block"
                onClick={() => window.scrollTo(0, 8000)}
              >
                Forget Password?
              </Link>
            </div>

            <p className="text-red-500 ">{auth.errorMessage}</p>
            {/* // The button to submit the form */}
            <button
              type="submit"
              className=" bg-primary_main md:text-lg textb text-white border-none rounded-md mt-3 mb-4 hover:bg-opacity-70 py-2 md:px-6 px-4 mr-4"
            >
              Login
            </button>
            {/* // The back home button */}
            <Link
              to="/"
              className="border-2 border-primary_main rounded-full  p-2 text-black inline-block absolute md:bottom-14 bottom-16 right-0"
              onClick={() => {
                window.scrollTo(0, 3000);
              }}
            >
              <CgArrowLeftR className="md:text-2xl text-xl animate-pulse" />
            </Link>
            {/* // The text to navigate to the sign up page */}

            <p className="text-base md:pt-4 pt-6">
              Don&apos;t have an account? &nbsp;
              <Link
                to="/sign-up"
                className="text-primary_main"
                onClick={() => window.scrollTo(0, 8000)}
              >
                Create Account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
export default LogIn;
