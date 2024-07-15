import axios from "axios";
import { useContext, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "./AppContext";

// Creating the AuthContext
const AuthContext = createContext();

// Creating the AuthProvider
const AuthProvider = ({ children }) => {
  // Setting up the user and token state
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const navigate = useNavigate();

  // Getting the setIsLoggedIn state from the AppContext
  const { setIsLoggedIn } = useContext(AppContext);

  const API_ENDPOINT = "http://192.168.1.12:8000/api/login/";
  const LOGOUT_ENDPOINT = "http://192.168.1.12:8000/api/logout/";

  /*
    The loginAction function handles user login by sending a POST request to the 
    authentication endpoint, updating the user and token state upon a successful
    response, and storing the token in local storage.
  */
  const loginAction = async (data) => {
    try {
      const response = await axios.post(API_ENDPOINT, data);
      console.log(data);

      if (response.data && response.data.token) {
        // Update local state
        console.log(response);
        setUser(response.data.user);
        setToken(response.data.token);
        console.log(token);
        console.log(user);
        localStorage.setItem("token", response.data.token);

        // Set Authorization header for subsequent requests
        axios.defaults.headers.common[
          "Authorization"
        ] = `Token ${response.data.token}`;

        navigate("/student_profile_settings");

        setIsLoggedIn(true);
      } else {
        throw new Error("Invalid response from server");
      }
    } catch (error) {
      // Handle error state or show error message to user
      console.log("Login failed:", error);
      console.log("Check your credentials:", error);
    }
  };

  // logOut function to log the user out
  const logOut = async () => {
    try {
      await axios.post(LOGOUT_ENDPOINT, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      setUser(null);
      setToken(null);
      localStorage.removeItem("token");
      delete axios.defaults.headers.common["Authorization"];
      navigate("/");
      setIsLoggedIn(false);
    } catch (error) {
      // Handle error state or show error message to user
      console.log("Logout failed:", error);
    }
  };

  // Creating the values that will be passed to the context
  const value = {
    user,
    token,
    loginAction,
    logOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

// Using the AuthContext and storing it in the useAuth function to be accessed in other components
export const useAuth = () => {
  return useContext(AuthContext);
};
