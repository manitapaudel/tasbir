import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <nav>Navbar</nav>
      <Outlet />
      <footer>Footer</footer>
    </>
  );
};

export default Root;
