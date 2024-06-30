import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import PageNotFound from "./Pages/Page_Not_Found/PageNotFound";
import { AppContext } from "./Context/AppContext";
import { useContext } from "react";

const App = () => {
  const { darkModeStyle } = useContext(AppContext);

  return (
    <>
      <div className="h-screen w-screen overflow-y-auto" style={darkModeStyle}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
