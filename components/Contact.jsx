const Contact = () => {
  return (
    <section className="contact-section" id="contact">

      {/* HEADER */}
      <div className="contact-header">
        <h2>
          Find Us at <span>Khavane</span>
        </h2>
        <p className="contact-subtitle">
          Where backwaters whisper peace and adventure flows 🌿
        </p>
      </div>

      {/* CONTENT */}
      <div className="contact-container">

        {/* LEFT INFO */}
        <div className="contact-info">
          <h3>📍 Reach Us</h3>

          <p className="contact-desc">
            Paddle through serene mangroves, calm waters, and untouched
            Konkan beauty — an experience close to nature.
          </p>

          <div className="contact-details">
            <p><strong>Location:</strong> Khavane Backwaters, Maharashtra</p>
            <p><strong>Phone:</strong> +91 9XXXXXXXXX</p>
            <p><strong>Email:</strong> khavanekayaks@gmail.com</p>
          </div>

          {/* TAGLINES */}
          <div className="contact-taglines">
            <p className="marathi">येवा कोकण... आपलोच असा  💚</p>
            <p className="english">
              Come for the adventure, stay for the peace.
            </p>
          </div>

          {/* CTA BUTTONS */}
          <div className="contact-actions">
            <a
              href="https://wa.me/919XXXXXXXXX"
              target="_blank"
              rel="noreferrer"
              className="whatsapp-btn"
            >
              💬 Chat on WhatsApp
            </a>

            <a
              href="https://www.google.com/maps?q=Khavane,Maharashtra"
              target="_blank"
              rel="noreferrer"
              className="maps-btn"
            >
              📍 Open in Google Maps
            </a>
          </div>
        </div>

        {/* RIGHT MAP */}
        <div className="contact-map">
          <div className="map-pin"></div>

          <iframe
            title="Khavane Location"
            src="https://www.google.com/maps?q=Khavane,Maharashtra&output=embed"
            loading="lazy"
          ></iframe>
        </div>

      </div>
    </section>
  );
};

export default Contact;
