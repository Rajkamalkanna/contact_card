import React from "react";
import Contact from "./Contact";
import logo3 from "./images/mr-whiskerson.png";
import logo4 from "./images/fluffykins.png";
import logo5 from "./images/felix.png";
import logo6 from "./images/pumpkin.png";

export default function App() {
  return (
    <div className="contacts">
      <Contact
        // img ="./images/mr-whiskerson.png"
        img={logo3}
        name="Mr. Whiskerson"
        phone="(212) 555-1234"
        email="mr.whiskaz@catnap.meow"
      />
      <Contact
        img={logo4}
        name="Fluffykins"
        phone="(212) 555-2345"
        email="fluff@me.com"
      />
      <Contact
        img={logo5}
        name="Felix"
        phone="(212) 555-4567"
        email="thecat@hotmail.com"
      />
      <Contact
        img={logo6}
        name="Pumpkin"
        phone="(0800) CAT KING"
        email="pumpkin@scrimba.com"
      />
    </div>
  );
}
