"use client";

import Image from "next/image";
import { Typography } from "@material-tailwind/react";
import { motion } from "framer-motion";

const RESEARCH_AREAS = [
  {
    title: "Imágenes sin visibilidad directa",
    image: "/image/areas/nlos.png", 
    description: "Mira a través de las paredes: tecnología para ver más allá de los obstáculos.",
  },
  {
    title: "Estimación de la profundidad",
    image: "/image/areas/depth.jpg",
    description: "Profundiza en el mundo 3D: algoritmos que miden distancias con precisión.",
  },
  {
    title: "NLP",
    image: "/image/areas/nlp.png",
    description: "Comunícate con las máquinas: inteligencia que entiende el lenguaje humano.",
  },
  {
    title: "Segmentación de materiales",
    image: "/image/areas/segmentation.png",
    description: "Segmenta a con alta precisión: identificación meticulosa de materiales en imágenes.",
  },
  {
    title: "Imágenes espectrales",
    image: "/image/areas/spectral.jpg",
    description: "Más allá del RGB: captura el espectro completo de la luz.",
  },
  {
    title: "Imágenes térmicas",
    image: "/image/areas/thermal.webp",
    description: "Visualiza a través del calor: tecnología que revela lo invisible al ojo humano.",
  },
];

export function ResearchAreas() {
  return (
    <section className="pb-8 px-8 lg:pb-48 bg-black">
      <div className="container mx-auto text-center">
        <Typography
                    placeholder=""
                    onPointerEnterCapture={() => {}}
                    onPointerLeaveCapture={() => {}}
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
              <div className="relative h-96 transition-transform duration-300 hover:scale-110">
                <Image
                  src={area.image}
                  alt={area.title}
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                <Typography
                            placeholder=""
                            onPointerEnterCapture={() => {}}
                            onPointerLeaveCapture={() => {}}
                  variant="h4"
                  color="white"
                  className="mb-2 text-xl font-bold"
                >
                  {area.title}
                </Typography>
                <Typography color="white" className="text-sm"             placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}>
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