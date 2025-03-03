import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  // const location = useLocation();

  // const getLinkClassName = (path: string) => {
  //   const baseClasses = "transition duration-300";
  //   return location.pathname === path
  //     ? `${baseClasses} text-blue-600 font-semibold`
  //     : `${baseClasses} text-gray-700 hover:text-blue-600`;
  //};

  const [navOpen, setNavOpen] = useState(true);
  
  const handleNav = () => {
    setNavOpen(!navOpen);
  }

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-8 text-white">
      <div>
        <Link to="/" className="w-full text-3xl font-bold text-[#00df9a]">
          Umusaare.
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex uppercase">
        <Link to="/about" className="p-4">
          About
        </Link>
        <Link to="/services" className="p-4">
          Services
        </Link>
        <Link to="/agents" className="p-4">
          Agents
        </Link>
        <button className='bg-[#00df9a] text-black w-[200px] font-medium rounded-md hover:bg-[#00c48c] mx-auto md:mx-0'>Get Started</button>
      </div>

      

      {/* Mobile Navigation */}
      <div onClick={handleNav} className="block md:hidden">
        {!navOpen ? <AiOutlineClose className="text-3xl text-[#00df9a]"/> : <AiOutlineMenu className="text-3xl text-[#00df9a]"/>}
      </div>

      <div className={!navOpen ? "fixed left-0 top-0 w-[60%] h-full border-r border-gray-900 bg-[#000300] ease-in-out duration-500" : "fixed left-[-100%]"}>
        <h1 className="w-full text-center text-3xl font-bold text-[#00df9a] m-4">
          Umusaare.
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
          <button className='bg-[#00df9a] text-black w-[200px] px-6 py-4 mt-8 font-medium rounded-md hover:bg-[#00c48c] mx-auto md:mx-0'>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
