import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
// import { AuthContext } from "../../Context/AuthProvider";
// import { auth } from "../../config/firebase.config";
// import { signOut } from "firebase/auth";
import { toast } from "react-toastify";

// import axios from "axios";

/* eslint-disable react/prop-types */
const Navbar = ({ children }) => {
  // const { user, setUser } = useContext(AuthContext);
  const user = true
  // console.log(user);
  // const [user, setUser] = useState(false);
  const handleLogout = () => {
    toast.success("Logout successful");
    // signOut(auth)
    //   .then(() => {
    //     console.log("Sign-out successful");
    //     setUser(null);
    //     axios.post('https://royal-food-server.vercel.app/api/v1/logout',{user},{withCredentials:true})
    //     .then(data=>console.log(data.data))
    //     // setClick(!click);
    //   })
    //   .catch((error) => {
    //     console.log(error.massage);
    //   });
  };
  const clickNav = (
    <>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "active outline outline-2 outline-green-500 rounded-lg font-semibold"
            : ""
        }
        to={"/myaddedfood"}
      >
        <li>
          <p>My Added Food</p>
        </li>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "active outline outline-2 outline-green-500 rounded-lg  font-semibold"
            : ""
        }
        to={"/addfood"}
      >
        <li>
          <p>Add Food</p>
        </li>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "active outline outline-2 outline-green-500 rounded-lg  font-semibold"
            : ""
        }
        to={"/cart"}
      >
        <li>
          <p>My Odered Food</p>
        </li>
      </NavLink>
    </>
  );
  const nav = (
    <>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "active outline outline-2 outline-green-500 rounded-lg  font-semibold"
            : ""
        }
        to={"/"}
      >
        <li>
          <p>Home</p>
        </li>
      </NavLink>
      {user && (
        <NavLink
          to={"/profile"}
          className={({ isActive }) =>
            isActive
              ? "active outline outline-2 outline-green-500 rounded-lg font-semibold"
              : ""
          }
        >
          <li>
            <p>Profile</p>
          </li>
        </NavLink>
      )}
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "active outline outline-2 outline-green-500 rounded-lg  font-semibold"
            : ""
        }
        to={"/allfood"}
      >
        <li>
          <p>All Food</p>
        </li>
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive
            ? "active outline outline-2 outline-green-500 rounded font-semibold"
            : ""
        }
        to={"/blogs"}
      >
        <li>
          <p>Blogs</p>
        </li>
      </NavLink>
    </>
  );
  return (
    <div className="drawer relative">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="bg-black fixed z-20 max-w-7xl w-full bg-opacity-20">
          <div className="w-[90%] mx-auto justify-between px-0 navbar">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="mb-0">
              <Link onClick={()=>toast.error("This is Home!")} to={"/"} className="flex items-center">
                <img
                  src="https://i.ibb.co/MCVHxZ3/Talent-hunt.png"
                  className="h-8 mr-3"
                />
                <span className="self-center text-green-500 text-2xl font-extrabold whitespace-nowrap dark:text-white">
                Talent Hunt
                </span>
              </Link>
            </div>
            <div className=" hidden lg:block">
              <ul className="menu menu-horizontal">
                {/* Navbar menu content here */}
                {nav}
              </ul>
            </div>
            <div>
              {user ? (
                <>
                  <div className="dropdown dropdown-end">
                    <label
                      tabIndex={0}
                      className="btn btn-ghost btn-circle avatar"
                    >
                      <div className="w-10 rounded-full">
                        <img
                          src={
                            user?.photoURL
                              ? user?.photoURL
                              : "https://i.ibb.co/t23zmR8/Logo.png"
                          }
                        />
                      </div>
                    </label>
                    <ul
                      tabIndex={0}
                      className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                    >
                      {clickNav}
                      <NavLink
                        className={
                          "bg-green-500 mt-5 border-2 hover:bg-base-300 hover:text-black hover:border-green-700 text-white px-3 font-semibold py-2 rounded-lg"
                        }
                      >
                        <p onClick={handleLogout}>Logout</p>
                      </NavLink>
                    </ul>
                  </div>
                </>
              ) : (
                <NavLink
                  to={"login"}
                  className={
                    "bg-green-500 border-2 hover:bg-base-300 hover:text-black hover:border-green-700 text-white px-3 font-semibold py-2 rounded-lg"
                  }
                >
                  <p>Login</p>
                </NavLink>
              )}
            </div>
          </div>
        </div>
        {/* Page content here */}
        {children}
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200">
          {/* Sidebar content here */}
          {nav}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
