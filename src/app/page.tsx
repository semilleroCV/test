// components
import { Navbar, Footer } from "@/components";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });



// sections
import Hero from "./hero";
import SponsoredBy from "./sponsored-by";
import AboutEvent from "./about-event";
import OurStats from "./our-stats";
import EventContent from "./event-content";
import Faq from "./faq";

export default function Portfolio() {
  return (
    <main className={inter.className}>
      <Navbar />
      <Hero />
      <SponsoredBy />
      {/* <AboutEvent />
      <OurStats /> */}
      <EventContent />
      <Faq />
      <Footer />
    </main>
  );
}
