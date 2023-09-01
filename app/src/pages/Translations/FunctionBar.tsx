import { useTranslation } from "react-i18next";
import { useChangeLanguage } from "../../hooks/useChangeLanguage";

const FunctionBar = () => {
  const { t } = useTranslation();
  const { changeLanguage } = useChangeLanguage();

  const headerMapper: {
    text: string;
    customFunction?: () => void;
  }[] = [
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
    <div className="text-white flex flex-wrap">
      {headerMapper.map((item) => (
        <div
          key={item.text}
          onClick={() => item.customFunction && item.customFunction()}
          className="min-w-[100px] min-h-[30px] flex border-white border-solid border-[0.5px] border-spacing-5 cursor-pointer justify-center align-center"
        >
          {item.text}
        </div>
      ))}
    </div>
  );
};

export default FunctionBar;
