import React from "react";
import "./Help.css";

const Help = () => {
  return (
    <div className="help-page">
      <h1>Need Help?</h1>
      <p>
        If you're experiencing any issues or have questions about bookings, listings,
        or how to use our website, feel free to reach out.
      </p>
      <p>Contact us at:{" "}
        <a href="mailto:admin@example.com" className="email-link">
          admin@example.com
        </a>
      </p>
      <p>We'll get back to you as soon as possible!</p>
    </div>
  );
};

export default Help;
