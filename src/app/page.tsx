// components
import { Navbar, Footer } from "@/components";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });



// sections
import EventContent from "./event-content";
import Hero from "./hero";
import SponsoredBy from "./sponsored-by";
import Faq from "./faq";

export default function Portfolio() {
  return (
    <main className={inter.className}>
      <Navbar />
      <Hero />
      <SponsoredBy />
      <EventContent />
      <Faq />
      <Footer />
    </main>
  );
}
