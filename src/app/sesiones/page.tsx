"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import Image from "next/image";
import { Typography } from "@material-tailwind/react";

// Define the session data - Reusing from event-content.tsx for consistency
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


const ParallaxCard: React.FC<{ session: any, index: number, scrollYProgress: any }> = ({ session, index, scrollYProgress }) => {
    const cardRef = useRef(null);

    const yRange = [index - 1, index]; // Trigger points for animation
    const y = useTransform(scrollYProgress, yRange, ["100vh", "0vh"]);
    const opacity = useTransform(scrollYProgress, yRange, [0, 1]);
    const scale = useTransform(scrollYProgress, yRange, [0.8, 1]);
    const rotateY = useTransform(scrollYProgress, yRange, ["45deg", "0deg"]);
    const rotateX = useTransform(scrollYProgress, yRange, ["15deg", "0deg"]);


    return (
        <motion.div
            ref={cardRef}
            style={{ y, opacity, scale, rotateY, rotateX, z: index * 10 }}
            className="session-card"
        >
            <div className="image-container">
                <Image
                    src={session.img}
                    alt={session.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-xl"
                />
            </div>
            <div className="content">
                <Typography variant="h4" color="white" className="font-bold mb-4">{session.subject}</Typography>
                <Typography variant="paragraph" color="gray" className="font-normal">{session.des}</Typography>
                 <button
                    className="mt-6 relative
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
                        transition-all
                        duration-300"
                >
                    Explorar Sesión
                </button>
            </div>
        </motion.div>
    );
};


const SesionesPage = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ container: ref });
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);


    return (
        <div className="sesiones-container" ref={ref} style={{ perspective: "1000px" }}>
             <div className="bg-gradient-to-b from-black to-teal-900 absolute inset-0 -z-10 h-full w-full"></div>
            <Typography
                variant="h2"
                className="text-center text-white mb-12 font-bold text-3xl md:text-4xl lg:text-5xl mt-20 relative z-10"
            >
                Cronograma del Semillero
            </Typography>

            <div className="sessions-wrapper">
                {isClient && SESSIONS.map((session, index) => (
                    <ParallaxCard key={session.id} session={session} index={index} scrollYProgress={scrollYProgress} />
                ))}
            </div>
        </div>
    );
};

export default SesionesPage;