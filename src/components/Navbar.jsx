import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
import { AuthContext } from "../authProvider/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const [theme, setTheme] = useState(true);
  const { user, setUser, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    // logout
    logOut()
      .then(() => {
        setUser("");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Successfully Logout",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  if (theme) {
    document
      .getElementsByTagName("html")[0]
      .setAttribute("data-theme", "light");
  } else {
    document.getElementsByTagName("html")[0].setAttribute("data-theme", "dark");
  }

  const links = (
    <>
      <li className=" text-base-400">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className=" text-base-400 ">
        <NavLink to="/allArts">All Arts</NavLink>
      </li>
      {user && (
        <>
          {" "}
          <li className=" text-base-400 ">
            <NavLink to="/addCraft">Add Craft</NavLink>
          </li>
          <li className=" text-base-400 ">
            <NavLink to="/myArts">My Arts</NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div
      className="navbar bg-base-100 py-8"
      data-aos-duration="1000"
      data-aos="fade-right"
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost text-xl lg:hidden bg-[#E35353] text-white mr-2 hover:bg-[#E35353]"
          >
            <FaBarsStaggered />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[999] p-2 shadow bg-base-100 rounded-box w-52 "
          >
            {links}
          </ul>
        </div>
        <Link
          to="/"
          className="btn btn-ghost text-xl pl-0 w-[150px] hover:bg-transparent"
        >
          <img className="" src="/img/logo.png" alt="" />
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu  menu-horizontal text-[16px] font-bold ">
          {links}
        </ul>
      </div>
      <div className="navbar-end space-x-3">
        {/* if user login or not login */}
        {user && (
          <>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar z-[999]"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={
                      user.photoURL === null
                        ? "img/userProfile.jpg"
                        : user.photoURL
                    }
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm space-y-1 dropdown-content mt-3 z-[999] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>{user.displayName || "no name"} </a>
                </li>
                <li>
                  <a>{user.email || "no email"}</a>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="btn font-bold btn-sm text-white bg-[#E35353] border-none hover:bg-[#E35353]"
                  >
                    LogOut
                  </button>
                </li>
              </ul>
            </div>
          </>
        )}
        {!user && (
          <>
            {" "}
            <Link
              to="/login"
              className="btn rounded-[4px] font-bold text-white bg-[#E35353] border-none hover:bg-[#E35353]"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="btn rounded-[4px] font-bold text-white bg-[#E35353] border-none hover:bg-[#E35353]"
            >
              Register
            </Link>
          </>
        )}
        {/* theme dark light */}
        <label className="swap swap-rotate">
          {/* this hidden checkbox controls the state */}
          <input
            onClick={() => setTheme(!theme)}
            type="checkbox"
            className="theme-controller"
            value="synthwave"
          />

          {/* moon icon */}
          <svg
            className="swap-off fill-current w-10 h-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>

          {/* sun icon */}
          <svg
            className="swap-on fill-current w-10 h-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Navbar;
