# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
-
-
-
- // const handleLogin = (event) => {
  // event.preventDefault();

// axios
// .post(API_ENDPOINT, {
// body: {
// email: email,
// password: password,
// },
// headers: {
// xsrfCookieName: "XSRF-TOKEN",
// xsrfHeaderName: "X-XSRF-TOKEN",
// },
// })
// .then((response) => {
// if (
// email === response.data.email &&
// password === response.data.password
// ) {
// console.log(response.data);
// setIsLoggedIn(true);
// navigate("/student_profile_settings");
// } else {
// setIsLoggedIn(false);
// }
// })
// .catch((error) => {
// console.log(error);
// setIsLoggedIn(false);
// });
// };

// if (email === "" || password === "") {
// alert("Please fill all the fields");
// } else {
// setIsLoggedIn(true);
// navigate("/student_profile_settings");
// console.log("is logged in");
// }

// axios
// .post(API_ENDPOINT, {
// body: {
// email: email,
// password: password,
// },
// })
// .then((response) => {
// console.log(response.data);

// // TODO : Check if the email and password are correct
// if (
// email === response.data.email &&
// password === response.data.password
// ) {
// setIsLoggedIn(true);
// navigate("/student_profile_settings");
// } else {
// setIsLoggedIn(false);
// }
// })
// .catch((error) => {
// console.log(error);
// setIsLoggedIn(false);
// });
=============================================================================
=============================================================================

// API URL FROM THE ENV FILE
// const API_ENDPOINT = `http://192.168.1.12:8000/api/login/`;

// TODO : The axios call for login should be here in the handleLogin function
// const handleLogin = (event) => {
// event.preventDefault();

// if (email === "" || password === "") {
// alert("Please fill all the fields");
// } else {
// setIsLoggedIn(true);
// navigate("/student_profile_settings");
// console.log("is logged in");
// }

// axios
// .post(
// API_ENDPOINT,
// {
// email: loggedinEmail,
// password: loggedinPassword,
// },
// {
// withCredentials: true, // Ensure cookies are sent with the request
// headers: {
// "Content-Type": "application/json",
// // No need to manually set xsrfCookieName and xsrfHeaderName here
// // Axios will automatically include the CSRF token in the header if available
// },
// }
// )
// .then((response) => {
// console.log("Login successful:", response.data);

// setIsLoggedIn(true);
// navigate("/student_profile_settings");
// })
// .catch((error) => {
// if (error.response) {
// // The request was made and the server responded with a status code
// console.log(error.response.data);
// console.log(error.response.status);
// console.log(error.response.headers);
// } else if (error.request) {
// // The request was made but no response was received
// console.log(error.request);
// } else {
// // Something happened in setting up the request that triggered an Error
// console.log("Error", error.message);
// }
// console.log(error.config);
// setIsLoggedIn(false);
// });
// };

// const getToken = async (loggedinEmail, loggedinPassword) => {
// const response = await axios.post(API_ENDPOINT, {
// loggedinEmail,
// loggedinPassword,
// });
// const token = response.data.token;
// localStorage.setItem("token", token);
// };

// const fetchProtectedData = async () => {
// const token = localStorage.getItem("token");
// const response = await axios.get(API_ENDPOINT, {
// headers: {
// Authorization: `Bearer ${token}`,
// },
// });
// console.log(response.data);
// };

// const handleSubmit = (e) => {
// e.preventDefault();

// try {
// getToken(loggedinEmail, loggedinPassword);
// fetchProtectedData();
// setIsLoggedIn(true);
// } catch (error) {
// console.log(error);
// }
// };
