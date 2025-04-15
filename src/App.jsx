// import { useTraslation } from "react-i18next";
import { useTranslation } from "react-i18next";
import "./App.css";

// For this internationalization - using i18next library

function App() {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <h1>{t("welcome")}</h1>
      <p>{t("description")}</p>
      <button onClick={() => i18n.changeLanguage("ta")}>தமிழ்</button>
      <button onClick={() => i18n.changeLanguage("en")}>English</button>
    </div>
  );
}

export default App;
