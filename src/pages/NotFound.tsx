import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6 text-center">
      {/* Animated 404 Text */}
      <h1 className="text-9xl font-bold text-[#00df9a] mb-4 animate-bounce">404</h1>
      
      {/* Message */}
      <p className="text-2xl text-gray-800 mb-8">
        Oops! The page you're looking for vanished into the void.
      </p>

      {/* Home Button */}
      <button
        onClick={() => navigate("/")}
        className="px-6 py-3 bg-[#00df9a] text-white rounded-lg shadow-md hover:bg-[#00df9a]/80 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#00df9a] focus:ring-offset-2"
      >
        Go Back Home
      </button>

      {/* Optional Illustration (e.g., from Heroicons or a custom SVG) */}
      <svg
        className="w-64 h-64 mt-12 text-gray-300"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </div>
  );
};

export default NotFound;