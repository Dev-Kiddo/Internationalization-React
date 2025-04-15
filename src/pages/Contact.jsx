// src/pages/Contact.jsx
import { useTranslation } from "react-i18next";
import ContactForm from "../components/ContactForm";

function Contact() {
  const { t } = useTranslation();

  return (
    <section>
      <h2>{t("contact.heading")}</h2>
      <p>{t("contact.message")}</p>
      <ContactForm />
    </section>
  );
}

export default Contact;
