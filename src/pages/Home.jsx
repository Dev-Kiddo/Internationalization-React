// src/pages/Home.jsx
import { useTranslation } from "react-i18next";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";

function Home() {
  const { t } = useTranslation();

  return (
    <div>
      <HeroSection />
      <ServicesSection />
    </div>
  );
}

export default Home;
