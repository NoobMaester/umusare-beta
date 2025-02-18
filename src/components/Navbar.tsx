
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-blue-600">
              Umusaare
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Link to="/about" className="text-gray-700 hover:text-blue-600 transition duration-300">
              About
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-blue-600 transition duration-300">
              Services
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition duration-300">
              Contact
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
