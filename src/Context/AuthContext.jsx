import axios from "axios";
import { useContext, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

// Creating the AuthContext
const AuthContext = createContext();

// Creating the AuthProvider
const AuthProvider = ({ children }) => {
  // Setting up the user and token state
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const navigate = useNavigate();

  const API_ENDPOINT = `http://192.168.1.19:8000/api/login/`;
  const LOGOUT_ENDPOINT = `http://192.168.1.19:8000/api/logout/`;

  // A state to display an error message if login fails
  const [errorMessage, setErrorMessage] = useState("");
  // A state to display an error message if reset password fails
  const [resetPasswordErrorMessage, setResetPasswordErrorMessage] =
    useState("");

  //? ===========================================================================================
  /*
    The loginAction function handles user login by sending a POST request to the 
    authentication endpoint, updating the user and token state upon a successful
    response, and storing the token in local storage.
  */
  const loginAction = async (data) => {
    try {
      const response = await axios.post(API_ENDPOINT, data);
      // console.log(data);

      if (response.data && response.data.token) {
        // Update local state
        console.log(response);
        setUser(response.data.user);
        setToken(response.data.token);
        console.log(token);
        console.log(user);
        localStorage.setItem("token", response.data.token);

        // Remove any previous Authorization header
        // delete axios.defaults.headers.common["Authorization"];

        // set the error message to an empty string
        // setErrorMessage("");

        // Set Authorization header for subsequent requests
        axios.defaults.headers.common[
          "Authorization"
        ] = `Token ${response.data.token}`;

        navigate("/student_profile_settings");
      } else {
        // set the error message to a message from the server
        setErrorMessage("Invalid Email or Password");

        throw new Error("Invalid response from server");
      }
    } catch (error) {
      // Handle error state or show error message to user
      console.log("Login failed:", error);
      console.log("Check your credentials:", error);
    }
  };
  //? ===========================================================================================

  //! ===========================================================================================
  // logOut function to log the user out
  const logOut = async () => {
    try {
      await axios.post(LOGOUT_ENDPOINT, {
        headers: {
          Authorization: `Token ${localStorage.getItem("token")}`,
        },
      });
      localStorage.removeItem("token");
      delete axios.defaults.headers.common["Authorization"];
      setUser(null);
      setToken(null);
      navigate("/");
    } catch (error) {
      // Handle error state or show error message to user
      console.log("Logout failed:", error);
    }
  };
  //! ===========================================================================================

  //? ====================================================================================
  // A function to reset the password
  const resetPasswordAction = async (resetPassword, resetPasswordConfirm) => {
    try {
      const response = await axios.post(API_ENDPOINT, {
        resetPassword,
        resetPasswordConfirm,
      });

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  //? ====================================================================================

  //! ====================================================================================
  // This function a called when the user submit their for our NewsLatter Subscription

  // Creating the values that will be passed to the context
  const value = {
    user,
    token,
    loginAction,
    logOut,
    resetPasswordAction,
    errorMessage,
    setErrorMessage,
    resetPasswordErrorMessage,
    setResetPasswordErrorMessage,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

// Using the AuthContext and storing it in the useAuth function to be accessed in other components
export const useAuth = () => {
  return useContext(AuthContext);
};
