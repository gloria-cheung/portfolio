import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

import "./Contact.scss";

export default function Contact() {
  const [message, setMessage] = useState({ status: false, text: "" });
  const [error, setError] = useState({ status: false, text: "" });
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_ACCESS_TOKEN
      )
      .then(
        (result) => {
          setMessage({ status: true, text: "I will reply to you ASAP! :D" });
          setError({ status: false, text: "" });
          form.current.reset();
        },
        (error) => {
          setMessage({ status: false, text: "" });
          setError({
            status: true,
            text: "Sorry, your message did not send. We are currently looking into the problem and will fix this ASAP.",
          });
        }
      );
  };

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" placeholder="Name" required />
          <input type="email" name="user_email" placeholder="Email" required />
          <textarea name="message" placeholder="Message" required />
          <button type="submit">Send</button>
          {error.status ? (
            <span className="error">{error.text}</span>
          ) : (
            <span className="success">{message.text}</span>
          )}
        </form>
      </div>
    </div>
  );
}
