import "./App.css";
import "./util/i18n";

import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import Translation from "./pages/Translations";
import FunctionBar from "./components/FunctionBar";
import Contact from "./components/Contact";
import Tappay from "./pages/Tappay";

import { useTranslation } from "react-i18next";
import { IHeaderTypes } from "./types/type";
import { useChangeLanguage } from "./hooks/useChangeLanguage";

const TappayState = { isTappayReady: false };
export const TappayContext = React.createContext(TappayState);

function App() {
  const { changeLanguage } = useChangeLanguage();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const translationHeader: IHeaderTypes[] = [
    { text: `${t("home")}` },
    { text: `${t("about")}` },
    {
      text: `${t("paymentMethod")}`,
      customFunction: () => navigate("/payment"),
    },
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
    <TappayContext.Provider value={TappayState}>
      <Tappay>
        <FunctionBar headerInfo={translationHeader} />
        <Contact />
        <Routes>
          <Route path="/" element={<Translation />}></Route>
          <Route path="/payment" element={<Translation />}></Route>
        </Routes>
      </Tappay>
    </TappayContext.Provider>
  );
}

export default App;
