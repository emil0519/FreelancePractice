import "./App.css";
import "./util/i18n";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Translation from "./pages/Translations";
import FunctionBar from "./components/FunctionBar";

import { useTranslation } from "react-i18next";
import { IHeaderTypes } from "./types/type";
import { useChangeLanguage } from "./hooks/useChangeLanguage";
import Contact from "./components/Contact";
import Tappay from "./pages/Tappay";

function App() {
  const { changeLanguage } = useChangeLanguage();
  const { t } = useTranslation();

  const translationHeader: IHeaderTypes[] = [
    { text: `${t("home")}` },
    { text: `${t("about")}` },
    {
      text: "轉中文",
      customFunction: () => {
        localStorage.setItem("language_setting", "zh");
        changeLanguage("zh");
      },
    },
    {
      text: "Use English",
      customFunction: () => {
        localStorage.setItem("language_setting", "en");
        changeLanguage("en");
      },
    },
    {
      text: `${t("forget_language_setting")}`,
      customFunction: () => {
        localStorage.removeItem("language_setting");
      },
    },
  ];

  return (
    <Tappay>
      <BrowserRouter>
        <FunctionBar headerInfo={translationHeader} />
        <Contact />
        <Routes>
          <Route path="/" element={<Translation />}></Route>
        </Routes>
      </BrowserRouter>
    </Tappay>
  );
}

export default App;
