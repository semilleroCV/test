"use client";

import Image from "next/image";
import { Typography } from "@material-tailwind/react";
import { motion } from "framer-motion";

// Datos de ejemplo para las áreas de investigación
const RESEARCH_AREAS = [
  {
    title: "Inteligencia Artificial",
    image: "/images/ai.jpg", 
    description: "Explora los avances en IA y sus aplicaciones en la vida cotidiana.",
  },
  {
    title: "Machine Learning",
    image: "/images/ml.jpg",
    description: "Descubre cómo los algoritmos aprenden de los datos.",
  },
  {
    title: "Robótica",
    image: "/images/robotics.jpg",
    description: "Innovación en robótica y automatización de procesos.",
  },
  {
    title: "Ciencia de Datos",
    image: "/images/data-science.jpg",
    description: "Análisis y visualización de grandes volúmenes de datos.",
  },
  {
    title: "Realidad Virtual",
    image: "/images/vr.jpg",
    description: "Tecnologías inmersivas para educación y entretenimiento.",
  },
  {
    title: "Blockchain",
    image: "/images/blockchain.jpg",
    description: "Seguridad y transparencia en transacciones digitales.",
  },
];

export function ResearchAreas() {
  return (
    <section className="py-8 px-8 lg:py-20 bg-black">
      <div className="container mx-auto text-center">
        <Typography
          variant="h2"
          color="white"
          className="mb-8 text-3xl md:text-4xl lg:text-5xl font-bold"
        >
          Áreas de Investigación
        </Typography>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {RESEARCH_AREAS.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative h-64">
                <Image
                  src={area.image}
                  alt={area.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                <Typography
                  variant="h4"
                  color="white"
                  className="mb-2 text-xl font-bold"
                >
                  {area.title}
                </Typography>
                <Typography color="white" className="text-sm">
                  {area.description}
                </Typography>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ResearchAreas;