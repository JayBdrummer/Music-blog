import { useState } from "react";
import emailjs from "@emailjs/browser";
import PageLayout from "../components/layout/PageLayout";
import "../styles/contact.css";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    company: "" // honeypot
  });

  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

      // honeypot-tarkistus
    if (formData.company) {
      return;
    }

    setStatus("sending");

    emailjs.send(
      "service_6rctwqp",     
      "template_8jnrn2v",    
      {
        name: formData.name,
        email: formData.email,
        message: formData.message
      },
      "aaB9hUmzqKHUqRSxH"      
    )
    .then(() => {
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        message: "",
        company: ""
      });
    })
    .catch((error) => {
      console.error("Virhe viestin lähetyksessä", error);
      setStatus("error");
    })
  };

  return (
    <PageLayout>

      <h1>Ota yhteyttä</h1>

      <p className="contact-intro">
        Haluatko kysyä rummuista, musiikista tai yhteistyöstä?
        Tai kerro vaikka kuulumiset!
        Lähetä viesti alla olevalla lomakkeella.
      </p>

      {status === "success" ? (
        <div className="success-message">
          <h3>Viesti lähetetty!</h3>
          <p>Palaan asiaan mahdollisimman pian.</p>
        </div>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>

          {/* Honeypot (piilotettu kenttä botteja varten) */}
          <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          style={{display: "none"}}
          ></input>

          <label>
            Nimi
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Sähköposti
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Viesti
            <textarea
              name="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </label>

          <button type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Lähetetään..." : "Lähetä viesti"}
          </button>

          {status === "error" &&(
            <p className="error-message">
              Lähetys epäonnistui. Yritä myöhemmin uudelleen.
            </p>
          )}

        </form>
      )}

      <div className="contact-info">
        <h2>Yhteystiedot</h2>
        <p>Jarmo Lappalainen</p>
        <p>Email: jayb@example.com</p>
        <p>Kuopio, Suomi</p>
      </div>

    </PageLayout>
  );
}

export default Contact;

