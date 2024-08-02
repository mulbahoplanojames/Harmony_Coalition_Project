import axios from "axios";
import { useContext, createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

// Creating the AuthContext
const AuthContext = createContext();

// Creating the AuthProvider
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const navigate = useNavigate();

  const BASE_URL = import.meta.env.VITE_REACT_BASE_URL;

  const [errorMessage, setErrorMessage] = useState("");
  const [resetPasswordErrorMessage, setResetPasswordErrorMessage] =
    useState("");

  //? ===========================================================================================
  /*
  The loginAction function handles user login by sending a POST request to the
  authentication endpoint, updating the user and token state upon a successful
  response, and storing the token in local storage.
  */

  const API_ENDPOINT = `${BASE_URL}/students/api/login/`;

  let authInterceptor;

  authInterceptor = axios.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Token ${token}`;
    }
    return config;
  });

  const loginAction = async (data) => {
    try {
      const response = await axios.post(API_ENDPOINT, data);

      if (response.data && response.data.token) {
        // Update local state
        setUser(response.data.user);
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        console.log(response);

        // Call the authInterceptor to store the token
        axios.interceptors.request.use(authInterceptor);

        navigate("/student_profile_settings");
      } else {
        setErrorMessage("Invalid Email or Password or User Not Found");

        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: "Please try again",
        });

        throw new Error("Invalid response from server");
      }
    } catch (error) {
      console.log("Login failed:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: "Please try again",
      });
      console.log("Check your credentials:", error);
    }
  };

  //? ===============================================================================================

  //! ================================================================================================

  const LOGOUT_ENDPOINT = `${BASE_URL}/accounts/logout/`;

  const logOut = async () => {
    try {
      await axios.post(LOGOUT_ENDPOINT, {
        headers: {
          Authorization: `Token ${localStorage.getItem("token")}`,
        },
      });
      localStorage.removeItem("token");
      axios.interceptors.request.eject(authInterceptor);
      //delete axios.defaults.headers.common["Authorization"];
      setUser(null);
      setToken(null);
      navigate("/");
    } catch (error) {
      // Display an error message to the user
      console.error("Logout failed:", error);
    }
  };

  //? ===============================================================================================

  const LOGOUT_ALL_DEVICES_ENDPOINT = `${BASE_URL}/accounts/sessions/logoutall/`;

  const logOutAllDevices = async () => {
    try {
      await axios.post(LOGOUT_ALL_DEVICES_ENDPOINT, {
        headers: {
          Authorization: `Token ${localStorage.getItem("token")}`,
        },
      });
      localStorage.removeItem("token");
      axios.interceptors.request.eject(authInterceptor);
      //delete axios.defaults.headers.common["Authorization"];
      setUser(null);
      setToken(null);
      navigate("/");
    } catch (error) {
      // Display an error message to the user
      console.error("Logout failed:", error);
    }
  };

  //! ===============================================================================================

  /*
  The loginAction function handles user login by sending a POST request to the
  authentication endpoint, updating the user and token state upon a successful
  response, and storing the token in local storage.
  */

  const ADMIN_LOGIN_API_ENDPOINT = `${BASE_URL}/accounts/login/`;
  const AdminLoginAction = async (data) => {
    try {
      const response = await axios.post(ADMIN_LOGIN_API_ENDPOINT, data);

      if (response.data && response.data.token) {
        // Update local state
        setUser(response.data.user);
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        console.log(response);

        // Call the authInterceptor to store the token
        axios.interceptors.request.use(authInterceptor);

        navigate("/admin");
      } else {
        setErrorMessage("Invalid Email or Password");
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: "Please try again",
        });
        throw new Error("Invalid response from server");
      }
    } catch (error) {
      console.log("Login failed:", error);
      console.log("Check your credentials:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...", 
        text: "Something went wrong!",
        footer: "Please try again",
      });
    }
  };

  //? ===========================================================================================

  // logOut function to log the Admin out

  const AdminLogout = async () => {
    try {
      await axios.post(LOGOUT_ENDPOINT, {
        headers: {
          Authorization: `Token ${localStorage.getItem("token")}`,
        },
      });
      localStorage.removeItem("token");
      axios.interceptors.request.eject(authInterceptor);
      //delete axios.defaults.headers.common["Authorization"];
      setUser(null);
      setToken(null);
      navigate("/admin/log-in");
    } catch (error) {
      console.error("Logout failed:", error);
      // Display an error message to the user
    }
  };

  //? ====================================================================================
  // A function to reset the password
  const resetPasswordAction = async (resetPassword, id, token) => {
    try {
      const response = await axios.patch(`${BASE_URL}/accounts/password/new/`, {
        password: resetPassword,
        token: token,
        uid: id,
      });

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
      const response = await axios.post(`${BASE_URL}/newsletter/subscribe/`, {
        email: newsLetterEmail,
      });
      console.log(response.data);
    } catch (error) {
      console.log("From the News Letter", error);
    }
  };
  //! ====================================================================================

  // Getting the students data from the API endpoint and passing it through the context provider to be used in other components

  const [studentInfo, setStudentInfo] = useState({
    first_name: "",
    last_name: "",
    email: "",
    department: "",
    gender: "",
    rollNumber: "",
    course: "",
    birth_date: "",
    address: "",
    phoneNumber: "",
    image: "",
    visaStartDate: "",
    visaEndDate: "",
    visaStatus: "",
    visaImage: "",
    academic_year: "",
  });

  //! Get Student Info
  useEffect(() => {
    axios
      .get(`${BASE_URL}/students/api/profile/`, {
        headers: {
          Authorization: `Token ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response.data.student);

        setStudentInfo({
          first_name: response.data.student.user.first_name,
          last_name: response.data.student.user.last_name,
          email: response.data.student.user.email,
          department: response.data.student.department,
          gender: response.data.student.gender,
          rollNumber: response.data.student.roll_number,
          course: response.data.student.course,
          birth_date: response.data.student.birth_date,
          address: response.data.student.address,
          phoneNumber: response.data.student.user.phone_number,
          image: response.data.student.user.picture,
          visaStartDate: response.data.student.visa_start,
          visaEndDate: response.data.student.visa_end,
          visaImage: response.data.student.visa_image,
          visaStatus: response.data.student.visa_status,
          academic_year: response.data.student.academic_year,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [BASE_URL]);

  // Log studentInfo whenever it changes
  useEffect(() => {
    console.log("Student info", studentInfo);
  }, [studentInfo]);

  //? ====================================================================================

  // Creating the values that will be passed to the context
  const value = {
    user,
    token,
    loginAction,
    logOut,
    logOutAllDevices,
    resetPasswordAction,
    errorMessage,
    setErrorMessage,
    resetPasswordErrorMessage,
    setResetPasswordErrorMessage,
    newsLetterAction,
    AdminLoginAction,
    AdminLogout,
    studentInfo,
    setStudentInfo,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

// Using the AuthContext and storing it in the useAuth function to be accessed in other components
export const useAuth = () => {
  return useContext(AuthContext);
};
