// src/components/LanguageSwitcher.jsx
import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <button onClick={() => handleLanguageChange("en")}>English</button>
      <button onClick={() => handleLanguageChange("ta")}>தமிழ்</button>
      <button onClick={() => handleLanguageChange("ar")}>عربي</button>
    </div>
  );
}

export default LanguageSwitcher;
