import "./App.css";
import whatsAppLogo from "./images/whatsapp.png";
import "./util/i18n";

import Translation from "./pages/Translations";
import Content from "./pages/Translations/Content";

function App() {
  return (
    <div className="bg-black h-screen flex flex-col gap-9 text-white w-full">
      <Translation />
      <Content />
      <div
        className="fixed bottom-5 right-4 w-fit h-fit cursor-pointer"
        onClick={() => window.open("https://wa.me/8860901055121", "_blank")}
      >
        <img src={whatsAppLogo} alt="" className="w-[50px] h-[50px]" />
      </div>
    </div>
  );
}

export default App;
