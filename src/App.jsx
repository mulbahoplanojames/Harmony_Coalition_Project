import { Route, Routes } from "react-router-dom";
import { AppContext } from "./Context/AppContext";
import { useContext } from "react";

import Layout from "./Layout/Layout";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Enrollment from "./Pages/Enrollment/Enrollment";
import ContactUs from "./Pages/Contact_Us/ContactUs";

import StudentProfileSettings from "./Pages/Student_Profile_settings/StudentProfileSettings";
import StudentProfile from "./Pages/Student_Profile/StudentProfile";

import PageNotFound from "./Pages/Page_Not_Found/PageNotFound";
import SignUp from "./Pages/Sign_Up/SignUp";
import LogIn from "./Pages/Log_In/LogIn";

// Visitor Pages
import VisitHome from "./Pages/Visit_Pages/Visit_Home/VisitHome";
import VisitAbout from "./Pages/Visit_Pages/Visit_About/VisitAbout";
import VisitContactUs from "./Pages/Visit_Pages/Visit_ContactUs/VisitContactUs";
import ForgetPassword from "./Pages/ForgetPassword/ForgetPassword";
import ResetPassword from "./Pages/Reset_Password/ResetPassword";

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
            <Route path="/contact-us" element={<ContactUs />} />
            <Route
              path="/student_profile_settings"
              element={<StudentProfileSettings />}
            />
            <Route path="/student_profile" element={<StudentProfile />} />
          </Route>

          {/* ================================================================================ */}

          {/* Vistor Pages */}
          <Route path="/home" element={<VisitHome />} />
          <Route path="/visit-about" element={<VisitAbout />} />
          <Route path="/visit-contact-us" element={<VisitContactUs />} />

          {/* =================================================================================== */}
          {/* 404 Page */}
          <Route path="*" element={<PageNotFound />} />

          {/* //SignUp page */}
          <Route path="/sign-up" element={<SignUp />} />

          {/* //Login Page */}
          <Route path="/log-in" element={<LogIn />} />

          {/* //Forget Password Page */}
          <Route path="/forget-password" element={<ForgetPassword />} />

          {/* //Reset Password Page */}
          <Route path="/reset-password" element={<ResetPassword />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
