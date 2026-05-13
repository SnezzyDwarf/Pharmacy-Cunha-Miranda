import Navbar from "../components/ui/navbar/Navbar";
import About from "../components/sections/about/About";
import Hero from "../components/sections/hero/Hero";
import Services from "../components/sections/servicesSection/Services";
import Team from "../components/sections/team/Team";
import Local from "../components/sections/local/local";
import Contacts from "../components/sections/contacts/Contacts";
import Footer from "../components/sections/footer/Footer";

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
        <Team />
        <Local />
        <Contacts />
        <Footer />
      </main>
    </>
  );
}
