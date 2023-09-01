import { useEffect, useState } from "react";

import { useChangeLanguage } from "../../hooks/useChangeLanguage";
import { useGetIp } from "../../hooks/useGetIp";
import Content from "./Content";
import FunctionBar from "./FunctionBar";

const Translation = () => {
  const { country, getIPError } = useGetIp();
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

  if (!isLanguageReady && !getIPError) return <></>;

  return (
    <>
      <FunctionBar />
      <Content />
    </>
  );
};

export default Translation;
