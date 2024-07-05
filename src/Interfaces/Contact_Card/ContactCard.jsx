import { SiHandshakeProtocol } from "react-icons/si";
import { HiOutlineMailOpen } from "react-icons/hi";
import { SlLocationPin } from "react-icons/sl";

const ContactCards = () => {
  return (
    <>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mb-20 gap-8">
        {/* card one  */}
        <div className="bg-[#C5B7FB] px-6 py-8 rounded-2xl text-white shadow-2xl">
          <div className="flex gap-2 pb-3 items-center">
            <SiHandshakeProtocol className="text-4xl" />
            <p className="text-2xl">(+250) 791955614</p>
          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
            doloremque aliquid hic adipisci?
          </p>
        </div>

        {/* card two  */}
        <div className="bg-[#AA8FF6] px-6 py-8 rounded-2xl text-secondary shadow-2xl overflow-hidden">
          <div className="flex gap-2 pb-3 items-center">
            <HiOutlineMailOpen className="text-4xl" />
            <p className="text-[1.2rem]">alsulkassociation.com</p>
          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
            doloremque aliquid hic adipisci?
          </p>
        </div>

        {/* card three  */}
        <div className="shadow-2xl px-6 py-8 rounded-2xl text-white bg-[#4B208C]">
          <div className="flex gap-2 pb-3 items-center">
            <SlLocationPin className="text-4xl" />
            <p className="text-2xl">KG 4, Kigali, Rwanda</p>
          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
            doloremque aliquid hic adipisci?
          </p>
        </div>
      </div>
    </>
  );
};

export default ContactCards;
