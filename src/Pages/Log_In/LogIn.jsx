import { useState } from "react";
import { Link } from "react-router-dom";
import singUp_image from "/src/assets/study1-removebg-preview.png";
import { CgArrowLeftR } from "react-icons/cg";
import { useAuth } from "../../Context/AuthContext";

// This component is responsible for rendering the login page
const LogIn = () => {
  // The state is an object that holds the user's data from the form
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

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
      // Return to prevent the rest of the function from running
      return;
    } else {
      // If the user has not filled in both fields, alert them
      alert("Please fill all the fields");
    }
  };

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
                required
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
                <input
                  type="password"
                  name="password"
                  required
                  value={userData.password}
                  onChange={(e) =>
                    setUserData({ ...userData, password: e.target.value })
                  }
                  className="w-full  bg-[#eaeef3] h-12 px-6 rounded-md outline-none"
                />
              </div>
            </div>

            <p className="text-red-500 pt-4">{auth.errorMessage}</p>
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
              className="border-2 border-primary_main rounded-full  p-2 text-black inline-block absolute md:bottom-20 bottom-28 right-0"
              onClick={() => {
                window.scrollTo(0, 3000);
              }}
            >
              <CgArrowLeftR className="md:text-2xl text-xl animate-pulse" />
            </Link>
            {/* // The text to navigate to the sign up page */}
            <div className="flex justify-between md:gap-10 gap-3">
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

              {/* text to navigate to the forget password page */}
              <p className="text-base md:pt-4 pt-6">
                Forget Password? &nbsp;
                <Link
                  to="/forget-password"
                  className="text-primary_main"
                  onClick={() => window.scrollTo(0, 8000)}
                >
                  Create New Password
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default LogIn;
