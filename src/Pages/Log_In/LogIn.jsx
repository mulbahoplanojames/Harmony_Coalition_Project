import { useState } from "react";
import { Link } from "react-router-dom";
import singUp_image from "/src/assets/study1-removebg-preview.png";
import { CgArrowLeftR } from "react-icons/cg";
import { useAuth } from "../../Context/AuthContext";

const LogIn = () => {
  // Creating the state to hold the user data from the form
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  // getting the useAuth function from the AuthContext
  const auth = useAuth();

  // handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (userData.email !== "" && userData.password !== "") {
      auth.loginAction(userData);
      return;
    } else {
      alert("Please fill all the fields");
    }
  };

  return (
    <>
      <div className="flex justify-center items-center w-full h-fit py-14  bg-primary_main ">
        <div className="md:w-[80%] w-[95%] h-fit grid md:grid-cols-2 grid-cols-1 bg-white">
          <div className=" w-full md:h-full h-[15rem] overflow-hidden bg-purple-200">
            <img
              src={singUp_image}
              alt="Sign up illustration"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="py-10 px-6">
            <h1 className="md:text-3xl text-2xl font-bold pb-4">
              Welcome Back
            </h1>
            <p className="text-base pb-6">
              The leadership of the Association of the Liberian Students at
              Kigali Independent University welcomes you to the official
              platform of the Association.
            </p>

            <form className="relative" onSubmit={handleSubmit}>
              {/* // Email */}
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

              {/* // Password and Number */}
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

              {/* // Create account Button */}
              <button
                type="submit"
                className=" bg-primary_main md:text-lg textb text-white border-none rounded-md mt-5 mb-4 hover:bg-opacity-70 py-2 md:px-6 px-4 mr-4"
              >
                Login
              </button>

              {/* // Back home Button */}
              <Link
                to="/"
                className="border-2 border-primary_main rounded-full md:p-3 p-2 text-black inline-block absolute md:bottom-0 bottom-16 right-0"
                onClick={() => {
                  window.scrollTo(0, 3000);
                }}
              >
                <CgArrowLeftR className="md:text-2xl text-xl animate-pulse" />
              </Link>

              {/* // Already have an account Log in */}
              <p className="text-lg md:pt-4 pt-6">
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
    </>
  );
};
export default LogIn;
