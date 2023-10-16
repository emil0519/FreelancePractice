/// <reference path="./tappay.d.ts" />
import { useEffect, useState } from "react";

function Tappay({ children }: { children: any }) {
  // const [isTappayScriptLoaded, setIsTappayScriptLoaded] = useState(false);

  // useEffect(() => {
  //   console.log("Tappay");
  //   const script = document.createElement("script");

  //   script.src = "https://js.tappaysdk.com/sdk/tpdirect/v5.17.0";
  //   script.async = true;
  //   script.onload = () => {
  //     setIsTappayScriptLoaded(true);
  //     console.log(TPDirect, "TPDirect");
  //     TPDirect.setupSDK(2, "APP_KEY", "sandbox");
  //   };
  //   document.body.appendChild(script);
  // }, []);
  // if (!isTappayScriptLoaded) {
  //   return <div>Loading Tappay SDK...</div>;
  // }

  return <>{children}</>;
}

export default Tappay;
