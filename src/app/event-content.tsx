"use client";

import { Tab, Tabs, TabsHeader } from "@material-tailwind/react";
import { Button, Typography } from "@material-tailwind/react";
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
    img: "/image/4.png",
  },
  {
    id: "session2",
    title: "Sesión 2",
    subject: "Sesión 2: De fotones a pixeles",
    des: "Explore the fundamentals of Machine Learning and its algorithms.",
    img: "/image/5.png",
  },
  {
    id: "session3",
    title: "Sesión 3",
    subject: "Sesión 3: Deep Learning",
    des: "Understand the concepts of Deep Learning and neural networks.",
    img: "/image/7.png",
  },
  // Add more sessions here (up to 12)
  {
    id: "session4",
    title: "Sesión 4",
    subject: "Sesión 4: Imágenes Espectrales",
    des: "Discover how AI is transforming the healthcare industry.",
    img: "/image/8.png",
  },
  {
    id: "session5",
    title: "Sesión 5",
    subject: "Sesión 5: Estimación pasiva de la profundidad",
    des: "Discover how AI is transforming the healthcare industry.",
    img: "/image/9.",
  },
  {
    id: "session6",
    title: "Sesión 6",
    subject: "Sesión 6: Estimación activa de la profundidad",
    des: "Discover how AI is transforming the healthcare industry.",
    img: "/image/avatar12.jpg",
  },
  {
    id: "session7",
    title: "Sesión 7",
    subject: "Sesión 7: Estimación activa de la profundidad",
    des: "Discover how AI is transforming the healthcare industry.",
    img: "/image/avatar12.jpg",
  },
  {
    id: "session8",
    title: "Sesión 8",
    subject: "Sesión 8: Asignación de proyectos",
    des: "Discover how AI is transforming the healthcare industry.",
    img: "/image/avatar12.jpg",
  },
  {
    id: "session9",
    title: "Sesión 9",
    subject: "Sesión 9: Segmentación",
    des: "Discover how AI is transforming the healthcare industry.",
    img: "/image/avatar12.jpg",
  },
  {
    id: "session10",
    title: "Sesión 10",
    subject: "Sesión 10: Imágenes térmicas",
    des: "Discover how AI is transforming the healthcare industry.",
    img: "/image/avatar12.jpg",
  },
  {
    id: "session11",
    title: "Sesión 11",
    subject: "Sesión 11: Optimización",
    des: "Discover how AI is transforming the healthcare industry.",
    img: "/image/avatar12.jpg",
  },
  {
    id: "session12",
    title: "Sesión 12",
    subject: "Sesión 12: NLP",
    des: "Discover how AI is transforming the healthcare industry.",
    img: "/image/avatar12.jpg",
  },
  {
    id: "session13",
    title: "Sesión 13",
    subject: "Sesión 13: Proyectos finales",
    des: "Discover how AI is transforming the healthcare industry.",
    img: "/image/avatar12.jpg",
  },
];

export default function EventContent() {
  const [activeSession, setActiveSession] = useState(SESSIONS[0].id);

  return (
    <section className="pb-8 px-4 lg:pb-20 bg-black">
      <Typography
        variant="h2"
        className="text-center text-white mb-10 font-bold text-3xl md:text-4xl"
      >
        Cronograma del Semillero
      </Typography>

      {/* Tabs for session navigation */}
      <Tabs value={activeSession} className="mb-8">
        <div className="w-full flex mb-8 flex-col items-center">
          <TabsHeader className="h-14 w-full md:w-auto bg-teal-900 border-2 border-teal-800 rounded-lg shadow-sm">
            {SESSIONS.map((session) => (
              <Tab
                key={session.id}
                value={session.id}
                onClick={() => setActiveSession(session.id)}
                className={`relative mx-2 font-medium text-white hover:bg-teal-700 transition-colors duration-300 rounded-lg ${
                  activeSession === session.id ? "bg-teal-600 shadow-lg" : ""
                }`}
              >
                {activeSession === session.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-teal-500 rounded-lg"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{session.title}</span>
              </Tab>
            ))}
          </TabsHeader>
        </div>
      </Tabs>

      {/* Display the active session content */}
      <div className="mx-auto max-w-6xl">
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