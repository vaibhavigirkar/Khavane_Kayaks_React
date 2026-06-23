import { useEffect, useState } from "react";
import testimonialsData from "../data/testimonialsData";

const AUTO_DELAY = 2000; // 5 seconds

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // AUTO LOOP
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) =>
        prev === testimonialsData.length - 1 ? 0 : prev + 1
      );
    }, AUTO_DELAY);

    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  const testimonial = testimonialsData[activeIndex];

  return (
    <section className="testimonials-section reveal" id="testimonials">
      <div className="testimonials-header reveal">
  <h2 className="testimonials-title">Testimonials</h2>
</div>

      <div className="testimonial-wrapper">

        {/* Decorative back card */}
        <div className="testimonial-card back-card"></div>

        {/* Main testimonial card */}
        <div className="testimonial-card front-card">

          {/* Stars */}
          <div className="testimonial-stars">★★★★★</div>

          {/* Greeting */}
          <p className="testimonial-greeting">
            Hi Khavne Kayaks,
          </p>

          {/* Testimonial text */}
          <p className="testimonial-text">
            {testimonial.text}
          </p>

          {/* Author */}
          <div className="testimonial-author">
            <img
              src={`/images/testimonials/${testimonial.image}`}
              alt={testimonial.name}
              className="testimonial-img"
            />
            <div>
              <h4 className="author-name">{testimonial.name}</h4>
              <span className="author-role">{testimonial.role}</span>
            </div>
          </div>

        </div>
      </div>

      {/* DOTS */}
      <div className="testimonial-dots">
        {testimonialsData.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === activeIndex ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
            aria-label={`Show testimonial ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
