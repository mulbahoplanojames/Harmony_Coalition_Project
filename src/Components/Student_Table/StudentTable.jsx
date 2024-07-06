import React from "react";
import TableHead from "./TableHead";
import { registerStudents } from "../../Data/Data";

const StudentTable = () => {
  return (
    <>
      <section className="w-full py-20">
        <h1 className="text-center text-4xl font-semibold pb-10">
          Students List
        </h1>
        <div className="overflow-x-auto bg-white">
          <table className="table w-full">
            {/* head */}
            <TableHead />
            <tbody>
              {/* row 1 */}
              {registerStudents.map((student) => {
                return (
                  <tr key={student.id}>
                    <td>{student.id}</td>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img src={student.avatar} alt={student.firstName} />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{student.firstName}</td>
                    <td>{student.lastName}</td>
                    <td>{student.email}</td>
                    <td>{student.phoneNumber}</td>
                    <td>{student.birthDate}</td>
                    <td>{student.gender}</td>
                    <td>{student.department}</td>
                    <td>{student.visaStartDate}</td>
                    <td>{student.visaEndDate}</td>
                    <td>{student.visaStatus}</td>
                  </tr>
                );
              })}
              {/* <tr>
                <td>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Hart Hagerty</div>
                      <div className="text-sm opacity-50">United States</div>
                    </div>
                  </div>
                </td>
                <td>
                  Zemlak, Daniel and Leannon
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Desktop Support Technician
                  </span>
                </td>
                <td>Purple</td>
                <td>
                  <button className="btn btn-ghost btn-xs">details</button>
                </td>
              </tr> */}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default StudentTable;
