"use client";

import React from "react";
import Image from "next/image";
import { Typography } from "@material-tailwind/react";
import { motion } from "framer-motion";
import { Navbar, Footer } from "@/components";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { TeamCard } from "@/components/team-card";



export default function NosotrosPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-black to-teal-900">
        {/* Hero Section with Cover Image */}
        <div className="relative w-full h-screen mt-[-80px]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="relative w-full h-full"
          >
            <Image
              src="/image/team.jpeg"
              alt="Team Cover"
              fill
              className="object-cover object-center"
              priority
              quality={100}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/100" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute bottom-20 left-0 right-0 px-4"
          >
            <Typography
              variant="h1"
              className="text-4xl md:text-6xl font-bold text-white text-center max-w-5xl mx-auto"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              Construyendo el Futuro de la Visión por Computadora
            </Typography>
          </motion.div>
        </div>

        {/* Mission Section */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 shadow-xl hover:shadow-teal-500/20 transition-all duration-500"
          >
            <Typography
              variant="h3"
              className="text-3xl md:text-4xl font-bold text-white mb-6 text-center"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              Nuestra Misión
            </Typography>
            <Typography
              className="text-gray-200 text-lg md:text-xl text-center max-w-3xl mx-auto leading-relaxed"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              Impulsamos la innovación formando la próxima generación de expertos en computer vision a través de experiencias investigativas y colaborativas.
            </Typography>
          </motion.div>
        </section>

        {/* Team Section */}
        <section className="max-w-7xl mx-auto px-4 pb-20">
          {/* Professors Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <Typography
              variant="h3"
              className="text-3xl md:text-4xl font-bold text-white mb-8 text-center"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              Profesores
            </Typography>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <TeamCard
                name="Hoover Rueda-Chacón"
                role="Director del Semillero"
                image="/image/people/hoover.png"
                socialLinks={{
                  github: "https://github.com/hfarueda",
                  linkedin: "https://co.linkedin.com/in/hoover-rueda-chac%C3%B3n-18318a313"
                }}
              />
              {/* Add more professors as needed */}
            </div>
          </motion.div>

          {/* Masters Students Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <Typography
              variant="h3"
              className="text-3xl md:text-4xl font-bold text-white mb-8 text-center"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              Estudiantes de Maestría
            </Typography>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <TeamCard
                name="Fabian Pérez"
                role="Msc(s) Computer Science"
                image="/image/people/fabian.jpeg"
                socialLinks={{
                  github: "https://github.com/Factral/",
                  linkedin: "https://www.linkedin.com/in/fabianprzz/",
                }}
              />
                        <TeamCard
                name="Julian Leon"
                role="Msc(s) Applied Mathematics"
                image="/image/people/julian.png"
                socialLinks={{
                  github: "https://github.com/Jleon13",
                  linkedin: "https://co.linkedin.com/in/juli%C3%A1n-david-le%C3%B3n-quintero-950413258",
                }}
              />
              {/* Add more master students as needed */}
            </div>
          </motion.div>

          {/* Undergraduate Students Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant="h3"
              className="text-3xl md:text-4xl font-bold text-white mb-8 text-center"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              Estudiantes de Pregrado
            </Typography>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <TeamCard
                name="Cristian Rey"
                role="Estudiante de Ingeniería de Sistemas"
                image="/image/people/cristian.jpeg"
                socialLinks={{
                  github: "https://github.com/CristianR8",
                  linkedin: "https://www.linkedin.com/in/cristian-rey-b33435229/",
                }}
              />
              <TeamCard
                name="Miguel Ángel"
                role="Estudiante de Ingeniería de Sistemas"
                image="/image/people/miguel.jpeg"
                socialLinks={{
                  github: "https://github.com/MiguelAngMolina",
                  linkedin: "https://www.linkedin.com/in/miguelangelmolinagarzon/",
                }}
              />
              <TeamCard
                name="Ramiro Avila"
                role="Estudiante de Ingeniería de Sistemas"
                image="/image/people/ramo.jpeg"
                socialLinks={{
                  github: "https://github.com/ramiro999",
                  linkedin: "https://www.linkedin.com/in/ramiro-avila-chacon/",
                }}
              />
              <TeamCard
                name="Henry Mantilla"
                role="Estudiante de Ingeniería de Sistemas"
                image="/image/people/henry.jpeg"
                socialLinks={{
                  github: "https://github.com/HenryMantilla",
                  linkedin: "https://www.linkedin.com/in/henry-dario-mantilla-claro-9186bb272/",
                }}
              />
              <TeamCard
                name="Paula Uzcategui"
                role="Estudiante de Ingeniería Sistemas y Biologia"
                image="/image/people/paula.jpeg"
                socialLinks={{
                  github: "hhttps://github.com/pauzca"
                }}
              />
              <TeamCard
                name="Guillermo Pinto"
                role="Estudiante de Ingeniería de Sistemas"
                image="/image/people/guillermo.jpeg"
                socialLinks={{
                  github: "https://github.com/guillepinto",
                  linkedin: "https://www.linkedin.com/in/guillepinto",
                }}
              />
              <TeamCard
                name="Sebastian Solano"
                role="Estudiante de Ingeniería Electronica"
                image="/image/people/sebas.jpg"
                socialLinks={{
                  github: "https://github.com/stian1909"
                }}
              />
              <TeamCard
                name="Brayan Quintero"
                role="Estudiante de Ingeniería Sistemas"
                image="/image/people/brayan.jpeg"
                socialLinks={{
                  github: "https://github.com/BrayanQuintero123",
                  linkedin: "https://www.linkedin.com/in/brayan-quintero-7426a2205/",
                }}
              />
              <TeamCard
                name="Andrea Parra"
                role="Estudiante de Ingeniería Sistemas"
                image="/image/people/andrea.jpeg"
                socialLinks={{
                  github: "https://github.com/andpgate"
                }}
              />
              <TeamCard
                name="Dana Villamizar"
                role="Estudiante de Ingeniería Sistemas"
                image="/image/people/dana.jpeg"
                socialLinks={{
                  github: "https://github.com/Danita21"
                }}
              />
              <TeamCard
                name="Jorge Garcia"
                role="Estudiante de Ingeniería Sistemas"
                image="/image/people/jorge.jpeg"
                socialLinks={{
                  github: "https://github.com/jorge1b3"
                }}
              />
              <TeamCard
                name="Juan Toloza"
                role="Estudiante de Ingeniería Sistemas"
                image="/image/people/toloza.png"
                socialLinks={{
                  github: "https://github.com/tolozapd"
                }}
              />
              <TeamCard
                name="Sneider Sánchez"
                role="Estudiante de Ingeniería Sistemas"
                image="/image/people/sneider.jpeg"
                socialLinks={{
                  github: "https://github.com/semilleroCV"
                }}
              />
              <TeamCard
                name="Juan Calderon"
                role="Estudiante de Ingeniería Sistemas"
                image="/image/people/juancalderon.jpeg"
                socialLinks={{
                  github: "https://github.com/JJCG25"
                }}
              />
              <TeamCard
                name="Valentina Pérez"
                role="Estudiante de Ingeniería Sistemas"
                image="/image/people/valentina.jpeg"
                socialLinks={{
                  github: "https://github.com/semilleroCV"
                }}
              />
              <TeamCard
                name="Miguel Pimiento"
                role="Estudiante de Ingeniería Sistemas"
                image="/image/people/pimiento.jpeg"
                socialLinks={{
                  github: "https://github.com/pimientoyolo125"
                }}
              />
              <TeamCard
                name="César Vanegas"
                role="Estudiante de Ingeniería Sistemas"
                image="/image/people/cesar.jpeg"
                socialLinks={{
                  github: "https://github.com/CesarVanegas04"
                }}
              />
              {/* Add more undergraduate students as needed */}
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}