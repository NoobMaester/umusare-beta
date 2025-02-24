import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  // const location = useLocation();

  // const getLinkClassName = (path: string) => {
  //   const baseClasses = "transition duration-300";
  //   return location.pathname === path
  //     ? `${baseClasses} text-blue-600 font-semibold`
  //     : `${baseClasses} text-gray-700 hover:text-blue-600`;
  //};

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-8 text-white">
      <div>
        <Link to="/home" className="w-full text-3xl font-bold text-[#00df9a]">
          Umusaare
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="flex">
        <Link to="/about" className="p-4">
          About
        </Link>
        <Link to="/services" className="p-4">
          Services
        </Link>
        <Link to="/agents" className="p-4">
          Agents
        </Link>
      </div>

      {/* Buttons */}
      <div className="flex items-center space-x-4">
        <button className="bg-[#00df9a] hover:bg-[#00df9a] text-white font-semibold py-2 px-4 rounded-lg transition duration-300">
          Sign In
        </button>
        <button className="bg-transparent border border-[#00df9a] hover:bg-[#00df9a] hover:text-white text-[#00df9a] font-semibold py-2 px-4 rounded-lg transition duration-300">
          Sign Up
        </button>
      </div>
      <div>
        <AiOutlineMenu className="text-3xl" />
      </div>

      <div className="fixed hidden left-0 top-0 w-[60%] h-full border-r border-gray-900 bg-[#000300]">
        <h1 className="w-full text-center text-3xl font-bold text-[#00df9a] m-4">
          Umusaare
        </h1>
        <div className="flex flex-col items-center justify-center uppercase">
          <Link to="/about" className="p-4 border-b border-gray-600">
            About
          </Link>
          <Link to="/services" className="p-4 border-b border-gray-600">
            Services
          </Link>
          <Link to="/agents" className="p-4">
            Agents
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
