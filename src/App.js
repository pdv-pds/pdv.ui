
import { GlobalStyle , } from "./styles/css";
import Login from "./pages/login/Login";
import Operador from "./pages/operador/Operador";
import ControleAdm from "./pages/controleADM/ControlADM";
import { useEffect , useState } from "react";

 function App() {
  return (
    <>
      <GlobalStyle />
      <ControleAdm />
    </>
  );
}

export default App;
