"use client";
import React, {
  useEffect,
  useState,
  useCallback,
  useMemo,
  memo,
} from "react";import Image from "next/image";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { Navbar, Footer } from "@/components";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { Container, Engine, InteractivityDetect } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { MdSwipeVertical } from "react-icons/md";


const ScrollUpIcon = () => (
  <div className="fixed top-32 left-1/2 p-6 bg-teal-500 rounded-full shadow-lg animate-bounce">
    <MdSwipeVertical className="text-white text-4xl" />
  </div>
);


gsap.registerPlugin(ScrollTrigger);

interface LenisScrollEvent {
  scroll: number;
  limit: number;
  progress: number;
  delta: number;
  direction: "up" | "down";
}

const ProgressBar = ({ progress }: { progress: number }) => (
  <div className="fixed top-0 left-0 w-full h-1 z-50 bg-gray-800">
    <div
      className="h-full bg-teal-500 transition-all duration-75 ease-linear"
      style={{ width: `${progress * 100}%` }}
    />
  </div>
);

export default function Home() {
  const [progress, setProgress] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);


  useEffect(() => {
    // Set up Lenis for smooth scrolling
    const lenis = new Lenis({ lerp: 0.07 });

    lenis.on("scroll", ({ progress }: LenisScrollEvent) => {
      setProgress(progress);
      ScrollTrigger.update();
      if (progress > 0) {
        setHasScrolled(true);
      }
    });
      

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    // Reveal Animation for text elements
    const revealTexts = document.querySelectorAll(".reveal");
    revealTexts.forEach((textElem) => {
      const el = textElem as HTMLElement;
      const splitText = new SplitType(el);
      const triggerElement = el.parentElement;
      if (triggerElement) {
        gsap.from(splitText.words, {
          opacity: 0,
          ease: "none",
          stagger: 1,
          duration: 1,
          scrollTrigger: {
            trigger: triggerElement,
            start: "center center",
            end: () => `+=${window.innerHeight * 5}px`,
            scrub: true,
            pin: true,
          },
        });
      }
    });
  }, []);

  return (
    <main className="bg-black">
      <ProgressBar progress={progress} />
      <Navbar />
      {!hasScrolled && <ScrollUpIcon />}
      
      <Section>
        <h1 className="reveal text-lg md:text-xl lg:text-4xl font-bold text-white text-center px-4">
          En 2024, exploramos y profundizamos en la visión por computadora. Este es un resumen visual de las sesiones que inspiraron el aprendizaje y la innovación.
        </h1>
      </Section>

      <Gallery images={images} />

      <Section>
        <h1 className="reveal text-lg md:text-xl lg:text-4xl font-bold text-white text-center px-4">
          Nos apasiona compartir los últimos avances en Deep Learning. Estas son algunas imágenes de nuestras sesiones de estudio y de nuestra participación en U24Fest.
        </h1>
      </Section>

      <Gallery2 images={images2} />

      <Section>
        <h1 className="reveal text-lg md:text-xl lg:text-4xl font-bold text-white text-center px-4">
          En HoCV, creamos un espacio para compartir, colaborar y crecer juntos como equipo, fortaleciendo la comunidad y el aprendizaje colectivo.
        </h1>
      </Section>

      <Gallery2 images={images3} />

      <Footer />
    </main>
  );
}

const Section = ({ children }: { children: React.ReactNode }) => (
  <div className="py-12 md:py-20 lg:py-32 text-center">{children}</div>
);

const Gallery = ({ images }: { images: string[] }) => {
  return (
    <div className="px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((src: string, i: number) => (
          <div key={i} className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-xl hover:scale-105 hover:shadow-teal-700 transition-all duration-300">
            <Image src={src} alt="image" fill className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

const Gallery2 = ({ images }: { images: string[] }) => {
  return (
    <div className="px-4">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((src: string, i: number) => (
          <div key={i} className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg hover:scale-105 hover:shadow-teal-900 transition-all duration-300">
            <Image src={src} alt="image" fill className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

// Image sets
const images = [
  "/image/galeria/1.jpg",
  "/image/galeria/2.jpg",
  "/image/galeria/3.jpg",
  "/image/galeria/4.jpg",
  "/image/galeria/5.jpg",
  "/image/galeria/6.jpg",
  "/image/galeria/7.jpg",
  "/image/galeria/8.jpg",
  "/image/galeria/13.jpeg",
  "/image/galeria/16.jpeg",
  "/image/galeria/42.jpg",
  "/image/galeria/43.jpg",
  "/image/galeria/44.jpg",
  "/image/galeria/45.jpg",
  "/image/galeria/36.jpeg",
  "/image/galeria/47.jpg",
  "/image/galeria/48.jpg",
  "/image/galeria/49.jpg",
  "/image/galeria/50.jpg",
  "/image/galeria/51.jpg",
];

const images2 = [
  "/image/galeria/9.jpeg",
  "/image/galeria/10.jpeg",
  "/image/galeria/11.jpeg",
  "/image/galeria/12.jpeg",
  "/image/galeria/17.jpeg",
  "/image/galeria/18.jpeg",
  "/image/galeria/21.jpeg",
  "/image/galeria/24.jpeg",
  "/image/galeria/25.jpeg",
  "/image/galeria/26.jpeg",
  "/image/galeria/27.jpeg",
  "/image/galeria/28.jpeg",
  "/image/galeria/29.jpeg",
  "/image/galeria/30.jpeg",
  "/image/galeria/32.jpeg",
];

const images3 = [
  "/image/galeria/20.jpeg",
  "/image/galeria/33.jpeg",
  "/image/galeria/34.jpeg",
  "/image/galeria/35.jpeg",
  "/image/galeria/39.jpeg",
  "/image/galeria/41.jpeg",
  "/image/galeria/40.jpeg",
  "/image/galeria/38.jpeg",
  "/image/galeria/23.jpeg",
];
