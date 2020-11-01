import "./Contact.css";
import React, { useState } from "react";

function Contact(props) {
  const [isShown, setIsShown] = useState(false);
  return (
    <div className="Wrapper">
      <header className="Header">Contact Me</header>
      <p1 className="Bio">
        I'm seeking oppertunities in mobile app and web development. I bring my
        passion for mobile development to every project I work on and have been
        in the industry for the past 2 years. I am a hard worker, team player
        and cannot wait to experience what more the development world has to
        offer!
      </p1>
      <div className="LC">
        <a className="Link" href={"mailto:Kealymmb@gmail.com"}>
          Email Me
        </a>
      </div>
      <div className="LCsub">
        <div
          className="Number"
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
        >
          {!isShown ? <div>Call Me</div> : <div>074 223 4194</div>}
        </div>
      </div>
      <div>
        <a
          className="Link"
          href={"https://www.linkedin.com/in/kealym-bromley-8768471ba/"}
          target="_blank"
        >
          Linkedin
        </a>
      </div>
    </div>
  );
}

export default Contact;
