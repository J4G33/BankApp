import { Outlet } from "react-router-dom";
import Navbar from "./Navbar2";

const Layout = () => {
  const customStyles = {
    
  };
  return (
    <>
      <Navbar />
      <div className="" style={customStyles}>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;