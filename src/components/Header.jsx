import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.json";
import Lottie from "lottie-react";
import {
  Bars3BottomRightIcon,
  MoonIcon,
  SunIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

const Header = () => {
  const [light, setlight] = useState(true);
  const [menu, setMenu] = useState(false);
  return (
    <div className="bg-blue-100  lg:px-6 sticky top-0 z-20">
      <div className=" relative flex items-center justify-between">
      <div>
        <Link className="flex items-center">
          <Lottie className="h-20 " animationData={logo}></Lottie>
          <span className="text-4xl font-bold  font-serif -ml-5">
            World Tour
          </span>
        </Link>
      </div>
      <div className=" hidden lg:flex ">
        <div className="text-lg lg:pr-10 font-medium flex gap-4">
          <NavLink
            to="/"
            className={({ isActive }) => isActive && "text-blue-700"}
          >
            Home
          </NavLink>
          <NavLink
            to="/countries"
            className={({ isActive }) => isActive && "text-blue-700"}
          >
            Countries
          </NavLink>
          <NavLink
            to="/FAQ"
            className={({ isActive }) => isActive && "text-blue-700"}
          >
            FAQ
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => isActive && "text-blue-700"}
          >
            About
          </NavLink>
        </div>
        <div>
          {light ? (
            <MoonIcon
              className="text-black h-6  cursor-pointer"
              onClick={() => setlight(!light)}
            ></MoonIcon>
          ) : (
            <SunIcon
              className="text-white h-6  cursor-pointer"
              onClick={() => setlight(!light)}
            ></SunIcon>
          )}
        </div>
      </div>
      {/* Navbar for Mobile  */}
      <div className="lg:hidden">
        <button
          className="pr-4"
          title="Menu Bar"
          onClick={() => setMenu(!menu)}
        >
          <Bars3BottomRightIcon className=" h-6 w-6 text-black"></Bars3BottomRightIcon>
        </button>
        {menu && (
          <div className=" absolute bg-slate-100 rounded-md top-0 left-0 w-full z-10">
            <div className="p-4">
              {/* logo part  */}
              <div>
                <Link className="flex items-center">
                  <Lottie className="h-20 " animationData={logo}></Lottie>
                  <span className="text-4xl font-bold  font-serif -ml-5">
                    World Tour
                  </span>
                </Link>
              </div>
              <div>
                <button onClick={() => setMenu(!menu)}>
                  <XMarkIcon className=" h-6 w-6 text-black"></XMarkIcon>
                </button>
              </div>
              {/* Dropdown Menu  */}
              <div className="text-lg font-medium flex flex-col gap-4">
                <NavLink
                  to="/"
                  className={({ isActive }) => isActive && "text-blue-700"}
                >
                  Home
                </NavLink>
                <NavLink
                  to="/countries"
                  className={({ isActive }) => isActive && "text-blue-700"}
                >
                  Countries
                </NavLink>
                <NavLink
                  to="/FAQ"
                  className={({ isActive }) => isActive && "text-blue-700"}
                >
                  FAQ
                </NavLink>
                <NavLink
                  to="/about"
                  className={({ isActive }) => isActive && "text-blue-700"}
                >
                  About Us
                </NavLink>
              </div>
            </div>
          </div>
        )}
      </div>
      </div>
    </div>
  );
};

export default Header;

// <div className='absolute top-0 left-0 w-full z-10'>
//               <div className='p-5 bg-white border rounded shadow-sm'>
//                 {/* Logo & Button section */}
//                 <div className='flex items-center justify-between mb-4'>
//                   <div>
//                     <Link to='/' className='inline-flex items-center'>
//                       <BoltIcon className='h-6 w-6 text-blue-500' />
//                       <span className='ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase'>
//                         nextPage
//                       </span>
//                     </Link>
//                   </div>
//                   {/* Dropdown menu close button */}
//                   <div>
//                     <button
//                       aria-label='Close Menu'
//                       title='Close Menu'
//                       onClick={() => setIsMenuOpen(false)}
//                     >
//                       <XMarkIcon className='w-5 text-gray-600' />
//                     </button>
//                   </div>
//                 </div>
//                 {/* Mobile Nav Items Section */}
//                 <nav>
//                   <ul className='space-y-4'>
//                     <li>
//                       <Link to='/' className='default'>
//                         Home
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to='/books'
//                         className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
//                       >
//                         Books
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to='/about'
//                         className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
//                       >
//                         About Us
//                       </Link>
//                     </li>
//                   </ul>
//                 </nav>
//               </div>
//             </div>
