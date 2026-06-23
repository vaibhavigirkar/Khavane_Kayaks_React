import { useEffect, useState } from "react";
import aboutImg1 from "../assets/images/about_img1.jpg";
import aboutImg2 from "../assets/images/about_img2.jpg";

const About = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const updateIsMobile = () => setIsMobile(window.innerWidth <= 900);
    updateIsMobile();
    window.addEventListener("resize", updateIsMobile);
    return () => window.removeEventListener("resize", updateIsMobile);
  }, []);

  return (
    <section className="about-section reveal" id="about">
      <div className="about-container">
        <div className="about-text reveal reveal-left">
          <h2>
            About <span>Khavane Kayaks</span>
          </h2>

          <p className="about-desc">
            At Khavane Kayaks, we invite you to paddle through paradise!
            Nestled in the serene beauty of Vengurla, we offer unforgettable
            kayaking experiences through lush mangrove forests and peaceful
            backwaters, covering scenic routes of 3-4 km.
          </p>

          <div className={!isExpanded && isMobile ? "about-extra is-collapsed" : "about-extra"}>
            <p className="about-desc">
              Come discover the raw beauty of Konkan with us, where every paddle
              stroke brings you closer to nature. Whether you're chasing
              adventure or seeking peace, Khavane Kayaks is your go-to kayaking
              destination.
            </p>

            <ul className="about-features">
              <li>100% Safety record with certified guides</li>
              <li>Eco-friendly, nature-first tours</li>
              <li>Custom experiences for all skill levels</li>
            </ul>
          </div>

          <button
            type="button"
            className="about-read-more-btn"
            onClick={() => setIsExpanded((prev) => !prev)}
            aria-expanded={isExpanded}
          >
            {isExpanded ? "Show Less" : "Read More"}
          </button>
        </div>

        <div className="about-image-stack reveal reveal-right">
          <img src={aboutImg1} alt="Khavane Kayaks" className="img-back" />
          <img src={aboutImg2} alt="Kayaking Experience" className="img-front" />
        </div>
      </div>
    </section>
  );
};

export default About;
