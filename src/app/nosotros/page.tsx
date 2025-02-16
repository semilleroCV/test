"use client";

import React from "react";
import Image from "next/image";
import { Typography } from "@material-tailwind/react";
import { motion } from "framer-motion";
import { Navbar, Footer } from "@/components";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const TEAM_MEMBERS = [
  
];

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
              Impulsamos la innovación en visión por computadora, formando la próxima generación de expertos en tecnología visual a través de experiencias prácticas y colaborativas.
            </Typography>
          </motion.div>
        </section>

        {/* Team Grid */}
        <section className="max-w-7xl mx-auto px-4 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEAM_MEMBERS.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6 transform group-hover:translate-y-[-10px] transition-transform duration-300">
                  <Typography
                    variant="h4"
                    className="text-white font-bold mb-2 group-hover:text-teal-300 transition-colors duration-300"
                    placeholder=""
                    onPointerEnterCapture={() => {}}
                    onPointerLeaveCapture={() => {}}
                  >
                    {member.name}
                  </Typography>
                  <Typography
                    variant="lead"
                    className="text-teal-300 mb-4"
                    placeholder=""
                    onPointerEnterCapture={() => {}}
                    onPointerLeaveCapture={() => {}}
                  >
                    {member.role}
                  </Typography>
                  <Typography
                    className="text-gray-300 mb-4"
                    placeholder=""
                    onPointerEnterCapture={() => {}}
                    onPointerLeaveCapture={() => {}}
                  >
                    {member.description}
                  </Typography>
                  <div className="flex gap-4">
                    {Object.entries(member.social).map(([platform, url]) => (
                      <a
                        key={platform}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-teal-300 transform hover:scale-125 transition-all duration-300"
                      >
                        {platform === 'github' && <FaGithub size={24} />}
                        {platform === 'linkedin' && <FaLinkedin size={24} />}
                        {platform === 'twitter' && <FaTwitter size={24} />}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-teal-500/50 rounded-2xl transition-colors duration-300" />
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}