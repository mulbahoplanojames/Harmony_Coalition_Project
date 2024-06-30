import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import PageNotFound from "./Pages/Page_Not_Found/PageNotFound";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default App;
