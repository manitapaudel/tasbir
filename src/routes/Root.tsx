import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ErrorBoundary } from "react-error-boundary";
import Oops from "../components/Oops";

const Root = () => {
  return (
    <>
      <Navbar />
      <ErrorBoundary FallbackComponent={Oops}>
        <Outlet />
      </ErrorBoundary>
      <Footer />
    </>
  );
};

export default Root;
