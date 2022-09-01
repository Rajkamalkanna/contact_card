import React from "react";
import logo1 from "./images/phone-icon.png";
import logo2 from "./images/mail-icon.png";

export default function Contact(props) {
  // console.log(props);
  return (
    <div className="contact-card">
      <img src={props.img} alt="dp" />
      <h3>{props.name}</h3>
      <div className="info-group">
        <img src={logo1} alt="Mobile icon" />
        <p>{props.phone}</p>
      </div>
      <div className="info-group">
        <img src={logo2} alt="email icon" />
        <p>{props.email}</p>
      </div>
    </div>
  );
}
