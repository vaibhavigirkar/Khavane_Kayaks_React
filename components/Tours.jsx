import { useEffect, useState } from "react";
import tourImg1 from "../assets/images/Tours_img1.jpg";
import tourImg2 from "../assets/images/Tours_img2.png";
import tourImg3 from "../assets/images/Tours_img3.jpeg";
import tourImg4 from "../assets/images/Tours_img4.jpg";

const Tours = () => {
  const [showAllMobileCards, setShowAllMobileCards] = useState(false);

  const tourCards = [
    {
      img: tourImg1,
      alt: "Mangrove kayaking",
      title: "Hidden Mangrove Routes",
      description:
        "Paddle through calm waterways surrounded by lush mangroves, offering a peaceful and scenic kayaking experience.",
      revealClass: "reveal-left reveal-delay-1",
    },
    {
      img: tourImg2,
      alt: "Safety gear",
      title: "Safety First",
      description:
        "Certified guides, quality equipment, and clear safety briefings before every trip ensure a relaxed and secure experience.",
      revealClass: "reveal-right reveal-delay-2",
    },
    {
      img: tourImg3,
      alt: "Sunset kayaking",
      title: "For All Skill Levels",
      description:
        "Whether it's your first paddle or you kayak often, our tours are paced to suit beginners and experienced paddlers alike.",
      revealClass: "reveal-left reveal-delay-3",
    },
    {
      img: tourImg4,
      alt: "Group kayaking",
      title: "Groups & Families",
      description:
        "Perfect for families, friends, and small groups with custom options for outings, schools, and team experiences.",
      revealClass: "reveal-right reveal-delay-4",
    },
  ];

  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.15 }
    );

    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="tours-section" id="tours">
      <div className="tours-header reveal reveal-up">
        <h2>Our Kayaking Tours</h2>
        <p>
          Thoughtfully designed experiences that balance adventure, safety,
          and the quiet beauty of Khavane backwaters.
        </p>
      </div>

      <div className="tours-grid">
        {tourCards.map((card, index) => (
          <div
            key={card.title}
            className={`tour-card reveal ${card.revealClass} ${
              index > 1 && !showAllMobileCards ? "tour-card-mobile-hidden" : ""
            }`}
          >
            <div className="tour-icon">
              <img src={card.img} alt={card.alt} />
            </div>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>

      <div className="tours-more-wrap">
        <button
          type="button"
          className="tours-more-btn"
          onClick={() => setShowAllMobileCards((prev) => !prev)}
          aria-expanded={showAllMobileCards}
        >
          {showAllMobileCards ? "Show Less" : "Show More"}
        </button>
      </div>
    </section>
  );
};

export default Tours;
