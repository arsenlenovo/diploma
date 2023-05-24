import React from "react";
import "./Contacts.css";

export default function Contacts() {
  const handlePhoneClick = () => {
    window.location.href = "tel:+996502015209";
  };

  return (
    <div className="Contacts">
      <div className="contact-details">
      <h1>Contacts</h1>
      <h2>Our contacts:</h2>
      <p className="contacts-paragraph" onClick={handlePhoneClick}>
      <strong className="contact-label">Tell:</strong><i className="fa fa fa-phone" /> +996 502 015 209
      </p>
        <p className="contacts-paragraph">
          <strong className="contact-label">Address:</strong> 123 Music Street, Cityville, State, Country
        </p>
        <p className="contacts-paragraph">
          <strong className="contact-label">Email:</strong> kemelbekovdaniyar0@gmail.com
        </p>
        <p className="contacts-paragraph">
          <strong className="contact-label">Working Hours:</strong> Monday to Friday, 9:00 AM - 6:00 PM
        </p>
      </div>
    </div>
  );
}