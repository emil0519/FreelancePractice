import type { IHeaderTypes } from "../../../types/type";

import { Outlet, useNavigate } from "react-router-dom";
import FunctionBar from "../../../components/FunctionBar";

const Home = () => {
  const navigate = useNavigate();

  const homeHeader: IHeaderTypes[] = [
    { text: "Home", customFunction: () => navigate("/") },
    { text: "Translation", customFunction: () => navigate("/Translation") },
    { text: "Paypal", customFunction: () => navigate("/PayPal") },
  ];
  return (
    <>
      <FunctionBar headerInfo={homeHeader} />
      <Outlet />
    </>
  );
};

export default Home;
