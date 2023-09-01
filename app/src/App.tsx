import { useEffect, useState } from "react";
import "./App.css";
import { useChangeLanguage } from "./hooks/useChangeLanguage";
import { useGetIp } from "./hooks/useGetIp";
import Content from "./pages/Content";
import Translation from "./pages/Translation";
import "./util/i18n";

function App() {
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
    <div className="bg-black h-screen flex flex-col gap-9 text-white w-full">
      <Translation />
      <Content />
    </div>
  );
}

export default App;
