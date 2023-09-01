import type { IHeaderTypes } from "../../types/type";

import { useEffect, useState } from "react";

import { useTranslation } from "react-i18next";
import { useChangeLanguage } from "../../hooks/useChangeLanguage";
import { useGetIp } from "../../hooks/useGetIp";

import FunctionBar from "../../components/FunctionBar";
import Content from "./Content";

const Translation = () => {
  const { country, getIPError } = useGetIp();
  const { t } = useTranslation();
  const { changeLanguage } = useChangeLanguage();
  const chineseCountryList: string[] = ["Taiwan", "China", "Malaysia"];
  const [isLanguageReady, setIsLanguageReady] = useState<boolean>(false);

  useEffect(() => {
    const currentSetting = localStorage.getItem("language_setting");
    if (currentSetting) {
      changeLanguage(`${currentSetting}`);
      setIsLanguageReady(true);
      return;
    }
    if (chineseCountryList.includes(country || "")) {
      changeLanguage("zh");
    } else {
      changeLanguage("en");
    }
    setIsLanguageReady(country ? true : false);
  }, [country]);

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

  if (!isLanguageReady && !getIPError) return <></>;

  return (
    <>
      <FunctionBar headerInfo={translationHeader} />
      <Content />
    </>
  );
};

export default Translation;
