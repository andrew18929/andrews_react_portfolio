import React, { useState } from "react";
import { emailValidaion } from "../../utils/helpers";

function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = formState;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!errorMessage) {
      setFormState({ [event.target.name]: event.target.value });
      console.log("Form", formState);
    }
  };

  const handleChange = (event) => {
    if (event.target.name === "email") {
      const isEmailValid = emailValidaion(event.target.value);
      if (!isEmailValid) {
        setErrorMessage("The email your provided is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!event.target.value.length) {
        setErrorMessage(`${event.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
  };

  return (
    <section className="my=5">
      <h1>Contact Me</h1>
      <div>
        <form id="contact-form" onSubmit={handleSubmit}>
          <div className="">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              defaultValue={name}
              onBlur={handleChange}
            />
          </div>
          <div className="">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              defaultValue={email}
              onBlur={handleChange}
            />
          </div>
          <div className="">
            <label htmlFor="message">Message:</label>
            <textarea
              name="message"
              rows="10"
              defaultValue={message}
              onBlur={handleChange}
            />
          </div>
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
          <button className="button1" type="submit">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
