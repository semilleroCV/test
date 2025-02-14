"use client";

import { Button, Typography } from "@material-tailwind/react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [isClient, setIsClient] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Use a ref for the container so we can calculate offset
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Capture mouse movement inside the container
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });
  };

  // Calculate rotation angles based on mouse position
  // Feel free to tweak the multiplier for more/less tilt
  const rotateX = (mousePos.y / window.innerHeight - 0.5) * 10; 
  const rotateY = (mousePos.x / window.innerWidth - 0.5) * 10;  

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="
        relative 
        flex 
        min-h-screen 
        w-full 
        items-center 
        justify-center 
        overflow-hidden
        px-4
        sm:px-8
        lg:px-16
        py-12
      "
      style={{
        perspective: "1000px", // Enables 3D effect
      }}
    >
      {/* Background Layer */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-black">
        <div className="absolute inset-0 [background:radial-gradient(125%_125%_at_50%_10%,#003027_5%,#000_80%)]"></div>
        
        {/* Example colored blobs for a dynamic background */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-teal-700 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-[float_8s_ease-in-out_infinite]"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-green-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-[float_8s_ease-in-out_infinite_2s]"></div>
        <div className="absolute bottom-0 left-20 w-72 h-72 bg-cyan-800 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-[float_8s_ease-in-out_infinite_4s]"></div>
      </div>

      {/* Glassmorphism Card Container */}
      <div
        className="
          relative 
          z-10 
          flex 
          flex-col 
          md:flex-row 
          items-center 
          justify-between 
          w-full 
          max-w-7xl
          rounded-3xl 
          bg-white/10 
          backdrop-blur-md 
          shadow-2xl 
          border 
          border-white/20 
          px-8 
          sm:px-12 
          md:px-16 
          py-12 
        "
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transition: "transform 0.2s ease-out",
        }}
      >
        {/* Left Content */}
        <div className="flex flex-col items-center md:items-start md:w-1/2">
          {/* Logo */}
          <div className="mb-8">
            <Image
              src="/logos/logo.png"
              alt="Logo"
              width={300}
              height={300}
              className="drop-shadow-xl"
            />
          </div>

          {/* Gradient Heading */}
          <Typography
            variant="h1"
            className="
              mb-4 
              text-center 
              md:text-left
              text-5xl 
              sm:text-6xl 
              md:text-7xl 
              font-extrabold 
              bg-gradient-to-r 
              from-teal-200 
              to-teal-500 
              bg-clip-text 
              text-transparent 
              drop-shadow-md
            "
          >
            Hands-on
            <br className="hidden sm:block" />
            Computer Vision
          </Typography>

          {/* Subheading */}
          <Typography
            variant="paragraph"
            className="
              mb-8 
              text-center 
              md:text-left
              text-lg 
              sm:text-xl 
              md:text-2xl 
              text-white 
              font-light 
              leading-relaxed
            "
          >
            Transforma tu visión del mundo: descubre el poder y las
            posibilidades ilimitadas de la visión por computadora.
          </Typography>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button
              size="lg"
              className="
                relative 
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
                transition-transform 
                duration-300
              "
            >
              Incríbete
            </Button>
            <Button
              size="lg"
              variant="text"
              className="
                relative 
                border 
                border-white/30 
                bg-white/10 
                backdrop-blur-sm 
                px-8 
                py-3 
                text-white 
                font-semibold 
                rounded-full 
                shadow-lg 
                hover:bg-white/20 
                hover:shadow-white/20 
                hover:scale-105
                transition-transform
                duration-300
              "
            >
              Leer más
            </Button>
          </div>
        </div>

        {/* Images on the Right */}
        <div className="md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
          <div className="grid grid-cols-2 gap-6">
            {/* Column 1 */}
            <div className="flex flex-col gap-6">
              <div
                className="
                  relative 
                  overflow-hidden 
                  rounded-lg 
                  shadow-lg 
                  hover:scale-105 
                  transition-transform 
                  duration-300
                "
              >
                <Image
                  src="/logos/image1.jpg"
                  alt="Image 1"
                  width={800}
                  height={800}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div
                className="
                  relative 
                  overflow-hidden 
                  rounded-lg 
                  shadow-lg 
                  hover:scale-105 
                  transition-transform 
                  duration-300
                "
              >
                <Image
                  src="/logos/image3.jpg"
                  alt="Image 2"
                  width={800}
                  height={800}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
            {/* Column 2 */}
            <div
              className="
                relative 
                overflow-hidden 
                rounded-lg 
                shadow-lg 
                hover:scale-105 
                transition-transform 
                duration-300
              "
            >
              <Image
                src="/logos/image4.jpg"
                alt="Image 3"
                width={800}
                height={1600}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
