"use client";

import React from "react";
import { Navbar, Footer } from "@/components";
import { Typography } from "@material-tailwind/react";
import { motion } from "framer-motion";

export default function NosotrosPage() {
  return (
    <>
      <Navbar />
      <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-black to-teal-900 px-4">
        {/* Floating colored blobs (for a more dynamic background) */}
        <motion.div
          className="absolute top-[-5rem] left-[-5rem] w-72 h-72 bg-pink-700 rounded-full mix-blend-multiply filter blur-3xl opacity-40"
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-5rem] right-[-5rem] w-72 h-72 bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl opacity-40"
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[50%] left-[50%] w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
          animate={{ x: [0, 40, -40, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Content Wrapper */}
        <div className="relative z-10 flex flex-col items-center justify-center p-6">
          <Typography
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
            variant="h1"
            className="
              text-4xl
              md:text-6xl
              font-extrabold
              text-white
              text-center
              drop-shadow-lg
              mb-4
            "
          >
            🏗️ En construcción 🏗️
          </Typography>
           
        </div>
      </main>
      <Footer />
    </>
  );
}
