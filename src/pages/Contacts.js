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
        <p className="contacts-paragraph-two">
          If you have questions, suggestions or want to leave a review, we are
          always happy to help. We are always ready to listen to your questions,
          accept your suggestions and take into account your feedback. Contact
          us right now and we will be happy to help you! Please choose your
          preferred contact method from the options below:
        </p>
        <h2>Our contacts:</h2>
        <p className="contacts-paragraph" onClick={handlePhoneClick}>
          <strong className="contact-label">Tell:</strong>
          <i className="fa fa fa-phone" />
          <span className="fg">+996 502 015 209</span>
        </p>
        <p className="contacts-paragraph">
          <strong className="contact-label">Address:</strong> VJ4M+Q9J, Bishkek
          region, Country Kyrgyzstan
        </p>
        <p className="contacts-paragraph">
          <strong className="contact-label">Email:</strong>{" "}
          arsenarsensio2006@gmail.com
        </p>
        <p className="contacts-paragraph-two">
          Feel free to contact us at any time. We strive to provide you with the
          best service and answer all your questions.
        </p>
      </div>
      <div className="footer-icon">
        <h1>Network</h1>
        <div className="footer-aps">
          <a href="https://wa.me/qr/AVDLLXHGVDAPJ1" target="blank">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/767px-WhatsApp.svg.png"
              alt="WhatsApp"
            />
          </a>
          <a href="https://www.instagram.com/arsensio2006/">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/640px-Instagram_icon.png"
              alt="linkedln"
            />
          </a>
          <a href="https://web.telegram.org/a/">
            <img
              src="https://www.svgrepo.com/download/299513/telegram.svg"
              alt="Telegram"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
