import Footer from "../../Constant/Footer/Footer";
import Navbar from "../../Constant/Navbar/Navbar";
import { navLinks2 } from "../../Data/Data";

import lawimage from "/src/assets/law-master-of-PIL-768x576.jpg";
import lawHOD from "/src/assets/law_hod.jpg";

const text1 = `Because knowledge is power and is important for you to know your rights, to avoid traps within some legal acts and to know how to defend yourself, to get a prosperous career, to change and lead society and to help others. Probably you have a view of lawyers that you got from a family member, friend or classmates. You may wish to be a successful lawyer in order to enter into politics, business, International Finance and banking or simply practice law in your hometown or City.`;

const text2 = `Since its establishment in 2001, the School of Law at the Kigali Independent University / Campus of Gisenyi has grown enough and reached the level of the leading law schools in Rwanda and in the African Great Lakes Region .The steady increase in graduate over the past five years, especially undergraduate students who are more than 350 today, is an indication of its standing. There is a healthy balance between female and male students and the staff complement is also efficiently growing.

`;

const text3 = `The mission of the School is to produce excellent law graduates and to serve the legal profession and the community through innovative, relevant, comprehensive and integrated programmes and research`;

const text4 = `The School focuses on providing the best lawyers for the future through tuition by dedicated and well-educated staff. To satisfy the present need the University has sent its law lecturers to specialize in different fields in various South African Leading Law Faculties and has undertaken the initiative of facilitating the LLD or PhD studies to the academic staff.`;

const text5 = `The Licence Degree (LLB) which is offered after four years of studies completed by a full dissertation enables law graduates to gain access to the legal profession as well a wide variety of professions connected with the law.`;

const VisitLaw = () => {
  return (
    <>
      <Navbar navLinks={navLinks2} />
      <div className=" mt-[4.4rem] pb-10">
        <h1 className=" md:text-4xl text-3xl md:text-left text-center bg-primary_main text-white capitalize font-semibold py-10 md:py-14  md:px-20">
          School of Law
        </h1>
        <div className="container md:mx-auto  md:px-0 md:w-[80%] w-full">
          <div className="md:w-[40%] w-full md:mt-4 mt-0 md:h-[20rem] h-[20rem] bg-red-300 overflow-hidden">
            <img src={lawimage} alt="Computer Lab" className="w-full h-full" />
          </div>
          <div className="md:px-0 px-2">
            <p className="pt-4 pb-6 opacity-80 text-lg">
              Welcome to the School of Law
            </p>
            <p className="text-lg font-bold opacity-80 pb-1">
              Why should you study law?
            </p>
            <p className="text-lg opacity-80 pb-5">{text1}</p>
            <p className="text-lg opacity-80 pb-5">{text2}</p>
            <p className="text-lg opacity-80 pb-5">{text3}</p>
            <p className="text-lg opacity-80 pb-5">{text4}</p>
            <p className="text-lg opacity-80 pb-5">{text5}</p>

            <div className="md:w-[40%] w-[90%] md:mt-4 mt-0 md:h-[20rem] h-[20rem] bg-red-300 overflow-hidden mx-auto">
              <img src={lawHOD} alt="Computer Lab" className="w-full h-full" />
            </div>
            <p className="text-lg opacity-80 text-center py-4">
              NDIYAYE Innocent
            </p>
            <p className="text-lg opacity-80 text-center pb-4">
              Heads of Department
            </p>
            <p className="text-lg opacity-80 text-center">
              Phone: +250788303735/+250788304086/+250788304081
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default VisitLaw;
