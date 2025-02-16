import Image from "next/image";
import { motion } from "framer-motion";


interface EventContentCardProps {
  title: string;
  des: string;
  img: string;
}

export default function EventContentCard({
  title,
  des,
  img,
}: EventContentCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col md:flex-row items-center gap-8 p-8 border-2 border-teal-800 rounded-lg text-gray-50 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
    >
      {/* Image */}
      <div className="w-full md:w-1/3">
        <img
          src={img}
          alt={title}
          className="w-full h-auto rounded-lg shadow-lg bg-gray-900 shadow-gray-900 hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="w-full md:w-2/3">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-gray-50 mb-6">{des}</p>
        <a href="#" className="inline-block w-full sm:w-auto">
          <button
            className="w-full sm:w-auto relative 
                bg-gradient-to-r 
                from-teal-700 
                to-teal-900 
                px-8 
                py-3 
                text-white 
                font-semibold 
                rounded-full 
                shadow-lg 
                hover:shadow-teal-500/50 
                hover:scale-105
                transition-all 
                duration-300"
          >
            Explorar Sesión
          </button>
        </a>
      </div>
    </motion.div>
  );
}
