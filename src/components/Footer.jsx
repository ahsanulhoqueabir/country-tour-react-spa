import { Link } from "react-router-dom";
import logo from "../assets/logo.json";
import Lottie from "lottie-react";
const Footer = () => {
  return (
    <div className="flex flex-col lg:flex-row text-center  lg:justify-between lg:items-center gap-5 bg-teal-200 py-10 lg:px-36">
      <div className="flex items-center hover:animate-pulse">
        <Lottie animationData={logo} className=" h-36"></Lottie>
        <span className="text-4xl font-bold  font-serif  -ml-10">
            World Tour
          </span>
      </div>
      <div>
        <p className="font-bold text-lg pb-4">Explore</p>
        <ol className="flex flex-col gap-1">
          <Link className="hover:text-white hover:border-b-2 border-gray-500 transition duration-400	 ease-in" to="/">Home</Link>
          <Link className="hover:text-white hover:border-b-2 border-gray-500 transition duration-400	 ease-in" to="/countries">Countries</Link>
          <Link className="hover:text-white hover:border-b-2 border-gray-500 transition duration-400	 ease-in" to="/faq">FAQ</Link>
          <Link className="hover:text-white hover:border-b-2 border-gray-500 transition duration-400	 ease-in" to="/about">About</Link>
        </ol>
      </div>
      <div>
        <p className="font-bold text-lg pb-4">Follow</p>
        <ol className="flex flex-col gap-1">
          <Link className="hover:text-white" to="https://facebook.com/mdahsanulhoqueabir"> Facebook</Link>
          <Link className="hover:text-white" to="https://instagram.com/Ahsanul.H.abir">Instagram</Link>
          <Link className="hover:text-white" to="https://linkedin.com/company/AhsanulHoqueAbir">LinkedIn</Link>
        </ol>
      </div>
    </div>
  );
};

export default Footer;
