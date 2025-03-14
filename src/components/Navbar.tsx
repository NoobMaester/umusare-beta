import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {

  const [navOpen, setNavOpen] = useState(true);
  const navigate = useNavigate();
  
  const handleNav = () => {
    setNavOpen(!navOpen);
  }
  const handleGetStarted = () => {
    setNavOpen(true); // Close menu
    navigate('/register');
  }

  const handleNavClick = () => {
    setNavOpen(true); // Close menu when link is clicked
  }

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-8 text-white">
      <div>
        <Link to="/" className="w-full text-3xl font-bold text-[#00df9a]">
          Umusaare.
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex uppercase text-sm">
        <NavLink 
          to="/#about" 
          className={({ isActive }) => 
            isActive ? "p-4 text-[#00df9a]" : "p-4 hover:text-[#00df9a]"
          }
        >
          About
        </NavLink>
        <NavLink 
          to="/services" 
          className={({ isActive }) => 
            isActive ? "p-4 text-[#00df9a]" : "p-4 hover:text-[#00df9a]"
          }
        >
          Services
        </NavLink>
        <NavLink 
          to="/sailors" 
          className={({ isActive }) => 
            isActive ? "p-4 text-[#00df9a]" : "p-4 hover:text-[#00df9a]"
          }
        >
          Sailors
        </NavLink>
        <button onClick={handleGetStarted} className='bg-[#00df9a] text-black w-[200px] font-medium rounded-md hover:bg-[#00c48c] mx-auto md:mx-0'>
          Join Us
        </button>
      </div>


      {/* Mobile Navigation */}
      <div onClick={handleNav} className="block md:hidden">
        {!navOpen ? <AiOutlineClose className="text-3xl text-[#00df9a]"/> : <AiOutlineMenu className="text-3xl text-[#00df9a]"/>}
      </div>

      <div className={!navOpen ? "fixed left-0 top-0 w-[60%] h-full border-r border-gray-900 bg-[#000300] ease-in-out duration-500" : "fixed left-[-100%]"}>
        <h1 className="w-full text-center text-3xl font-bold text-[#00df9a] m-4">
          Umusaare.
        </h1>
        <div className="flex flex-col items-center justify-center uppercase text-sm">
          <NavLink 
            to="#about" 
            onClick={handleNavClick}
            className={({ isActive }) => 
              isActive ? "p-4 border-b border-gray-600 text-[#00df9a]" : "p-4 border-b border-gray-600 hover:text-[#00df9a]"
            }
          >
            About Us
          </NavLink>
          <NavLink 
            to="/services" 
            onClick={handleNavClick}
            className={({ isActive }) => 
              isActive ? "p-4 border-b border-gray-600 text-[#00df9a]" : "p-4 border-b border-gray-600 hover:text-[#00df9a]"
            }
          >
            Services
          </NavLink>
          <NavLink 
            to="/sailors" 
            onClick={handleNavClick}
            className={({ isActive }) => 
              isActive ? "p-4 text-[#00df9a] " : "p-4 hover:text-[#00df9a]"
            }
          >
            Sailors
          </NavLink>
          <button onClick={handleGetStarted} className='bg-[#00df9a] text-black w-[200px] px-6 py-4 mt-8 font-medium rounded-md hover:bg-[#00c48c] mx-auto md:mx-0'>
            Join Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;