const BookingForm = ({ selectedPackage }) => {
  return (
    <section className="booking-form-wrapper" id="booking-form">
      <div className="booking-form-card">

        <p className="booking-tagline">
          🌊 Paddle into Peace • Adventure Awaits
        </p>

        <h3 className="booking-form-title">
          Book Your Adventure
        </h3>

        <form className="booking-form">

          {/* ROW 1 */}
          <div className="form-row">
            <div className="form-group">
              <label>Full Name <span>*</span></label>
              <input type="text" placeholder="Your full name" required />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="you@example.com" />
            </div>
          </div>

          {/* ROW 2 */}
          <div className="form-row">
            <div className="form-group">
              <label>Phone Number <span>*</span></label>
              <input type="tel" placeholder="+91 XXXXX XXXXX" required />
            </div>

            <div className="form-group">
              <label>Preferred Date <span>*</span></label>
              <input type="date" required />
            </div>
          </div>

          {/* TOUR */}
          <div className="form-group">
            <label>Select Tour <span>*</span></label>
            <select value={selectedPackage || ""} required readOnly>
              <option value="">-- Choose a tour --</option>
              <option>Kayaking</option>
              <option>Duck Boat</option>
            </select>
          </div>

          {/* PARTICIPANTS */}
          <div className="form-group">
            <label>Number of Participants <span>*</span></label>
            <input type="number" min="1" defaultValue="1" required />
          </div>

          {/* MESSAGE */}
          <div className="form-group">
            <label>Special Requests</label>
            <textarea rows="4" placeholder="Any special requests?" />
          </div>

          <button className="btn-primary full-width">
            Confirm Booking 🚣‍♀️
          </button>

        </form>
      </div>
    </section>
  );
};

export default BookingForm;
