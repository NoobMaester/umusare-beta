import driver from "./../assets/driver1.png";
import car from "./../assets/car.svg";
import house from "./../assets/house.svg";
import location from "./../assets/location-address.svg";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();
  const handleGetStarted = () => {
    navigate("/sailors");
  };

  return (
    <motion.div
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full bg-white py-16 px-4"
    >
      <h1 className="text-4xl font-bold text-center">How it Works</h1>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 items-center text-xl md:text-2xl text-center gap-4 my-8">
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col md:flex-row items-center justify-center p-4 border border-gray-100 rounded-md shadow-md bg-gray-50 hover:shadow-lg"
        >
          <img className="w-[50px] mb-2 md:mb-0 md:mx-2" src={location} alt="location" />
          <p>Enter Your Location</p>
        </motion.div>
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col md:flex-row items-center justify-center p-4 border border-gray-100 rounded-md shadow-md bg-gray-50 hover:shadow-lg"
        >
          <img className="w-[50px] mb-2 md:mb-0 md:mx-2" src={car} alt="driver" />
          <p>Get Matched With a Driver</p>
        </motion.div>
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-center p-4 border border-gray-100 rounded-md shadow-md bg-gray-50 hover:shadow-lg"
        >
          <img className="w-[50px] mb-2 md:mb-0 md:mx-2" src={house} alt="Home" />
          <p>Arrive Home Safe</p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 px-4">
        <motion.img
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="w-full max-w-[500px] mx-auto my-4"
          src={driver}
          alt="driver"
        />
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex flex-col justify-center items-center"
        >
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            //transition={{ delay: 0.6 }}
            className="uppercase text-[#00df9a] font-bold sm:text-center"
          >
            Driven by Excellence, Delivered with Care.
          </motion.p>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            //transition={{ delay: 0.7 }}
            className="md:text-4xl sm:text-3xl sm:text-center text-2xl font-bold py-2"
          >
            Smooth Rides, Every Time.
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            //transition={{ delay: 0.8 }}
            className="text-gray-600 text-base md:text-lg leading-relaxed md:leading-loose max-w-2xl text-center md:text-left my-4"
          >
            Umusare is your trusted partner for freelance driving services. We
            connect you with experienced, professional drivers who are ready to
            take you wherever you need to go. With a focus on safety,
            reliability, and customer satisfaction, we make transportation
            simple and stress-free. Your journey, our commitment.
          </motion.p>
          <motion.button
            onClick={handleGetStarted}
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            //transition={{ delay: 0.9 }}
            className="text-[#00df9a] bg-black w-[200px] px-6 py-4 mt-8 font-medium rounded-md hover:bg-[#00c48c] mx-auto md:mx-0 hover:text-black"
          >
            Get Started
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutUs;
