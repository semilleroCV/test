"use client";

import { Tab, Tabs, TabsHeader } from "@material-tailwind/react";
import { Typography } from "@material-tailwind/react";
import { useState } from "react";
import EventContentCard from "@/components/event-content-card";
import { motion } from "framer-motion";

// Define the session data
const SESSIONS = [
  {
    id: "session1",
    title: "Sesión 1",
    subject: "Sesión 1: Piloto",
    des: "Learn the basics of Artificial Intelligence and its applications.",
    img: "/image/posters/4.png",
  },
  {
    id: "session2",
    title: "Sesión 2",
    subject: "Sesión 2: De fotones a pixeles",
    des: "Explore the fundamentals of Machine Learning and its algorithms.",
    img: "/image/posters/6.png",
  },
  {
    id: "session3",
    title: "Sesión 3",
    subject: "Sesión 3: Deep Learning",
    des: "Understand the concepts of Deep Learning and neural networks.",
    img: "/image/posters/8.png",
  },
  // Add more sessions here (up to 12)
  {
    id: "session4",
    title: "Sesión 4",
    subject: "Sesión 4: Imágenes Espectrales",
    des: "Discover how AI is transforming the healthcare industry.",
    img: "/image/posters/10.png",
  },
  {
    id: "session5",
    title: "Sesión 5",
    subject: "Sesión 5: Estimación pasiva de la profundidad",
    des: "Discover how AI is transforming the healthcare industry.",
    img: "/image/posters/12.png",
  },
  {
    id: "session6",
    title: "Sesión 6",
    subject: "Sesión 6: Estimación activa de la profundidad",
    des: "Discover how AI is transforming the healthcare industry.",
    img: "/image/posters/13.png",
  },
  {
    id: "session7",
    title: "Sesión 7",
    subject: "Sesión 7: Asignación de proyectos",
    des: "Discover how AI is transforming the healthcare industry.",
    img: "/image/posters/14.png",
  },
  {
    id: "session8",
    title: "Sesión 8",
    subject: "Sesión 8: Segmentación",
    des: "Discover how AI is transforming the healthcare industry.",
    img: "/image/posters/15.png",
  },
  {
    id: "session9",
    title: "Sesión 9",
    subject: "Sesión 9: Imágenes térmicas",
    des: "Discover how AI is transforming the healthcare industry.",
    img: "/image/posters/16.png",
  },
  {
    id: "session10",
    title: "Sesión 10",
    subject: "Sesión 10: Optimización",
    des: "Discover how AI is transforming the healthcare industry.",
    img: "/image/posters/17.png",
  },
  {
    id: "session11",
    title: "Sesión 11",
    subject: "Sesión 11: NLP",
    des: "Discover how AI is transforming the healthcare industry.",
    img: "/image/posters/18.png",
  },
  {
    id: "session12",
    title: "Sesión 12",
    subject: "Sesión 12: Proyectos finales",
    des: "Discover how AI is transforming the healthcare industry.",
    img: "/image/posters/19.png",
  },
];

export default function EventContent() {
  const [activeSession, setActiveSession] = useState(SESSIONS[0].id);

  return (
    <section className="pb-8 px-4 lg:pb-20 bg-gradient-to-b from-black to-teal-900">
      <Typography
        variant="h2"
        className="text-center text-white mb-10 font-bold text-3xl md:text-4xl lg:text-5xl"
      >
        Cronograma del Semillero
      </Typography>

      {/* Tabs for session navigation */}
      <Tabs value={activeSession} className="mb-8">
        <div className="w-full flex mb-8 flex-col items-center">
          <TabsHeader className="h-14 w-full md:w-auto bg-teal-900 border-2 border-teal-800 rounded-lg shadow-sm overflow-x-auto whitespace-nowrap">
            {SESSIONS.map((session) => (
              <Tab
                key={session.id}
                value={session.id}
                onClick={() => setActiveSession(session.id)}
                className={`relative mx-2 font-medium text-white hover:bg-teal-700 transition-colors duration-300 rounded-lg ${
                  activeSession === session.id ? "text-teal-900 shadow-lg" : ""
                }`}
              >
                {activeSession === session.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 rounded-lg"
                  />
                )}
                <span className="relative z-10">{session.title}</span>
              </Tab>
            ))}
          </TabsHeader>
        </div>
      </Tabs>

      {/* Display the active session content */}
      <div className="mx-auto max-w-6xl min-h-[500px]">
        {SESSIONS.map(
          (session) =>
            session.id === activeSession && (
              <EventContentCard
                key={session.id}
                title={session.subject}
                des={session.des}
                img={session.img}
              />
            )
        )}
      </div>
    </section>
  );
}