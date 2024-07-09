import singUp_image from "/src/assets/study1-removebg-preview.png";
import { CgArrowLeftR } from "react-icons/cg";
import { AppContext } from "../../Context/AppContext";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setEPassword] = useState("");

  const { setIsLoggedIn } = useContext(AppContext);
  const navigate = useNavigate();

  // TODO : The axios call for login should be here in the handleLogin function
  const handleLogin = (event) => {
    event.preventDefault();

    if (email === "" || password === "") {
      alert("Please fill all the fields");
    } else {
      setIsLoggedIn(true);
      navigate("/student_profile_settings");
      console.log("is logged in");
    }
  };

  // API URL FROM THE ENV FILE
  const API_ENDPOINT = `${import.meta.env.VITE_API_URL}/students`;

  axios
    .get(API_ENDPOINT)
    .then((response) => {
      console.log(response.data);

      // TODO : Check if the email and password are correct
      if (
        response.data.email === email &&
        response.data.password === password
      ) {
        setIsLoggedIn(true);
        navigate("/student_profile_settings");
      } else {
        setIsLoggedIn(false);
      }
    })
    .catch((error) => {
      console.log(error);
      setIsLoggedIn(false);
    });

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

            <form className="relative" onSubmit={handleLogin}>
              {/* // Email */}
              <div className="mb-4">
                <label htmlFor="email" className="inline-block pb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                    value={password}
                    onChange={(e) => setEPassword(e.target.value)}
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
