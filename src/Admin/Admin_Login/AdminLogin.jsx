import { useState } from "react";
import { useAuth } from "../../Context/AuthContext";
import { Navigate } from "react-router-dom";

const AdminLogin = () => {
  const [adminLoginData, setAdminLoginData] = useState({
    email: "",
    password: "",
  });

  const auth = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (adminLoginData.email !== "" || adminLoginData.password !== "") {
      // Todo : Admin Login Login
      auth.setAdminLogin(false);
      // console.log(auth.adminLogin);
      //   todo : adminLoginAction function in the Auth context
      //   auth.adminLoginAction(adminLoginData);
      setAdminLoginData({
        email: "",
        password: "",
      });
      auth.setErrorMessage("");
    } else {
      auth.setErrorMessage("Please fill all the fields");
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
            <div className="w-full">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                className="border-2 rounded-md border-black w-full h-10 px-2 outline-none"
                placeholder="Enter password"
                value={adminLoginData.password}
                onChange={(e) => {
                  setAdminLoginData({
                    ...adminLoginData,
                    password: e.target.value,
                  });
                }}
              />
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
