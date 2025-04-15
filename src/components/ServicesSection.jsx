// src/components/ServicesSection.jsx
import { useTranslation } from "react-i18next";

function ServicesSection() {
  const { t } = useTranslation();

  return (
    <section>
      <h2>{t("services.heading")}</h2>
      <ul>
        <li>{t("services.service1")}</li>
        <li>{t("services.service2")}</li>
        <li>{t("services.service3")}</li>
      </ul>
    </section>
  );
}

export default ServicesSection;
