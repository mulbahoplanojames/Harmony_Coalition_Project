import { Link } from "react-router-dom";
import PrimaryFooter from "./PrimaryFooter";
import SecondaryFooter from "./SecondaryFooter";
import { FaFacebook, FaInstagram, FaWhatsappSquare } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <div className="bg-primary_main md:py-14 py-20 px-10">
        {/* Rendering the FooterLinks component. */}
        <PrimaryFooter />
        <hr className="opacity-50" />
        <SecondaryFooter />
        <hr className="opacity-50" />
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-8 gap-y-10 text-white py-6">
          <p className="text-lg">
            &copy; {new Date().getFullYear()}. All Rights Reserved By ALSULK
          </p>
          <div className="flex gap-10 md:text-2xl md:justify-end justify-start text-3xl">
            <FaFacebook className="cursor-pointer opacity-75 hover:opacity-100" />
            <BsTwitterX className="cursor-pointer opacity-75 hover:opacity-100" />
            <FaInstagram className="cursor-pointer opacity-75 hover:opacity-100" />
            <FaWhatsappSquare className="cursor-pointer opacity-75 hover:opacity-100" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
