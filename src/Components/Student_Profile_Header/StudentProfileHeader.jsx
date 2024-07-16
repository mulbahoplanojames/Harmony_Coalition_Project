import { SiProgress } from "react-icons/si";

const StudentProfileHeader = (props) => {
  const { firstName, lastName, department, course } = props;

  return (
    <>
      <div className="w-full h-fit py-9 px-3 bg-[#303247] shadow-lg rounded-md grid md:grid-cols-2 grid-cols-1 md:gap-2 gap-y-14">
        <div className="flex md:gap-10 gap-6 place-items-center pb:ml-4 pl-1 ">
          <div className="md:w-[6rem] md:h-[6rem] w-[5rem] h-[5rem] border-4 border-blue-700 rounded-full bg-red-400"></div>
          <div className="">
            <h1 className="text-2xl pb-1">
              {firstName} {lastName}
            </h1>
            <p className="text-lg">{department}</p>
            <p className="text-lg">{course}</p>
          </div>
        </div>

        <div className="flex justify-center items-center gap-10 md:flex-nowrap flex-wrap">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-4xl pb-1 text_shadow ">100%</h1>
            <p className="text-2xl text_shadow">visa update</p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <h1 className="text-4xl pb-1 text_shadow">99.9%</h1>
            <p className="text-2xl text_shadow">Performance</p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <SiProgress className="text-5xl pb-1 text_shadow text-blue-400" />
            <p className="text-2xl text_shadow">Performance</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentProfileHeader;
