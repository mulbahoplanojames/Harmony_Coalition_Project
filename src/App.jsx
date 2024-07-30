import { Route, Routes } from "react-router-dom";
import { AppContext } from "./Context/AppContext";
import React, { Suspense, useContext } from "react";

const Layout = React.lazy(() => import("./Layout/Layout"));
const Home = React.lazy(() => import("./Pages/Home/Home"));
const About = React.lazy(() => import("./Pages/About/About"));
const Enrollment = React.lazy(() => import("./Pages/Enrollment/Enrollment"));
const ContactUs = React.lazy(() => import("./Pages/Contact_Us/ContactUs"));

// ===========================================================================================

const StudentProfileSettings = React.lazy(() =>
  import("./Pages/Student_Profile_settings/StudentProfileSettings")
);
const StudentProfile = React.lazy(() =>
  import("./Pages/Student_Profile/StudentProfile")
);

// =============================================================================================

const SchoolOfEBS = React.lazy(() =>
  import("./Depaerments_Details/EBS/SchoolOfEBS")
);
const Law = React.lazy(() => import("./Depaerments_Details/Law/Law"));
const ScienceAndTechnology = React.lazy(() =>
  import("./Depaerments_Details/Computer_Science/ScienceAndTechnology")
);

// ===============================================================================================

const PageNotFound = React.lazy(() =>
  import("./Pages/Page_Not_Found/PageNotFound")
);
const SignUp = React.lazy(() => import("./Pages/Sign_Up/SignUp"));
const LogIn = React.lazy(() => import("./Pages/Log_In/LogIn"));
//==================================================================================================
// Visitor Pages
const VisitHome = React.lazy(() =>
  import("./Pages/Visit_Pages/Visit_Home/VisitHome")
);
const VisitAbout = React.lazy(() =>
  import("./Pages/Visit_Pages/Visit_About/VisitAbout")
);
const VisitContactUs = React.lazy(() =>
  import("./Pages/Visit_Pages/Visit_ContactUs/VisitContactUs")
);
const VisitScienceAndTechnology = React.lazy(() =>
  import("./Depaerments_Details/Computer_Science/VisitScienceAndTechnology")
);
const VisitLaw = React.lazy(() => import("./Depaerments_Details/Law/VisitLaw"));
const VisitSchoolOfEBS = React.lazy(() =>
  import("./Depaerments_Details/EBS/VisitSchoolOfEBS")
);
const VisitPolythenicInstitute = React.lazy(() =>
  import("./Depaerments_Details/Polythenic_Institute/VisitPolythenicInstitute")
);

// ==================================================================================

// Forget Password and Reset Password
import ForgetPassword from "./Pages/ForgetPassword/ForgetPassword";
import ResetPassword from "./Pages/Reset_Password/ResetPassword";
import UserComponent from "./Components/User_Component/UserComponent";

// Scroll To Top
import ScrollToTop from "./Components/Scroll_To_Top/ScrollToTop";

// Admin
import AdminLayout from "./Admin/Admin_Layout/AdminLayout";
import StudentList from "./Admin/Student_List/StudentList";
import AddStudent from "./Admin/Add_Student/AddStudent";
import EditStudent from "./Admin/Edit_Student/EditStudent";
import SendNewsLetter from "./Admin/Send_NewsLetter/SendNewsLetter";
import AdminLogin from "./Admin/Admin_Login/AdminLogin";
import ConfirmNewsLetter from "./Components/User_NewsLetter_Confirm/ConfirmNewsLetter";
import AddEvents from "./Admin/Add_Events/AddEvents";

//! ==================================================================================
// Versel speed insights
import { SpeedInsights } from "@vercel/speed-insights/react";

// Versel Analytics
import { Analytics } from "@vercel/analytics/react";
import Spinner from "./Components/Spinner/Spinner";

const App = () => {
  const { darkModeStyle } = useContext(AppContext);

  return (
    <>
      <div className="h-screen w-screen overflow-y-auto" style={darkModeStyle}>
        <ScrollToTop />
        <SpeedInsights />
        <Analytics />
        <Suspense fallback={<Spinner />}>
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

            <Route path="/admin/" element={<AdminLayout />}>
              <Route index element={<StudentList />} />
              <Route path="/admin/add-student" element={<AddStudent />} />
              <Route path="/admin/edit-student" element={<EditStudent />} />
              <Route
                path="/admin/send-newsletter"
                element={<SendNewsLetter />}
              />
              <Route path="/admin/add-events" element={<AddEvents />} />
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
              home
            />

            {/*//! ================================================================================== */}
            {/* User Component varified if the user account is Acitive  */}
            <Route path="/:id/:token/" element={<UserComponent />} />

            {/* Confirm the user Email id varified for the newsletter */}
            <Route
              path="/newsletter/confirm/:id/:number/"
              element={<ConfirmNewsLetter />}
            />

            {/*//? =================================================================================== */}
            {/* 404 Page */}
            <Route path="*" element={<PageNotFound />} />

            {/* //SignUp page */}
            <Route path="/sign-up" element={<SignUp />} />

            {/* //Login Page */}
            <Route path="/log-in" element={<LogIn />} />

            {/* Admin Login */}
            <Route path="/admin/log-in" element={<AdminLogin />} />

            {/* //Forget Password Page */}
            <Route path="/forget-password" element={<ForgetPassword />} />

            {/* //Reset Password Page */}
            <Route
              path="/:id/:token/reset-password/"
              element={<ResetPassword />}
            />
          </Routes>
        </Suspense>
      </div>
    </>
  );
};

export default App;
