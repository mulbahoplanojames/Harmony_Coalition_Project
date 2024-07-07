import { Route, Routes } from "react-router-dom";
import { AppContext } from "./Context/AppContext";
import { useContext } from "react";

import Layout from "./Layout/Layout";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Enrollment from "./Pages/Enrollment/Enrollment";
import StudentPortal from "./Pages/Student_Portal/StudentPortal";
import ContactUs from "./Pages/Contact_Us/ContactUs";

import PageNotFound from "./Pages/Page_Not_Found/PageNotFound";
import SignUp from "./Pages/Sign_Up/SignUp";
import LogIn from "./Pages/Log_In/LogIn";
import StudentProfile, {
  NextProfile,
} from "./Pages/Student_Profile/StudentProfile";

const App = () => {
  const { darkModeStyle } = useContext(AppContext);

  return (
    <>
      <div className="h-screen w-screen overflow-y-auto" style={darkModeStyle}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="/enrollment" element={<Enrollment />} />
            <Route path="/student-portal" element={<StudentPortal />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/student_profile" element={<StudentProfile />} />
            <Route
              path="/student_profile/next_profile"
              element={<NextProfile />}
            />
          </Route>

          {/* 404 Page */}
          <Route path="*" element={<PageNotFound />} />

          {/* //SignUp page */}
          <Route path="/sign-up" element={<SignUp />} />

          {/* //Login Page */}
          <Route path="/log-in" element={<LogIn />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
