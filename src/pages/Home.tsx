

const HeroSection = () => {
  return (
    <div className="relative h-screen flex items-center justify-center text-white bg-cover bg-center mt-4" style={{ backgroundImage: "url('car.jpg')" }}>
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Hero Content */}
      <div className="relative text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Welcome to Our Platform
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Empowering your business with innovative solutions.
        </p>
        <div className="space-x-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300">
            Get Started
          </button>
          <button className="bg-transparent border border-white hover:bg-white hover:text-black text-white font-semibold py-3 px-6 rounded-lg transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;