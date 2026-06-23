import { useEffect, useState } from "react";
import logo from "../assets/images/LOGO_1.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  const sections = [
    "home",
    "about",
    "tours",
    "gallery",
    "testimonials",
    "booking",
  ];

  const sectionTargetSelectors = {
    home: ".hero-overlay",
    about: ".about-container",
    tours: ".tours-header",
    gallery: ".gallery-wrapper",
    testimonials: ".testimonials-header",
    booking: ".booking-title",
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      let current = "home";
      let min = Infinity;

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const dist = Math.abs(el.getBoundingClientRect().top);
        if (dist < min) {
          min = dist;
          current = id;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (!el) return;

    const navbar = document.querySelector(".navbar");
    const navbarHeight = navbar?.offsetHeight ?? 75;
    const extraGap = window.innerWidth <= 768 ? 10 : 14;

    const targetSelector = sectionTargetSelectors[id];
    const targetElement = targetSelector
      ? el.querySelector(targetSelector) || el
      : el;

    const targetTop =
      targetElement.getBoundingClientRect().top +
      window.scrollY -
      navbarHeight -
      extraGap;

    window.scrollTo({
      top: Math.max(0, targetTop),
      behavior: "smooth",
    });
  };

  return (
    <nav className={`navbar ${scrolled ? "navbar-solid" : "transparent"}`}>
      
      {/* LOGO */}
      <div
        className="logo"
        onClick={() => {
          // 📱 mobile → toggle menu
          if (window.innerWidth <= 768) {
            setOpen(!open);
          } else {
            handleNavClick("home");
          }
        }}
      >
        <img src={logo} alt="Khavane Kayaks Logo" className="navbar-logo" />
        <span className="brand-text">Khavane Kayaks</span>
      </div>

      {/* HAMBURGER */}
      <div className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </div>

      {/* NAV LINKS */}
      <ul className={`nav-links ${open ? "open" : ""}`}>
        {sections.map((item) => (
          <li key={item}>
            <button
              className={`nav-btn ${active === item ? "active" : ""}`}
              onClick={() => handleNavClick(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
