import ContactFormNewsletter from "../../Components/ContactForm_NewsLetter/ContactFormNewsLetter";
import ContactHeader from "../../Components/ContactUs_Header/ContactUsHerder";
import ContactCards from "../../Interfaces/Contact_Card/ContactCard";

const ContactUs = () => {
  return (
    <>
      <ContactHeader />
      <ContactFormNewsletter />
      <ContactCards />

      {/* Google map */}
      <div className="bg-yellow_accent_6  mb-20 rounded-3xl h-[50vh]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7975.001321689587!2d30.05927973700402!3d-1.9530209921170636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca429babea105%3A0x38a085354a790b9a!2sImena%2C%20Kigali!5e0!3m2!1sen!2srw!4v1718959522061!5m2!1sen!2srw"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full rounded-3xl"
        ></iframe>
      </div>
    </>
  );
};

export default ContactUs;
