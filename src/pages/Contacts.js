import React from "react";
import "./Contacts.css";

export default function Contacts() {
  const handlePhoneClick = () => {
    window.location.href = "tel:+996502015209";
  };

  return (
    <div className="Contacts">
      <h1>Contacts</h1>
      <h2>Our contacts:</h2>
      <p onClick={handlePhoneClick}>
        <i className="fa fa fa-phone" /> +996 502 015 209
      </p>
      <div className="contact-details">
        <p>
          <strong className="contact-label">Address:</strong> 123 Music Street, Cityville, State, Country
        </p>
        <p>
          <strong className="contact-label">Email:</strong> kemelbekovdaniyar0@gmail.com
        </p>
        <p>
          <strong className="contact-label">Working Hours:</strong> Monday to Friday, 9:00 AM - 6:00 PM
        </p>
      </div>
      <p>
        {/* <i className="fa-brands fa-youtube" />{" "}
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
          YouTube
        </a> */}
      </p>
    </div>
  );
}