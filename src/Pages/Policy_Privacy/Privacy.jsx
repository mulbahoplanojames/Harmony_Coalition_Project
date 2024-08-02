import { Link } from "react-router-dom";
import Navbar from "../../Constant/Navbar/Navbar";
import { navLinks2 } from "../../Data/Data";
import Footer from "../../Constant/Footer/Footer";

const whyDoWeColllect = [
  {
    id: 1,
    name: "Personal Information",
    text: "We may collect personal information such as your name, email address, phone number, and nationality.",
  },
  {
    id: 2,
    name: "Usage Data:",
    text: "We collect information on how you interact with our website, such as your IP address, browser type, pages visited, and the time and date of your visit.",
  },
];

const whyWeUseYourInformation = [
  {
    id: 1,
    name: "Account Creation: ",
    text: "To create and manage your account",
  },
  {
    id: 2,
    name: "Communication:",
    text: "To send you updates, newsletters, and other information related to your account and our services.",
  },
  {
    id: 3,
    name: "Improvement of Services:",
    text: "To analyze website usage and improve our services and user experience.",
  },
  {
    id: 4,
    name: "Security:",
    text: "To protect against unauthorized access, and ensure the security of our website and users.",
  },
];

/**
 * 3. Sharing Your Information
We do not sell, trade, or otherwise transfer your personal information to outside parties except in the following circumstances:

Service Providers: We may share information with third-party service providers who assist us in operating our website and providing our services.
Legal Requirements: We may disclose your information if required by law or in response to valid requests by public authorities.
 */

const whyWeShareYourInformation = [
  {
    id: 1,
    name: "Service Providers:",
    text: "We may share information with third-party service providers who assist us in operating our website and providing our services.",
  },
  {
    id: 2,
    name: "Legal Requirements:",
    text: "We may disclose your information if required by law or in response to valid requests by public authorities.",
  },
];

const rights = [
  {
    id: 1,
    name: "Access:",
    text: "Request access to your personal information.",
  },
  {
    id: 2,
    name: "Correction:",
    text: "Request corrections to any inaccurate or incomplete personal information.",
  },
  {
    id: 3,
    name: "Deletion:",
    text: "Request the deletion of your personal information after your studies orthey are no longer necessary .",
  },
];

/**
Contact Us
If you have any questions about this Privacy Policy, please contact us at:
 */

const Privacy = () => {
  return (
    <>
      <Navbar navLinks={navLinks2} />
      <div className="pt-[8rem] md:px-[4rem] px-2">
        <h1 className="text-3xl font-semibold pb-4">Privacy Policy</h1>
        <p className="text-lg pb-5">Last Updated: 02/08/2024</p>
        <p className="text-lg pb-5">
          Welcome to All Liberian Students at ULK. We are committed to
          protecting your privacy and ensuring that your personal information is
          handled in a safe and responsible manner. This Privacy Policy outlines
          how we collect, use, and safeguard your information when you use our
          website.
        </p>

        <ol className="text-lg pb-5 list-inside list-decimal">
          <li className="pb-1 text-xl font-semibold">Information We Collect</li>
          <p className="pb-3">
            We may collect the following types of information:
          </p>

          <ul className="list-inside list-disc pb-5">
            {whyDoWeColllect.map((whyDoWeColllect) => (
              <li className="text-lg pb-1" key={whyDoWeColllect.id}>
                <span className="font-bold">{whyDoWeColllect.name}</span>
                <p className="md:pl-10 pb-2">{whyDoWeColllect.text}</p>
              </li>
            ))}
          </ul>

          {/*//! lsit Two  */}
          <li className="pb-1 text-xl font-semibold">
            How We Use Your Information
          </li>
          <p className="pb-3">
            We use the information we collect for the following purposes:
          </p>

          <ul className="list-inside list-disc pb-5">
            {whyWeUseYourInformation.map((whyWeUseYourInformation) => (
              <li className="text-lg pb-1" key={whyWeUseYourInformation.id}>
                <span className="font-bold">
                  {whyWeUseYourInformation.name}
                </span>
                <p className="md:pl-10 pb-2">{whyWeUseYourInformation.text}</p>
              </li>
            ))}
          </ul>

          {/*//! lsit Three  */}
          <li className="pb-1 text-xl font-semibold">
            Sharing Your Information
          </li>
          <p className="pb-3">
            We do not sell, trade, or otherwise transfer your personal
            information to outside parties except in the following
            circumstances:
          </p>
          <ul className="list-inside list-disc pb-5">
            {whyWeShareYourInformation.map((whyWeShareYourInformation) => (
              <li className="text-lg pb-1" key={whyWeShareYourInformation.id}>
                <span className="font-bold">
                  {whyWeShareYourInformation.name}
                </span>
                <p className="md:pl-10 pb-2">
                  {whyWeShareYourInformation.text}
                </p>
              </li>
            ))}
          </ul>

          {/*//! lsit Four  */}
          <li className="pb-1 text-xl font-semibold">
            Security of Your Information
          </li>
          <p className="pb-8">
            We implement a variety of security measures to maintain the safety
            of your personal information. However, no method of transmission
            over the Internet or electronic storage is 100% secure, so we cannot
            guarantee its absolute security.
          </p>

          {/*//! lsit Five  */}
          <li className="pb-1 text-xl font-semibold">Your Rights</li>
          <p className="pb-3">
            You have the following rights with respect to your personal
            information:
          </p>
          <ul className="list-inside list-disc pb-5">
            {rights.map((rights) => (
              <li className="text-lg pb-1" key={rights.id}>
                <span className="font-bold">{rights.name}</span>
                <p className="md:pl-10 pb-2">{rights.text}</p>
              </li>
            ))}
          </ul>

          {/*//! lsit Six  */}
          <li className="pb-1 text-xl font-semibold">
            Changes to This Privacy Policy
          </li>
          <p className="pb-8">
            We may update this Privacy Policy from time to time. We will notify
            you of any material changes by posting the updated policy on our
            website.
          </p>

          {/*//! lsit Seven  */}
          <li className="pb-1 text-xl font-semibold">Contact Us</li>
          <p className="pb-3">
            If you have any questions about this Privacy Policy, please contact
            us at:{" "}
            <Link to="/visit-contact-us" className="text-blue-600 underline">
              Contact Us
            </Link>
          </p>
          <p className="pb-3">
            All Liberian Students at ULK. All rights reserved.
          </p>
        </ol>
      </div>
      <Footer />
    </>
  );
};

export default Privacy;
