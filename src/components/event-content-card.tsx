import Image from "next/image";

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
    <div className="flex flex-col md:flex-row items-center gap-8 bg-gray-800 p-8 bg-white text-gray-50 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
      {/* Image */}
      <div className="w-full md:w-1/3">
        <img
          src={img}
          alt={title}
          className="w-full h-auto rounded-lg shadow-lg shadow-teal-700"
        />
      </div>

      {/* Content */}
      <div className="w-full md:w-2/3">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-gray-50 mb-6">{des}</p>
        <button
          className="relative 
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
                transition-shadow 
                duration-300"
        >
          Explorar Sesión
        </button>
      </div>
    </div>
  );
}
