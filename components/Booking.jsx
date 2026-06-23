import bookingPackages from "../data/bookingPackages";

const Booking = ({ onSelectPackage }) => {
  const scrollToBookingForm = () => {
    const section = document.getElementById("booking-form");
    if (!section) return;

    const navbar = document.querySelector(".navbar");
    const navbarHeight = navbar?.offsetHeight ?? 75;

    const rect = section.getBoundingClientRect();
    const currentY = window.scrollY;
    const isMobile = window.innerWidth <= 768;
    const centerNudge = isMobile ? 26 : 18;
    const topWithOffset =
      currentY + rect.top - navbarHeight - (isMobile ? 10 : 12) + centerNudge;

    window.scrollTo({
      top: Math.max(0, topWithOffset),
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* =========================
          BOOKING PACKAGES SECTION
      ========================== */}
      <section className="booking-section reveal" id="booking">
        <h2 className="booking-title">Book Your Ride</h2>

        <div className="booking-cards">
          {bookingPackages.map((pkg) => (
            <div key={pkg.id} className="booking-card">
              <h4>{pkg.title}</h4>

              <div className="price">
                ₹{pkg.price}
                <span>/person</span>
              </div>

              <ul>
                <li>✔ {pkg.duration}</li>
                <li>✔ {pkg.safety}</li>
              </ul>

              <button
  className="btn-primary"
  onClick={() => {
    onSelectPackage(pkg.title);

    setTimeout(() => {
      const form = document.getElementById("booking-form");
      scrollToBookingForm();

      form?.classList.add("flash");

      setTimeout(() => form?.classList.remove("flash"), 1200);
    }, 200);
  }}
>
  Book Now
</button>
            </div>
          ))}
        </div>
      </section>

      {/* =========================
    PAPER TEAR DIVIDER
========================== */}
<div className="paper-tear-divider" />
    </>
  );
};

export default Booking;
