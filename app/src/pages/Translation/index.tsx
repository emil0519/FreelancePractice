import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useGetIp } from "../../hooks/useGetIp";

const Translation = () => {
  const { country } = useGetIp();
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  const chineseCountryList: string[] = ["Taiwan", "China", "Malaysia"];

  useEffect(() => {
    if (!chineseCountryList.find((eachCountry) => eachCountry === country)) {
      changeLanguage("zh");
    } else {
      changeLanguage("en");
    }
  }, [country]);

  return (
    <>
      <div>{country}</div>
      <h1>{t("language_use")}</h1>
    </>
  );
};

export default Translation;
