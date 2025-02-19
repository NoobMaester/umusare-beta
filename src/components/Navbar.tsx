import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const getLinkClassName = (path: string) => {
    const baseClasses = "transition duration-300";
    return location.pathname === path
      ? `${baseClasses} text-blue-600 font-semibold`
      : `${baseClasses} text-gray-700 hover:text-blue-600`;
  };

  return (
    <nav className="container bg-white top-0 z-10 py-2 w-full">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/home" className="text-2xl font-bold text-blue-600">
              Umusaare
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Link to="/about" className={getLinkClassName("/about")}>
              About
            </Link>
            <Link to="/services" className={getLinkClassName("/services")}>
              Services
            </Link>
            <Link to="/agents" className={getLinkClassName("/agents")}>
              Agents
            </Link>
          </div> 

          {/* Buttons */}
          <div className="flex items-center space-x-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300">
              Sign In
            </button>
            <button className="bg-transparent border border-blue-600 hover:bg-blue-600 hover:text-white text-blue-600 font-semibold py-2 px-4 rounded-lg transition duration-300">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
