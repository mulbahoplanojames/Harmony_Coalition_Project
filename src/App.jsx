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

import ScienceAndTechnology from "./Depaerments_Details/Computer_Science/ScienceAndTechnology";
import SchoolOfEBS from "./Depaerments_Details/EBS/SchoolOfEBS";
import Law from "./Depaerments_Details/Law/Law";

import PageNotFound from "./Pages/Page_Not_Found/PageNotFound";
import SignUp from "./Pages/Sign_Up/SignUp";
import LogIn from "./Pages/Log_In/LogIn";

// Visitor Pages
import VisitHome from "./Pages/Visit_Pages/Visit_Home/VisitHome";
import VisitAbout from "./Pages/Visit_Pages/Visit_About/VisitAbout";
import VisitContactUs from "./Pages/Visit_Pages/Visit_ContactUs/VisitContactUs";
import VisitScienceAndTechnology from "./Depaerments_Details/Computer_Science/VisitScienceAndTechnology";
import VisitLaw from "./Depaerments_Details/Law/VisitLaw";
import VisitSchoolOfEBS from "./Depaerments_Details/EBS/VisitSchoolOfEBS";
import VisitPolythenicInstitute from "./Depaerments_Details/Polythenic_Institute/VisitPolythenicInstitute";

// Forget Password and Reset Password
import ForgetPassword from "./Pages/ForgetPassword/ForgetPassword";
import ResetPassword from "./Pages/Reset_Password/ResetPassword";
import UserComponent from "./Components/User_Component/UserComponent";

// Scroll To Top
import ScrollToTop from "./Components/Scroll_To_Top/ScrollToTop";
import AdminLayout from "./Admin/Admin_Layout/AdminLayout";
import StudentList from "./Admin/Student_List/StudentList";

const App = () => {
  const { darkModeStyle } = useContext(AppContext);

  return (
    <>
      <div className="h-screen w-screen overflow-y-auto" style={darkModeStyle}>
        <ScrollToTop />
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
            <Route
              path="/school-of-science-technology"
              element={<ScienceAndTechnology />}
            />
            <Route path="/school-of-ebs" element={<SchoolOfEBS />} />
            <Route path="/school-of-law-social-sciences" element={<Law />} />
            {/* <Route path="/student_profile" element={<Law />} /> */}
          </Route>

          {/*//! ================================================================================== */}

          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<StudentList />} />
          </Route>

          {/*//? ================================================================================ */}

          {/* Vistor Pages */}
          <Route path="/home" element={<VisitHome />} />
          <Route path="/visit-about" element={<VisitAbout />} />
          <Route path="/visit-contact-us" element={<VisitContactUs />} />
          <Route
            path="/visit-school-of-science-technology"
            element={<VisitScienceAndTechnology />}
          />
          <Route
            path="/visit-school-of-social-sciences-and-law"
            element={<VisitLaw />}
          />
          <Route path="/visit-school-of-ebs" element={<VisitSchoolOfEBS />} />
          <Route
            path="/visit-polytechnic-instutute"
            element={<VisitPolythenicInstitute />}
          />

          {/*//! ================================================================================== */}
          {/* User Component  */}
          <Route path="/:id/:token/" element={<UserComponent />} />

          {/*//? =================================================================================== */}
          {/* 404 Page */}
          <Route path="*" element={<PageNotFound />} />

          {/* //SignUp page */}
          <Route path="/sign-up" element={<SignUp />} />

          {/* //Login Page */}
          <Route path="/log-in" element={<LogIn />} />

          {/* //Forget Password Page */}
          <Route path="/forget-password" element={<ForgetPassword />} />

          {/* //Reset Password Page */}
          <Route
            path="/:id/:token/reset-password/"
            element={<ResetPassword />}
          />
        </Routes>
      </div>
    </>
  );
};

export default App;
