// import "./Contacts.css";

// export default function Contacts() {
//   return (
//     <div className="Contacts">
//       <h1>Contacts</h1>
//       <h2>Our contacts:</h2>
//       <p><i className="fa fa fa-phone" /> +996 123 123 123</p>
//       <p><i className="fa fa-map-marker" /> GUM, 3rd floorBishkek Park, 2nd floor</p>
//       <p><i className="fa fa-map-marker" /> Tash-Rabat</p>
//       <p><i className="fa fa-map-marker" /> Asia Mall</p>
//       <p><i class="fa-brands fa-youtube" /> <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="blank">YouTube</a></p>
//     </div>
//   )
// }

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
      <p>
        <i className="fa fa-map-marker" /> GUM, 3rd floorBishkek Park, 2nd floor
      </p>
      <p>
        <i className="fa fa-map-marker" /> Tash-Rabat
      </p>
      <p>
        <i className="fa fa-map-marker" /> Asia Mall
      </p>
      <p>
        <i className="fa-brands fa-youtube" />{" "}
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
          YouTube
        </a>
      </p>
    </div>
  );
}