import React from "react";
import "./Policies.css";

const Policies = () => {
  return (
    <div className="policies-page">
      <h1>Our Policies</h1>

      <section className="policy-section">
        <h2>Booking Policy</h2>
        <p>
          All bookings made through GoVibe are subject to confirmation by the admin.
          Once you book a place, your booking status will remain <strong>"Pending"</strong>
          until it is approved by the admin. Once approved, it will show as <strong>"Completed"</strong> on your order history page.
        </p>
      </section>

      <section className="policy-section">
        <h2>Cancellation Policy</h2>
        <p>
          Currently, we do not support cancellations directly from the user side.
          To cancel or change a booking, please contact our support team before the
          check-in date.
        </p>
      </section>

      <section className="policy-section">
        <h2>Availability</h2>
        <p>
          Listings marked as "Not Available" or already booked are either hidden or shown
          as unavailable to users. You can only book listings that are marked as available.
        </p>
      </section>

      <section className="policy-section">
        <h2>Guest Responsibility</h2>
        <p>
          Users must enter accurate guest and address information during the booking process.
          Misuse or providing false details may lead to cancellation or account restrictions.
        </p>
      </section>

      <section className="policy-section">
        <h2>Admin Rights</h2>
        <p>
          The admin reserves the right to approve, reject, edit, or delete listings and
          bookings based on availability and policy violations.
        </p>
      </section>
    </div>
  );
};

export default Policies;
