import AboutHero from "../../Components/About_Hero/AboutHero";
import OurMission from "../../Components/About_Our_Mission/OurMission";
import OurStory from "../../Components/About_Our_Story/OurStory";
import Card from "../../Interfaces/About_Card/Card";

import totalStudents from "/src/assets/total_Students.svg";
import newStudents from "/src/assets/newStudents.svg";
import connection from "/src/assets/connections.svg";
import FAQ from "../../Components/FAQ/FAQ";
import Gallery from "../../Components/Gallery/Gallery";

const About = () => {
  return (
    <>
      <AboutHero />
      <OurMission />
      <OurStory />
      <FAQ />
      <Gallery />

      <div className="">
        <h1 className="text-center text-4xl capitalize font-semibold pb-10">
          HobSpot By the Numbers
        </h1>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mb-24 md:gap-4 gap-y-6">
          <Card
            image={totalStudents}
            title="200+ Students"
            link="Learn More"
            path={""}
          />
          <Card
            image={newStudents}
            title="100+ New Students"
            link="Learn More"
            path={""}
          />
          <Card
            image={connection}
            title="50+ Connections"
            link="Learn More"
            path={""}
          />
        </div>
      </div>

      {/*  
 Components and Pages
Main Pages
Home: The landing page of the application.
About: Information about the institution.
Enrollment: Enrollment procedures and details.
Contact Us: Contact information and form.
Student Profile Settings: Manage student profile settings.
Student Profile: View student profile.
Science and Technology: Information about the School of Science and Technology.
School of EBS: Information about the School of EBS.
Law: Information about the School of Law and Social Sciences.

Visitor Pages
Visit Home: Landing page for visitors.
Visit About: Information for visitors.
Visit Contact Us: Contact information for visitors.
Visit Science and Technology: School of Science and Technology information for visitors.
Visit Law: School of Law information for visitors.
Visit School of EBS: School of EBS information for visitors.
Visit Polytechnic Institute: Polytechnic Institute information for visitors.
Sponsors: Information about sponsors.

Admin Features
Admin Layout: Main layout for admin pages.
Student List: View and manage the list of students.
Add Student: Add a new student to the system.
Edit Student: Edit an existing student's details.
Send Newsletter: Send newsletters to users.
Add Events: Add new events to the system.
User Authentication
The application includes comprehensive user authentication features:

Sign Up: User registration.
Log In: User login.
Admin Log In: Admin login.
Forget Password: Password recovery process.
Reset Password: Password reset functionality.
User Component: Verifies if a user's account is active.
Confirm Newsletter: Confirms user email verification for newsletters.
Additional Features
Scroll to Top: A component to automatically scroll to the top of the page on route change.
Sponsors: Display sponsors' information.*/}

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
    </>
  );
};

export default About;
