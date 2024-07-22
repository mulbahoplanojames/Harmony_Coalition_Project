import Footer from "../../Constant/Footer/Footer";
import Navbar from "../../Constant/Navbar/Navbar";
import { navLinks2 } from "../../Data/Data";

import polythenicImage from "/src/assets/polythenic.jpg";
import image1 from "/src/assets/polythenic.jpg";
import image2 from "/src/assets/polythenic.jpg";
import image3 from "/src/assets/polythenic.jpg";
import image4 from "/src/assets/polythenic.jpg";

const text1 = `Our academic programmes general objective is to provide students with a training in managerial and economic sciences. These programmes are reinforced in a bid to provide a sound moral component as well as a professional one. Students are hence prepared and initiated to this through teachings which tend to favor adequacy between theories and the local, national and regional realities.`;

const DepartmentsEBSData = [
  {
    name: "Rural Development",
    image: image1,
  },
  {
    name: "Accounting",
    image: image2,
  },
  {
    name: "Economics",
    image: image3,
  },
  {
    name: "Finance",
    image: image4,
  },
];

const VisitPolythenicInstitute = () => {
  return (
    <>
      <Navbar navLinks={navLinks2} />
      <div className=" mt-[4.4rem] pb-10">
        <h1 className=" md:text-4xl text-3xl md:text-left text-center bg-primary_main text-white capitalize font-semibold py-10 md:py-14  md:px-20">
          Polythenic Institute
        </h1>
        <div className="container md:mx-auto  md:px-0 md:w-[80%] w-full">
          <div className="md:w-[40%] w-full md:mt-4 mt-0 md:h-[20rem] h-[20rem] bg-red-300 overflow-hidden">
            <img
              src={polythenicImage}
              alt="Computer Lab"
              className="w-full h-full"
            />
          </div>
          <div className="md:px-0 px-2">
            <p className="pt-4 pb-6 opacity-80 text-lg">
              Welcome to the Polythenic Institute
            </p>
            <p className="text-lg font-bold opacity-80 pb-1">
              Campus The creation of this School was due to a number of
              important factors; namely:
            </p>
            <ul className="list-disc list-inside">
              <li className="text-lg opacity-80 pb-1">
                The need to rapidly provide the country with human resources
                mastering several sectors in the fields of economics and
                management.
              </li>
              <li className="text-lg opacity-80 pb-1">
                The presence of qualified professors in Economic Sciences and
                Management in the country.
              </li>
              <li className="text-lg opacity-80 pb-1">
                The need to rapidly provide the country with human resources
                mastering several sectors in the fields of economics and
                management.
              </li>
            </ul>
            <p className="text-lg opacity-80 py-5">{text1}</p>
            <p className="text-lg opacity-80 font-bold">
              Theoretical courses, practical works and internships enable the
              student:
            </p>
            <ul className="list-disc list-inside">
              <li className="text-lg opacity-80 pb-1">
                To acquire and master concepts, fundamental principles and
                specific methods to Economic Sciences and Management;
              </li>
              <li className="text-lg opacity-80 pb-1">
                To conduct critical analysis of practical case studies and to
                research on operational solutions;
              </li>
              <li className="text-lg opacity-80 pb-1">
                To be able to effectively work into the public as well as
                private organizations.
              </li>
            </ul>
            <p className="text-lg opacity-80 font-bold pt-4 pb-6">
              The Departments in the school of EBS are:
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 md:gap-6 gap-y-8">
              {DepartmentsEBSData.map((departments) => (
                <div className="bg-white shadow-md" key={departments.name}>
                  <div className="md:h-[12rem] h-[16rem] bg-red-300 w-full">
                    <img
                      src={departments.image}
                      alt={`department ${departments.name} image`}
                      className="w-full h-full"
                    />
                  </div>
                  <p className="py-3 font-semibold pl-2 md:text-xl text-2xl">
                    {departments.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default VisitPolythenicInstitute;
