import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import "./util/i18n";

import Translation from "./pages/Translations";

function App() {
  return (
    <div className="bg-black h-screen flex flex-col gap-9 text-white w-full">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Translation />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
