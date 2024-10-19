  <h1>Project Documentation</h1>
        <h2>Overview</h2>
        <p>
          This project is a web application built using React and React Router.
          The application features multiple pages, routes, and components,
          designed to provide a comprehensive user experience for both visitors
          and authenticated users, including students and administrators.
        </p>

  <h2>Table of Contents</h2>

  <ul>
          <li>Installation</li>
          <li>Project Structure</li>
          <li>Routing</li>
          <li>Components and Pages</li>
          <li>Admin Features</li>
          <li>User Authentication</li>
          <li>Additional Features</li>
          <li>Contributing</li>
          <li>License</li>
  </ul>

  <h2>Installation</h2>
        <span>To run this project locally, follow these steps:</span>
   <ul>
        <li>
            Clone the repository:
            <span>git clone https://github.com/mulbahoplanojames/Harmony_Coalition_Project.git</span>
          </li>
        <li>
            Navigate to the project directory:
            <span>cd your-repo-name</span>
          </li>
        <li>
            Install the dependencies:
            <span>npm install</span>
          </li>
        <li>
            Start the development server:
            <span>npm run dev</span>
          </li>
  </ul>

  <h2>Project Structure</h2>
   <ul>
        <li>src/</li>
        <l1>
          |-- Admin/
          <ul>
            <li>-- Admin_Layout/</li>
            <li>-- Add_Events/</li>
            <li>-- Add_Student/</li>
            <li>-- Admin_Login/</li>
            <li>-- Edit_Student/</li>
            <li>-- Send_NewsLetter/</li>
            <li>--Student_List/</li>
          </ul>
        </l1>
        <l1>
          |-- Components/
          <ul>
            <li>-- Scroll_To_Top/</li>
            <li>-- Sponsers/</li>
          </ul>
        </l1>
        <l1>
          |-- User_Component/
          <ul>
            <li>-- User_NewsLetter_Confirm/</li>
            <li>-- Context/</li>
          </ul>
        </l1>
        <l1>
          |-- Depaerments_Details/
          <ul>
            <li>-- Computer_Science/</li>
            <li>-- EBS/</li>
            <li>-- Law/</li>
            <li>-- Polythenic_Institute/</li>
          </ul>
        </l1>
        <l1>
          |-- Layout/
          <ul>
            <li>-- Pages/</li>
            <li>-- Home/</li>
            <li>-- About/</li>
            <li>-- Contact_Us/</li>
            <li>-- Enrollment/</li>
            <li>-- ForgetPassword/</li>
            <li>-- Log_In/</li>
            <li>-- Page_Not_Found/</li>
            <li>-- Reset_Password/</li>
            <li>-- Sign_Up/</li>
            <li>-- Student_Profile/</li>
            <li>-- Student_Profile_settings/</li>
            <li>-- Visit_Pages/</li>
          </ul>
        </l1>
        <li>-- App.js</li>
        <li>-- index.js</li>
      </ul>

<!--//? ================================================================================================== -->

  <h2>Routing </h2>
      <p>
        The routing for this application is managed using react-router-dom.
        Below is an overview of the routing structure:
      </p>

### Main Pages

      <ul>
        <li>: Home</li>
        <li>/about: About</li>
        <li>/enrollment: Enrollment</li>
        <li>/contact-us: Contact Us</li>
        <li>/student_profile_settings: Student Profile Settings</li>
        <li>/student_profile: Student Profile</li>
        <li>/school-of-science-technology: Science and Technology</li>
        <li>/school-of-ebs: School of EBS</li>
        <li>/school-of-law-social-sciences: Law</li>
      </ul>

### Admin Pages

      <ul>
        <li>/admin/: Admin Layout</li>
        <li>/admin/add-student: Add Student</li>
        <li>/admin/edit-student: Edit Student</li>
        <li>/admin/send-newsletter: Send Newsletter</li>
        <li>/admin/add-events: Add Events</li>
      </ul>

  <h3>Visitor Pages</h3>
      <ul>
        <li>/home: Visit Home</li>
        <li>/visit-about: Visit About</li>
        <li>/visit-contact-us: Visit Contact Us</li>
        <li>
          /visit-school-of-science-technology: Visit Science and Technology
        </li>
        <li>/visit-school-of-social-sciences-and-law: Visit Law</li>
        <li>/visit-school-of-ebs: Visit School of EBS</li>
        <li>/visit-polytechnic-instutute: Visit Polytechnic Institute</li>
        <li>/visit-sponsership: Sponsors</li>
      </ul>

  <h3>Authentication and User Management</h3>
      <ul>
        <li>/sign-up: Sign Up</li>
        <li>/log-in: Log In</li>
        <li>/admin/log-in: Admin Log In</li>
        <li>/forget-password: Forget Password</li>
        <li>/:id/:token/reset-password/: Reset Password</li>
        <li>/:id/:token/: User Component</li>
        <li>newsletter/confirm/:id/:number/: Confirm Newsletter</li>
      </ul>

  <h3>Error Pages</h3>
      <ul>
        <li>: Page Not Found</li>
      </ul>

<!--//? ================================================================================================ -->

  <h2> Components and Pages</h2>

  <h3>Main Pages</h3>

  <ul>
        <li>Home: The landing page of the application.</li>
        <li>About: Information about the institution.</li>
        <li>Enrollment: Enrollment procedures and details.</li>
        <li>Contact Us: Contact information and form.</li>
        <li>Student Profile Settings: Manage student profile settings.</li>
        <li>Student Profile: View student profile.</li>
        <li>
          Science and Technology: Information about the School of Science and
          Technology.
        </li>
        <li>School of EBS: Information about the School of EBS.</li>
        <li>Law: Information about the School of Law and Social Sciences.</li>
  </ul>

  <h3>Visitor Pages</h3>

   <ul>
        <li>Visit Home: Landing page for visitors.</li>
        <li>Visit About: Information for visitors.</li>
        <li>Visit Contact Us: Contact information for visitors.</li>
        <li>
          Visit Science and Technology: School of Science and Technology
          information for visitors.
        </li>
        <li>Visit Law: School of Law information for visitors.</li>
        <li>Visit School of EBS: School of EBS information for visitors.</li>
        <li>
          Visit Polytechnic Institute: Polytechnic Institute information for
          visitors.
        </li>
        <li>Sponsors: Information about sponsors.</li>
  </ul>

  <h3>Admin Features</h3>

  <ul>
        <li>Admin Layout: Main layout for admin pages.</li>
        <li>Student List: View and manage the list of students.</li>
        <li>Add Student: Add a new student to the system.</li>
        <li>Edit Student: Edit an existing student's details.</li>
        <li>Send Newsletter: Send newsletters to users.</li>
        <li>Add Events: Add new events to the system.</li>
   </ul>

  <h3>User Authentication</h3>

  <ul>
        <li>
          The application includes comprehensive user authentication features:
        </li>
        <li>Sign Up: User registration.</li>
        <li>Log In: User login.</li>
        <li>Admin Log In: Admin login.</li>
        <li>Forget Password: Password recovery process.</li>
        <li>Reset Password: Password reset functionality.</li>
        <li>User Component: Verifies if a user's account is active.</li>
        <li>
          Confirm Newsletter: Confirms user email verification for newsletters.
        </li>
  </ul>

   <h3>Additional Features</h3>

   <ul>
        <li>
          Scroll to Top: A component to automatically scroll to the top of the
          page on route change.
        </li>
        <li>Sponsors: Display sponsors' information.</li>
   </ul>
