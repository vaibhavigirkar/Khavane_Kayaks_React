import { useEffect, useRef, useState } from "react";
import heroVideo from "../assets/videos/hero-video.mp4";

const Hero = () => {
  const videoRef = useRef(null);
  const overlayRef = useRef(null);
  const [showCTA, setShowCTA] = useState(false);

  const scrollToBookingForm = () => {
    const formSection = document.getElementById("booking-form");
    if (!formSection) return;

    const navbar = document.querySelector(".navbar");
    const navbarHeight = navbar?.offsetHeight ?? 75;
    const isMobile = window.innerWidth <= 768;
    const extraGap = isMobile ? 8 : 12;
    const centerNudge = isMobile ? 26 : 18;

    const targetTop =
      formSection.getBoundingClientRect().top +
      window.scrollY -
      navbarHeight -
      extraGap +
      centerNudge;

    window.scrollTo({
      top: Math.max(0, targetTop),
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;

      // Subtle video speed change
      if (videoRef.current) {
        videoRef.current.playbackRate = Math.min(1.25, 1 + y / 3000);
      }

      // Gentle vertical drift
      if (overlayRef.current) {
        overlayRef.current.style.transform = `translateY(${y * -0.1}px)`;
      }

      // Show CTA only after small scroll
      setShowCTA(y > 120);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
  <section id="home" className="hero">

      <video
        ref={videoRef}
        className="hero-video"
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      <div ref={overlayRef} className="hero-overlay">
        <h1 className="hero-title">
          <span className="white-text">KAYA</span>
          <span className="gold-text">KING</span>
        </h1>

        <p className="hero-subtitle">Welcome to Khavane Kayaks</p>
        <p className="hero-tagline">Paddle slow. Feel more.</p>

        {showCTA && (
          <button
            className="hero-cta"
            onClick={scrollToBookingForm}
          >
            Book Your Adventure
          </button>
        )}
      </div>

      <div className="scroll-indicator">↓</div>
    </section>
  );
};

export default Hero;
