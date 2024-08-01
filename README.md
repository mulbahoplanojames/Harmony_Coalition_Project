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

const API_ENDPOINT = `http://192.168.1.68:8000/students/api/login/`;
const LOGOUT_ENDPOINT = `http://192.168.1.68:8000/students/api/logout/`;

// A state to display an error message if login fails
const [errorMessage, setErrorMessage] = useState("");

// A state to display an error message if reset password fails
const [resetPasswordErrorMessage, setResetPasswordErrorMessage] =
useState("");

// Admin Login State
const [adminLogin, setAdminLogin] = useState(true);

console.log(adminLogin);

//? ===========================================================================================
/_
The loginAction function handles user login by sending a POST request to the
authentication endpoint, updating the user and token state upon a successful
response, and storing the token in local storage.
_/
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
const resetPasswordAction = async (resetPassword, id, token) => {
try {
const response = await axios.patch(
`http://192.168.1.68:8000/students/api/set-newpassword/`,
{
password: resetPassword,
token: token,
uid: id,
}
);

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }

};
//? ====================================================================================

//! ====================================================================================
// This function a called when the user submit their for our NewsLatter Subscription
const newsLetterAction = async (newsLetterEmail) => {
try {
const response = await axios.post(
`http://192.168.1.68:8000/newsletter/subscribe/`,
{
email: newsLetterEmail,
}
);
console.log(response.data);
} catch (error) {
console.log("From the News Letter", error);
}
};
//! ====================================================================================

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
newsLetterAction,

    // todo : admin login
    adminLogin,
    setAdminLogin,

};

return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

// Using the AuthContext and storing it in the useAuth function to be accessed in other components
export const useAuth = () => {
return useContext(AuthContext);
};

<!--Todo =================================================================================== -->

// // Utility functions
// const storeTokenInLocalStorage = (token) => {
// try {
// const now = new Date();
// const expiry = now.getTime() + 3 _ 24 _ 60 _ 60 _ 1000; // 3 days
// const item = { token, expiry };
// localStorage.setItem("token", JSON.stringify(item));
// console.log("Token stored:", JSON.stringify(item));
// } catch (error) {
// console.error("Error storing token in localStorage:", error);
// }
// };

// const getTokenFromLocalStorage = () => {
// try {
// const itemStr = localStorage.getItem("token");
// console.log("Retrieved item from localStorage:", itemStr);
// if (!itemStr) return null;

// const item = JSON.parse(itemStr);
// const now = new Date();

// if (now.getTime() > item.expiry) {
// localStorage.removeItem("token");
// return null;
// }
// return item.token;
// } catch (error) {
// console.error("Error retrieving token from localStorage:", error);
// // Optionally clear invalid data
// // localStorage.removeItem("token");
// // return null;
// }
// };

// ========================================================

// useEffect(() => {
// if (token) {
// axios.defaults.headers.common["Authorization"] = `Token ${token}`;
// }
// // else {
// // delete axios.defaults.headers.common["Authorization"];
// // }

// console.log(axios.defaults.headers.common["Authorization"]);
// }, [token]);
