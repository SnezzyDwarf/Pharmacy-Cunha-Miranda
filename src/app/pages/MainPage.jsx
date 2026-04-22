import Navbar from "../components/ui/navbar/Navbar";
import About from "../components/sections/about/About";
import Hero from "../components/sections/hero/Hero";
import Services from "../components/sections/servicesSection/Services";

export default function MainPage() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <About />
        <Services />
      </main>
    </>
  );
}
