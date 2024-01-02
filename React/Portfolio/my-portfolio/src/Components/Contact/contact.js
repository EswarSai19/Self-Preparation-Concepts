import React, { useRef } from "react";
import "./contact.css";
import walmart from "../../assets/walmart.png";
import adobe from "../../assets/adobe.png";
import facebook from "../../assets/facebook.png";
import microsoft from "../../assets/microsoft.png";
import fbIcon from "../../assets/facebook-icon.png";
import twiIcon from "../../assets/twitter.png";
import ytIcon from "../../assets/youtube.png";
import insIcon from "../../assets/instagram.png";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_j0mbyng",
        "template_gvu4wtu",
        form.current,
        "bw-SxPrhmH_10HCDh"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Email sent successfully!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="contactPage">
      <div id="clients">
        <h1 className="contactPageTitle">My Clients</h1>
        <p className="clientsDesc">
          I have had athe opportunity to work with a diverse group of companies.
          Some of the notable companies I have worked with includes.
        </p>
        <div className="clientsImgs">
          <img src={walmart} alt="client" className="clientImg" />
          <img src={adobe} alt="client" className="clientImg" />
          <img src={facebook} alt="client" className="clientImg" />
          <img src={microsoft} alt="client" className="clientImg" />
        </div>
      </div>
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please fill out the form below to discuss any work opportunities
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Your Name"
            name="from_name"
          />
          <input
            type="email"
            className="email"
            placeholder="Your Email"
            name="from_email"
          />
          <textarea
            className="msg"
            name="message"
            rows="5"
            placeholder="Your Message"
          ></textarea>
          <button
            type="submit"
            onSubmit={sendEmail}
            value="Send"
            className="submitBtn"
          >
            Submit
          </button>
          <div className="links">
            <img src={fbIcon} alt="fbIcon" className="linkImg" />
            <img src={twiIcon} alt="twiIcon" className="linkImg" />
            <img src={ytIcon} alt="ytIcon" className="linkImg" />
            <img src={insIcon} alt="insIcon" className="linkImg" />
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
