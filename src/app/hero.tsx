"use client";

import { Button, Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import Image from "next/image";


export default function Hero() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section
      className="
        relative 
        flex 
        min-h-screen 
        w-full 
        items-center 
        justify-center 
        overflow-hidden 
      "
    >
      {/* New Background Pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full [background:radial-gradient(125%_125%_at_50%_10%,#003027_5%,#000_80%)]"></div>

      {/* Glassmorphism container */}
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
          rounded-3xl 
          bg-white/10 
          backdrop-blur-md 
          p-20 sm:p-12 md:p-16 
          shadow-2xl 
          border 
          border-white/20
          animate-fadeInUp
          mx-4
          md:mx-8
          lg:mx-16
          xl:mx-32
        "
      >
        {/* Content on the left */}
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

          {/* Heading with gradient text */}
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
              bg-white
              bg-clip-text 
              text-transparent 
              drop-shadow-md
            "
          >
            Hands-on <br className="hidden sm:block" />
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
                transition-shadow 
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
                transition 
                duration-300
              "
            >
              Leer más
            </Button>
          </div>
        </div>

        {/* Images on the right */}
        <div className="md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
          <div className="grid grid-cols-2 gap-6">
            {/* First column with two images */}
            <div className="flex flex-col gap-6">
              <div className="relative overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
                <Image
                  src="/logos/image1.jpg"
                  alt="Image 1"
                  width={800} // Increased width
                  height={800} // Increased height
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
                <Image
                  src="/logos/image3.jpg"
                  alt="Image 2"
                  width={800} // Increased width
                  height={800} // Increased height
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Second column with one image */}
            <div className="relative overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
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