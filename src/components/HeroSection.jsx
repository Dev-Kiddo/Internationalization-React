// src/components/HeroSection.jsx
import { useTranslation } from "react-i18next";

function HeroSection() {
  const { t } = useTranslation();

  return (
    <section>
      <h1>{t("home.title")}</h1>
      <p>{t("home.subtitle")}</p>
    </section>
  );
}

export default HeroSection;
