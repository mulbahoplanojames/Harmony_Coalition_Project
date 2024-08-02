import { Link } from "react-router-dom";
import { legalLinks, quickLinks, supportLinks } from "../../Data/Data";

const PrimaryFooter = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 grid-cols-1  mb-10">
        <div>
          <h1 className="text-5xl text-white pb-10">ALSULK</h1>
        </div>
        <div className="grid md:grid-cols-4 grid-cols-2 gap-x-5 gap-y-10">
          <div className="">
            <h1 className="text-xl font-semibold pb-5 text-white">
              Quick Links
            </h1>
            <ul className="space-y-3">
              {quickLinks.map((quickLink) => (
                <li key={quickLink.id}>
                  <Link
                    to={quickLink.path}
                    className="text-white hover:text-opacity-70"
                  >
                    {quickLink.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h1 className="text-xl font-semibold pb-5 text-white">Support</h1>
            <ul className="space-y-3">
              {supportLinks.map((supportLink) => (
                <li key={supportLink.id}>
                  <Link
                    to={supportLink.path}
                    className="text-white hover:text-opacity-70"
                  >
                    {supportLink.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h1 className="text-xl font-semibold pb-5 text-white">Legal</h1>
            <ul className="space-y-3">
              {legalLinks.map((legalLink) => (
                <li key={legalLink.id}>
                  <Link
                    to={legalLink.path}
                    className="text-white hover:text-opacity-70"
                  >
                    {legalLink.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrimaryFooter;
