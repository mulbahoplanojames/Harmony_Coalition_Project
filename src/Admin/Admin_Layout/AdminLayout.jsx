import { Link, Outlet, Navigate } from "react-router-dom";
import AdminNavbar from "../Dashboard/Admin_Navbar/AdminNavbar";
import adminNavLinks from "../Dashboard/Admin_Data/AdminData";
import { useAuth } from "../../Context/AuthContext";

const AdminLayout = () => {
  const auth = useAuth();

  // if (!auth.adminLogin) {
  //   return <Navigate to={"/admin/log-in"} />;
  // }

  return (
    <>
      {auth.adminLogin ? (
        <div className="w-full h-full grid md:grid-cols-12 grid-cols-1">
          {/* Sidebar */}
          <div className="col-span-2 md:block hidden bg-primary_main overflow-y-auto">
            <h1 className="text-3xl bg-white text-center py-[0.97rem] mb-10">
              ALSULK
            </h1>
            <div className="h-[8rem] rounded-md shadow-lg mb-3 mx-auto w-[80%] bg-green-400"></div>
            <p className="text-center text-lg text-white">Wilma Williams</p>
            <p className="text-center text-lg text-white mb-10">Admin</p>
            {adminNavLinks.map((link) => (
              <Link
                className="py-2 px-3 bg-white rounded-md  inline-block w-[90%] ml-3 text-lg hover:opacity-90 mb-3 "
                key={link.id}
                to={link.path}
              >
                {link.name}
              </Link>
            ))}
          </div>
          {/* Navbar and Main Content <Outlet/> */}
          <div className="col-span-10 overflow-y-auto">
            <AdminNavbar />
            <div className="md:p-5 px-2 py-5 mt-16">
              <Outlet />
            </div>
          </div>
        </div>
      ) : (
        <Navigate to="/admin/log-in" />
      )}
    </>
  );
};

export default AdminLayout;
