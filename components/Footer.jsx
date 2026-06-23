const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LEFT COLUMN */}
        <div className="footer-column">
          <h3>Khavane Kayak</h3>
          <p>
            Providing unforgettable kayaking experiences in the beautiful
            Konkan region. Join us for adventure, nature, and memories that
            last a lifetime.
          </p>

          {/* SOCIAL LINKS */}
          <div className="social-links">
            <a
              href="https://www.instagram.com/khavane_kayaks?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noreferrer"
              aria-label="Follow us on Instagram"
              className="social-link"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Tours</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#booking">Book Now</a></li>
          </ul>
        </div>

        {/* CONTACT INFO */}
        <div className="footer-column">
          <h3>Contact Us</h3>
          <ul className="contact-info">
            <li>
              <span className="contact-icon">
                <i className="fas fa-map-marker-alt"></i>
              </span>
              <span>
                Khavane Beach Road, Konkan, Maharashtra 402108
              </span>
            </li>

            <li>
              <span className="contact-icon">
                <i className="fas fa-phone-alt"></i>
              </span>
              <span>
                +91 9322361033 / 9137083019
              </span>
            </li>

            <li>
              <span className="contact-icon">
                <i className="fas fa-envelope"></i>
              </span>
              <span>
                khavanekayak@gmail.com
              </span>
            </li>

            <li>
              <span className="contact-icon">
                <i className="fas fa-clock"></i>
              </span>
              <span>
                Open daily 6:00 AM – 7:00 PM
              </span>
            </li>
          </ul>
        </div>

      </div>

      {/* FOOTER BOTTOM */}
      <div className="footer-bottom">
        <p>
          © 2026 Khavane Kayak. All Rights Reserved. | Designed with <a 
  href="https://www.innovatehive.in/" 
  target="_blank" 
  rel="noopener noreferrer"
  className="innovate-link"
>
  <strong>InnovateHive</strong>
</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
