import { useTranslation } from "react-i18next";
import { useGetIp } from "../../hooks/useGetIp";

const Content = () => {
  const { country, getIPError } = useGetIp();
  const { t } = useTranslation();
  const { i18n } = useTranslation();

  if (!country && !getIPError) return <></>;

  return (
    <>
      {t("origin_country_description")}
      {i18n.language === "en" && " "}
      {t(`${country}`)}
    </>
  );
};

export default Content;
