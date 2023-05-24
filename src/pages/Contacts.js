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
      <p className="contacts-paragraph-two">If you have questions, suggestions or want to leave a review, we are always happy to help. We are always ready to listen to your questions, accept your suggestions and take into account your feedback. Contact us right now and we will be happy to help you! Please choose your preferred contact method from the options below:</p>
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
        <p className="contacts-paragraph-two">Feel free to contact us at any time. We strive to provide you with the best service and answer all your questions.</p>
      </div>
    </div>
  );
}