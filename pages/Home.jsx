import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Tours from "../components/Tours";
import Gallery from "../components/Gallery";
import Testimonials from "../components/Testimonials";
import WaveDivider from "../components/WaveDivider";
import Booking from "../components/Booking";
import BookingForm from "../components/BookingForm";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import useReveal from "../hooks/useReveal";

const Home = () => {
  useReveal();

  const [selectedPackage, setSelectedPackage] = useState(null);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Tours />
      <Gallery />
      <Testimonials />
      <WaveDivider />

      {/* STEP 1: Select Package */}
      <Booking onSelectPackage={setSelectedPackage} />

      {/* STEP 2: Auto-filled Form */}
      <BookingForm selectedPackage={selectedPackage} />

      <Contact />
      <Footer />
    </>
  );
};

export default Home;
