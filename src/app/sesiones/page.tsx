"use client";

import React, {
  useRef,
  useEffect,
  useState,
  useCallback,
  useMemo,
  memo,
} from "react";
import { motion } from "framer-motion";
import { Typography } from "@material-tailwind/react";
import { Navbar } from "@/components";
import Image from "next/image";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { Container, Engine, InteractivityDetect } from "@tsparticles/engine";

const SESSIONS = [
  {
    id: 1,
    title: "Pilot",
    location: "Introducción",
    image: "/image/posters/4.png",
    description: "Introducción al semillero",
  },
  {
    id: 2,
    title: "De fotones a pixeles",
    location: "Fundamentos",
    image: "/image/posters/6.png",
    description:
      "Generalidades sobre la adquisición y procesamiento digital de imágenes",
  },
  {
    id: 3,
    title: "Deep Learning",
    location: "IA & CV",
    image: "/image/posters/8.png",
    description:
      "Despierta el poder de la inteligencia artificial en la visión por computadora",
  },
  {
    id: 4,
    title: "Imágenes Espectrales",
    description: "Conoce los secretos que hay mas allá de una imagen de color.",
    image: "/image/posters/10.png",
  },
  {
    id: 5,
    title: "Estimación pasiva de la profundidad",
    description:
      "Explora las técnicas de estimación de profundidad sin fuentes externas",
    image: "/image/posters/12.png",
  },
];

// ─── PARTICLES BACKGROUND ─────────────────────────────────────────────

const ParticlesBackground = memo(() => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log(container);
  }, []);

  const options = useMemo(
    () => ({
      fpsLimit: 120,
      particles: {
        color: { value: "#2DD4BF" },
        links: {
          enable: true,
          color: "#2DD4BF",
          distance: 120,
          opacity: 0.2,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1,
          direction: "none" as const,
          random: false,
          straight: false,
          outModes: { default: "bounce" as const },
        },
        number: {
          value: 150,
          density: { enable: true, area: 600 },
        },
        opacity: { value: 0.3 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 3 } },
      },
      interactivity: {
        detectsOn: InteractivityDetect.window,
        events: {
          onHover: { enable: true, mode: "repulse" },
        },
        modes: {
          repulse: { distance: 150, duration: 0.4 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      className="fixed inset-0 pointer-events-none"
      particlesLoaded={particlesLoaded}
      options={options}
    />
  );
});
ParticlesBackground.displayName = "ParticlesBackground";

// ─── STAMP BORDER COMPONENT ─────────────────────────────────────────────

const StampBorder = () => (
  <svg
    className="absolute inset-0 w-full h-full pointer-events-none"
    viewBox="0 0 100 100"
  >
    <defs>
      <pattern
        id="stamp-texture"
        patternUnits="userSpaceOnUse"
        width="4"
        height="4"
      >
        <path d="M0 0h1v1H0z" fill="rgba(255,255,255,0.05)" />
      </pattern>
    </defs>
    <path
      d="M0,0 v100 h100 v-100 h-100"
      fill="none"
      stroke="url(#stamp-texture)"
      strokeWidth="0.5"
      className="stamp-edge"
    />
    <path
      d="M2,2 v96 h96 v-96 h-96"
      fill="none"
      stroke="rgba(255,255,255,0.1)"
      strokeWidth="0.25"
      strokeDasharray="1,2"
    />
  </svg>
);

// ─── SESSION CARD COMPONENT ─────────────────────────────────────────────

interface SessionCardProps {
  session: typeof SESSIONS[0];
  isActive: boolean;
  isNext: boolean;
  isPrevious: boolean;
  mousePos?: { x: number; y: number };
}

const SessionCard = ({
  session,
  isActive,
  isNext,
  isPrevious,
  mousePos,
}: SessionCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const variants = {
    active: {
      x: 0,
      y: 0,
      scale: 1,
      rotate: 0,
      opacity: 1,
      filter: "blur(0px)",
      zIndex: 30,
    },
    next: {
      x: "50vw",
      y: 0,
      scale: 0.8,
      rotate: 15,
      opacity: 0.5,
      filter: "blur(4px)",
      zIndex: 20,
    },
    previous: {
      x: "-50vw",
      y: 0,
      scale: 0.8,
      rotate: -15,
      opacity: 0.5,
      filter: "blur(4px)",
      zIndex: 20,
    },
    hidden: {
      x: 0,
      y: 0,
      scale: 0.6,
      rotate: 0,
      opacity: 0,
      filter: "blur(8px)",
      zIndex: 10,
    },
  };

  // Compute the inner card transform.
  // If the card is active and we have a mouse position, rotate based on the global mouse position.
  const scale = isHovered ? 1.02 : 1;
  let cardTransform = `scale(${scale})`;
  if (isActive && mousePos) {
    const rotateX = ((mousePos.y / window.innerHeight) - 0.5) * 10;
    const rotateY = ((mousePos.x / window.innerWidth) - 0.5) * 10;
    cardTransform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;
  }

  return (
    <motion.div
      initial="hidden"
      animate={
        isActive ? "active" : isNext ? "next" : isPrevious ? "previous" : "hidden"
      }
      variants={variants}
      transition={{ duration: 0.5 }}
      className={`
        absolute 
        inset-0 
        flex 
        items-center 
        justify-center 
        ${isActive ? "pointer-events-auto" : "pointer-events-none"}
      `}
      style={{ zIndex: isActive ? 30 : isNext || isPrevious ? 20 : 10 }}
    >
      <motion.div
        className="
          relative 
          w-[60vw]
          max-w-2xl
          aspect-square
          bg-gradient-to-br
          from-white/10
          to-white/5
          backdrop-blur-lg 
          rounded-lg 
          overflow-hidden 
          transition-all 
          duration-300 
          hover:shadow-2xl 
          hover:shadow-teal-500/30
          transform
          preserve-3d
          stamp-card
          cursor-pointer
          group
        "
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ transform: cardTransform, transition: "transform 0.2s ease-out" }}
      >
        {/* Stamp-like border decoration */}
        <div className="absolute inset-0 stamp-border z-10">
          <div className="absolute inset-[12px] border-[1px] border-dashed border-white/20 rounded-lg" />
          <div className="absolute inset-[16px] border-[2px] border-white/10 rounded-lg" />
          <StampBorder />
        </div>

        <div className="relative w-full h-full z-20">
          <div className="relative w-full h-full overflow-hidden">
            <Image
              src={session.image}
              alt={session.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              priority
              quality={100}
              sizes="(max-width: 768px) 90vw, (max-width: 1200px) 60vw, 800px"
              loading="eager"
              style={{ objectFit: "cover" }}
              unoptimized
            />
          </div>

          <div
            className={`
              absolute 
              inset-0 
              bg-gradient-to-t 
              from-black/90 
              via-black/50 
              to-transparent
              group-hover:from-black/95
              transition-all
              duration-500
              z-20
            `}
          />

          {/* Description text - hidden on mobile */}
          <div className="absolute bottom-0 left-0 right-0 p-8 z-30 hidden md:block">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="transform transition-all duration-500 group-hover:translate-y-[-8px]"
            >
              <Typography
                className="text-teal-200 text-2xl text-center opacity-90 group-hover:opacity-100"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                {session.description}
              </Typography>
            </motion.div>
          </div>
        </div>

        {/* Reflective overlay */}
        <div
          className={`
            absolute 
            inset-0 
            bg-gradient-to-tr 
            from-transparent 
            via-white/5 
            to-transparent 
            opacity-0 
            group-hover:opacity-70 
            transition-all
            duration-300
            pointer-events-none
            transform
            rotate-180
            z-40
          `}
          style={{
            background: isHovered
              ? "linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)"
              : "none",
            transformStyle: "preserve-3d",
            backfaceVisibility: "hidden",
          }}
        />
      </motion.div>
    </motion.div>
  );
};

// ─── SESIONES PAGE ─────────────────────────────────────────────────────────

export default function SesionesPage() {
  // All hooks are now called unconditionally.
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);
  const [isClient, setIsClient] = useState(false);

  // Safely initialize mousePos (avoiding server-side window access)
  const [mousePos, setMousePos] = useState(() =>
    typeof window !== "undefined"
      ? { x: window.innerWidth / 2, y: window.innerHeight / 2 }
      : { x: 0, y: 0 }
  );

  useEffect(() => {
    setIsClient(true);
    setMousePos({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleIndicatorClick = useCallback(
    (index: number) => {
      if (index !== currentIndex) {
        setCurrentIndex(index);
      }
    },
    [currentIndex]
  );

  const handleWheel = useCallback(
    (e: WheelEvent) => {
      e.preventDefault();

      if (isScrolling) return;

      setIsScrolling(true);

      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      const direction = e.deltaY > 0 ? 1 : -1;
      setCurrentIndex((prevIndex) => {
        const newIndex = Math.max(
          0,
          Math.min(prevIndex + direction, SESSIONS.length - 1)
        );
        return newIndex !== prevIndex ? newIndex : prevIndex;
      });

      scrollTimeout.current = setTimeout(() => {
        setIsScrolling(false);
      }, 500);
    },
    [isScrolling]
  );

  useEffect(() => {
    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [handleWheel]);

  const backgroundGradients = useMemo(
    () => (
      <>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-teal-950 to-black" />
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-black/50 via-teal-900/50 to-black/50"
          animate={{ opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at center, rgba(20,184,166,0.2), transparent 70%)",
          }}
          animate={{ opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 6, repeat: Infinity, repeatType: "mirror" }}
        />
      </>
    ),
    []
  );

  const sessionCards = useMemo(
    () =>
      SESSIONS.map((session, index) => (
        <SessionCard
          key={session.id}
          session={session}
          isActive={index === currentIndex}
          isNext={index === currentIndex + 1}
          isPrevious={index === currentIndex - 1}
          mousePos={mousePos}
        />
      )),
    [currentIndex, mousePos]
  );

  const progressIndicators = useMemo(
    () =>
      SESSIONS.map((_, index) => (
        <motion.button
          key={index}
          onClick={() => handleIndicatorClick(index)}
          className="w-2 h-2 rounded-full bg-white/20 cursor-pointer transition-transform hover:scale-150"
          animate={{
            scale: index === currentIndex ? 1.5 : 1,
            backgroundColor:
              index === currentIndex
                ? "rgb(20 184 166 / 0.8)"
                : "rgb(255 255 255 / 0.2)",
          }}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.8 }}
          aria-label={`Go to slide ${index + 1}`}
        />
      )),
    [currentIndex, handleIndicatorClick]
  );

  // Render a fallback UI while waiting for the client.
  if (!isClient) {
    return <div className="min-h-screen bg-black" />;
  }

  return (
    <>
      <Navbar />
      <div className="relative min-h-screen bg-black">
        <motion.div
          className="fixed inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {backgroundGradients}
        </motion.div>

        <ParticlesBackground />

        <div className="fixed top-0 h-screen w-full overflow-hidden">
          <div className="relative h-full w-full">{sessionCards}</div>
        </div>

        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3">
          {progressIndicators}
        </div>
      </div>

      <style jsx global>{`
        .stamp-card {
          position: relative;
          isolation: isolate;
          box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1),
            0 0 0 4px rgba(255, 255, 255, 0.05),
            0 0 10px rgba(13, 148, 136, 0.1);
          transform-style: preserve-3d;
          perspective: 1000px;
        }

        .stamp-card::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            transparent 0%,
            rgba(255, 255, 255, 0.05) 50%,
            transparent 100%
          );
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }

        .stamp-card:hover::after {
          opacity: 1;
        }
      `}</style>
    </>
  );
}
