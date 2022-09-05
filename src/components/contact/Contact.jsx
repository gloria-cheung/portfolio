import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

import "./Contact.scss";

export default function Contact() {
  const [message, setMessage] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pa3be17",
        "template_sxq2l4l",
        form.current,
        "jcqaKZGY8N1jCqM4D"
      )
      .then(
        (result) => {
          setMessage(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
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
          <input type="text" name="user_name" placeholder="Name" />
          <input type="email" name="user_email" placeholder="Email" />
          <textarea name="message" placeholder="Message" />
          <button type="submit">Send</button>
          {message && <span>Thanks, I will reply ASAP :D!</span>}
        </form>
      </div>
    </div>
  );
}
