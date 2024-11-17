import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Root = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
