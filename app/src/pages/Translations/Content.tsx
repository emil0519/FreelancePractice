import { useTranslation } from "react-i18next";
import { useGetIp } from "../../hooks/useGetIp";

const Content = () => {
  const { country, getIPError } = useGetIp();
  const { t } = useTranslation();

  if (!country && !getIPError) return <></>;

  return (
    <div className="text-white mt-10">{t("origin_country_description")}</div>
  );
};

export default Content;
