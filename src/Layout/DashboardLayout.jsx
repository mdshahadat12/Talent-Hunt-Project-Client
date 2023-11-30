import { Outlet } from "react-router-dom"
import Sidebar from "../Components/Dashborad/Sidebar"
import { ToastContainer, Zoom } from "react-toastify"

const DashboardLayout = () => {
    return (
      <>
      <div className='relative min-h-screen md:flex'>
        <Sidebar/>
        <div className='flex-1  md:ml-64'>
          <div className='p-5'>
            <Outlet/>
          </div>
        </div>
      </div>
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
      </>
    )
  }
  
  export default DashboardLayout