import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { WorkTiles } from "@/components/WorkTiles";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
// import { Instagram } from "@/components/Instagram";

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative z-0 bg-bg">
        <Hero />
        <About />
        <WorkTiles />
        {/* Instagram section — re-enable when ready */}
        {/* <Instagram /> */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
