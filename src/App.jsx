import { Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";

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

const Privacy = React.lazy(() =>
  import("/src/Pages/Policy_Privacy/Privacy.jsx")
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

//? Visitor Pages
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
const VisitPrivacy = React.lazy(() =>
  import("./Pages/Visit_Pages/Visit_Privacy/VisitPrivacy")
);

//? Recent Upadtes For the Association

const UpdateOne = React.lazy(() =>
  import("./Pages/Recent_Update_Pages/UpdateOne")
);
const UpdateTwo = React.lazy(() =>
  import("./Pages/Recent_Update_Pages/UpdateTwo")
);
const UpdateThree = React.lazy(() =>
  import("./Pages/Recent_Update_Pages/UpdateThree")
);

// ==================================================================================

//? Forget Password and Reset Password
const ForgetPassword = React.lazy(() =>
  import("./Pages/ForgetPassword/ForgetPassword")
);
const ResetPassword = React.lazy(() =>
  import("./Pages/Reset_Password/ResetPassword")
);
const UserComponent = React.lazy(() =>
  import("./Components/User_Component/UserComponent")
);

// ====================================================================================

//? Scroll To Top
import ScrollToTop from "./Components/Scroll_To_Top/ScrollToTop";

// ====================================================================================

//? Admins
const AdminLayout = React.lazy(() =>
  import("./Admin/Admin_Layout/AdminLayout")
);
const StudentList = React.lazy(() =>
  import("./Admin/Student_List/StudentList")
);
const AddStudent = React.lazy(() => import("./Admin/Add_Student/AddStudent"));
const EditStudent = React.lazy(() =>
  import("./Admin/Edit_Student/EditStudent")
);
const SendNewsLetter = React.lazy(() =>
  import("./Admin/Send_NewsLetter/SendNewsLetter")
);
const AdminLogin = React.lazy(() => import("./Admin/Admin_Login/AdminLogin"));
const ConfirmNewsLetter = React.lazy(() =>
  import("./Components/User_NewsLetter_Confirm/ConfirmNewsLetter")
);
const AddEvents = React.lazy(() => import("./Admin/Add_Events/AddEvents"));
const AllEvents = React.lazy(() => import("./Admin/All_Events/AllEvents"));
const EditEvents = React.lazy(() => import("./Admin/Edit_Events/EditEvents"));
const AllNewsLetter = React.lazy(() =>
  import("./Admin/All_Letter/AllNewsLetter")
);
const EditNewsLetter = React.lazy(() =>
  import("./Admin/Edit_NewsLetter/EditNewsLetter")
);

//! ==================================================================================
//? Versel speed insights
import { SpeedInsights } from "@vercel/speed-insights/react";

//? Versel Analytics
import { Analytics } from "@vercel/analytics/react";
import Spinner from "./Components/Spinner/Spinner";

const App = () => {
  // const { darkModeStyle } = useContext(AppContext);

  return (
    <>
      <div className="h-screen w-screen overflow-y-auto">
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
              <Route path="/privacy-policy" element={<Privacy />} />
            </Route>

            {/*//! ================================================================================== */}

            {/*//? Admin Pages */}
            <Route path="/admin/" element={<AdminLayout />}>
              <Route index element={<StudentList />} />
              <Route path="/admin/add-student" element={<AddStudent />} />
              <Route path="/admin/edit-student" element={<EditStudent />} />
              <Route
                path="/admin/send-newsletter"
                element={<SendNewsLetter />}
              />
              <Route path="/admin/add-events" element={<AddEvents />} />
              <Route path="/admin/all-events" element={<AllEvents />} />
              <Route path="/admin/edit-events/:id/" element={<EditEvents />} />
              <Route
                path="/admin/all-newsletter/"
                element={<AllNewsLetter />}
              />
              <Route
                path="/admin/edit-newsletter/:id/"
                element={<EditNewsLetter />}
              />
            </Route>

            {/*//? ================================================================================ */}

            {/*//? Vistor Pages */}
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
            <Route path="/visit-privacy-policy" element={<VisitPrivacy />} />

            {/*//! ================================================================================ */}
            {/*//? Recent Update Pages */}
            <Route
              path="/recent-updates/president-inauguration-speech"
              element={<UpdateOne />}
            />
            <Route
              path="/recent-updates-meeting-with-ig-gregory-coleman-and-senator-francis-saidy-dopoh-ii"
              element={<UpdateTwo />}
            />
            <Route
              path="/recent-updates-academic-excellence-award-ceremony"
              element={<UpdateThree />}
            />

            {/*//! ================================================================================== */}
            {/*//? User Component varified if the user account is Acitive  */}
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
