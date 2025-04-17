import { React, useState } from "react";
import image from "./Group3.png"
 
import { NavLink, Link } from "react-router-dom";
//from react icon websiyte
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  //like toggler false->true
  const handleMenuToggler = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  //objects
  const navItems = [
    { path: "/", title: "Start a search" },
    { path: "/my-job", title: "My jobs" },
    { path: "/salary", title: "Salary Estimate" },
    { path: "/post-job", title: "Post a Job" },
  ];
  return (
    <header className="max-w-screen-2xl container mx-auto xl:px-24 px-4 ">
      <nav className="flex justify-between items-center py-6">
        {/* for bronging in one line  flex vgra use hua*/}
        <a href="/" className="flex items-center gap-2 text-2xl text-black">
          <img src={image}></img>
          JobPortal
        </a>
        {/* nav items for large devices */}
        {/* we will do mapping */}
        <ul className=" md: flex gap-12">{/* destructuring the path */}</ul>
        {/* sign up and login button */}
        <div className=" text-base text-primary font-medium space-x-5 hidden lg:block">
          <Link
            to="/sign-up"
            className="py-2 px-5 border rounded bg-blue text-white"
          >
            Sign up
          </Link>
        </div>
        {/* mobile name for medium screen hidden and by defalut block */}
        <div className="md: block">
          <button onClick={handleMenuToggler}>
            {/* from react icons  agr menu open krna to line vrna cross*/}
            {isMenuOpen ? (
              <FaXmark className="w-5 h-5 text-primary" />
            ) : (
              <FaBarsStaggered className="w-5 h-5 text-primary" />
            )}
          </button>
        </div>
      </nav>
      {/* navitems for mobile */}
      {/* agr menuopen h to menu vrna hidden */}
      <div
        className={`px-4 bg-black py-5 rounded-sm ${
          isMenuOpen ? "" : "hidden"
        }`}
      >
        <ul>
          {navItems.map(({ path, title }) => (
            //first is first child
            <li
              key={path}
              className="text-base text-white first:text-white py-1"
            >
              {/* copied from react router dom */}
              {/* when we click oj any path then is become active  */}
              <NavLink
                to={path}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {title}
              </NavLink>
            </li>
          ))}
          <li className="text-white py-1">
            <Link to="/login" >
             Log in
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};
export default Navbar;
