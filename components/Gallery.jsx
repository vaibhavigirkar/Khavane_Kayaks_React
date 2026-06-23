import { useEffect, useState } from "react";
import "../styles/Gallery.css";

import img1 from "../assets/images/gallery1.jpg";
import img2 from "../assets/images/gallery2.jpg";
import img3 from "../assets/images/gallery3.jpg";
import img4 from "../assets/images/gallery4.jpg";
import img5 from "../assets/images/gallery5.jpg";
import img6 from "../assets/images/gallery6.jpg";
import img7 from "../assets/images/gallery7.jpg";
import img8 from "../assets/images/gallery8.jpg";
import img9 from "../assets/images/gallery9.jpg";
import img10 from "../assets/images/gallery10.jpg";
import img11 from "../assets/images/gallery11.jpg";
import img12 from "../assets/images/gallery12.jpg";
import img13 from "../assets/images/gallery13.jpg";
import img14 from "../assets/images/gallery14.jpg";
import img15 from "../assets/images/gallery15.jpg";
import img16 from "../assets/images/gallery16.jpg";
import img17 from "../assets/images/gallery17.jpg";

const mainImages = [img1, img2, img3, img4];

const extraImages = [
  img6, img7, img8, img9, img10,
  img11, img12, img13, img14,
  img15, img16, img17
];

export default function Gallery() {
  const [viewer, setViewer] = useState(null);
  const [showMore, setShowMore] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateIsMobile = () => setIsMobile(window.innerWidth <= 600);
    updateIsMobile();
    window.addEventListener("resize", updateIsMobile);
    return () => window.removeEventListener("resize", updateIsMobile);
  }, []);

  const visibleMainImages = isMobile ? mainImages.slice(0, 2) : mainImages;
  const exploreMoreImages = isMobile
    ? [img3, img4, img5, ...extraImages]
    : extraImages;

  return (
    <section className="clinic-gallery" id="gallery">

      <div className="gallery-wrapper">

        <div className="gallery-grid">
          {visibleMainImages.map((img, i) => (
            <div key={i} className="g-item" onClick={() => setViewer(img)}>
              <img src={img} alt="" />
              <div className="overlay"><span>View</span></div>
            </div>
          ))}
        </div>

        <div className="gallery-content">
          <span className="gallery-label">Our Gallery</span>

          <h2>Glimpse<br />of our Tours</h2>

          <button
            className="gallery-btn"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "Hide Photos ↑" : "Explore More →"}
          </button>

          {!isMobile && (
            <div className="side-image" onClick={() => setViewer(img5)}>
              <img src={img5} alt="" />
              <div className="overlay"><span>Discover</span></div>
            </div>
          )}
        </div>

      </div>

      {showMore && (
        <div className="horizontal-gallery">
          {exploreMoreImages.map((img, i) => (
            <div key={i} className="horizontal-card" onClick={() => setViewer(img)}>
              <img src={img} alt="" />
            </div>
          ))}
        </div>
      )}

      {viewer && (
        <div className="gallery-viewer" onClick={() => setViewer(null)}>
          <span className="close">×</span>
          <img src={viewer} alt="" />
        </div>
      )}

    </section>
  );
}
