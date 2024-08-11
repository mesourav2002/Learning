import React, { useRef } from "react";
import "./contact.css";
import facebook from ".././assetss/facebook.png";
import twitter from ".././assetss/twitter.png";
import instagram from ".././assetss/instagram.png";
import linkedin from ".././assetss/linkedin.png";
import emailjs from "@emailjs/browser";

export function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1dow99z",
        "template_4lpd4ox",
        form.current,
        "sApXq7QvvWWYFOrZ34UoU"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="contactPage">
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDecs">
          Please fill out the form below to discuss any work opportunities.
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Your Name"
            name="user_name"
          />
          <input
            type="text"
            className="email"
            placeholder="Your Email"
            name="user_email"
          />
          <textarea
            name="message"
            rows="5"
            className="msg"
            placeholder="Your Message"
          ></textarea>
          <button type="submit" value="Send" className="submitBtn">
            Submit
          </button>
          <div className="links">
            <a href="https://www.facebook.com/smartboy.rocky.9256?mibextid=ZbWKwL">
              <img src={facebook} alt="Facebook" className="link" />
            </a>
            <a href="https://x.com/Sourav05042002?t=88RAnS1vXavYAOniw3w2jw&s=09">
              {" "}
              <img src={twitter} alt="twitter" className="link" />
            </a>
            <a href="https://www.instagram.com/i_am_sourav_dash?igsh=MWY0MHhyd2VndDY2aA==">
              {" "}
              <img src={instagram} alt="Youtube" className="link" />
            </a>
            <a href="https://www.linkedin.com/in/sourav-kumar-dash-740397271?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
              {" "}
              <img src={linkedin} alt="Instagram" className="link" />
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}
