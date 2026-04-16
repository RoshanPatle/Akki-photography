import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-dark-1 text-[#f0ede8] overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Stats />
         <About />
        <Portfolio />
        <Services />
       
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
