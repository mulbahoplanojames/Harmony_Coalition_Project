import { useState } from "react";
import { useAuth } from "../../Context/AuthContext";

import eyeOpen from "/src/assets/eye_open.png";
import eyeClose from "/src/assets/eye_close.png";

const AdminLogin = () => {
  const [adminLoginData, setAdminLoginData] = useState({
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
    if (adminLoginData.email !== "" && adminLoginData.password !== "") {
      // Call the loginAction function from the AuthContext
      auth.AdminLoginAction(adminLoginData);
      setAdminLoginData({
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
    <>
      <div className="w-full h-full grid place-items-center px-2">
        <div className="md:w-[25rem] w-full h-fit py-8 px-6 bg-white rounded-md">
          <h1 className="text-xl pb-4">Admin Login</h1>
          <form onSubmit={handleSubmit}>
            <div className="w-full mb-4">
              <label htmlFor="email" className="inline-block pb-1 text-base">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="border-2 rounded-md border-black w-full h-10 px-2 outline-none"
                placeholder="Enter email"
                value={adminLoginData.email}
                onChange={(e) => {
                  setAdminLoginData({
                    ...adminLoginData,
                    email: e.target.value,
                  });
                }}
              />
            </div>
            {/* <div className="w-full">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                className="border-2 rounded-md border-black w-full h-10 px-2 outline-none text-black"
                placeholder="Enter password"
                value={adminLoginData.password}
                onChange={(e) => {
                  setAdminLoginData({
                    ...adminLoginData,
                    password: e.target.value,
                  });
                }}
              />
            </div> */}
            <div>
              <label htmlFor="password" className="inline-block pb-2">
                Password
              </label>
              <div className="w-full h-12 bg-[#ebeef1]  px-1 gap-2 rounded-md outline-none flex justify-between overflow-hidden neu_input text-black">
                <input
                  type={passwordVisible ? "text" : "password"}
                  name="password"
                  placeholder="Enter New Password"
                  // required
                  value={adminLoginData.password}
                  onChange={(e) =>
                    setAdminLoginData({
                      ...adminLoginData,
                      password: e.target.value,
                    })
                  }
                  className="h-full  bg-[#eaeef3] w-full outline-none px-3 "
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

            <p className="text-red-600  pt-3">{auth.errorMessage}</p>
            <button
              type="submit"
              className="bg-primary_main py-2 hover:opacity-80 px-5 text-white rounded-md mt-2"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
