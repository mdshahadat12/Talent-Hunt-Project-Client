import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../Components/Shared/Footer";

const HomeLayout = () => {
  return (
    <div className="bg-green-40 max-w-7xl mx-auto">
      <Navbar>
        <Outlet />
        <ToastContainer
          position="top-center"
          autoClose={1000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition={Zoom}
        />
        <Footer/>
      </Navbar>
    </div>
  );
};

export default HomeLayout;
