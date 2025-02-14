"use client";

import React from "react";
import Image from "next/image";
import { Typography } from "@material-tailwind/react";

export function Faq() {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-16 px-8 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-teal-900 to-black" />

      {/* Floating blobs for a dynamic feel */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-teal-900 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-[float_8s_ease-in-out_infinite]" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-green-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-[float_8s_ease-in-out_infinite_2s]" />

      {/* Glassmorphism Card */}
      <div className="relative 
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
          py-12">
        {/* Person's Photo */}
        <div className="w-full md:w-1/3 mb-8 md:mb-0 relative overflow-hidden rounded-lg shadow-lg">
          <Image
            src="/logos/author.png" 
            alt="Person in charge"
            width={300}
            height={400}
            className="object-cover rounded-lg"
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-2/3 md:pl-8">
          {/* Title */}
          <Typography
            variant="h6"
            color="white"
            className="text-sm font-semibold uppercase mb-2"
          >
            Dirigido por
          </Typography>

          {/* Name & Role */}
          <Typography
            variant="h2"
            className="text-white font-extrabold text-3xl sm:text-4xl mb-4"
          >
            Hoover Fabian Rueda Chacón
          </Typography>

          {/* Small Bio */}
          <Typography
            variant="paragraph"
            className="text-gray-200 text-sm sm:text-base leading-relaxed text-justify"
          >
            Ingeniero de Sistemas e Informática, con maestría y doctorado en
            Ingeniería Eléctrica y Computación. Realizó su formación en Colombia y
            EE. UU., siendo Asociado Postdoctoral en la Universidad de Boston. Sus
            áreas de investigación incluyen procesamiento de imágenes, algoritmos,
            óptica computacional y optimización numérica.
          </Typography>
        </div>
      </div>
    </section>
  );
}

export default Faq;