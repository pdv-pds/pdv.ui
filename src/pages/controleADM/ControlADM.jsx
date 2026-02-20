import {  Menu1LateralCompleto  , Menu1Completo  } from "../../styles/Menu";
import {  ButtonPadraoAllsolicitacao ,  ButtonPadraoAll , SelectPadrao  , ActionButtonsComponenteHorizontal , ButtonPadrao , InputPadrao , SelectPadraoAll , InputPadraoReduzido } from "../../styles/css";
import { PainelCentral , PainelResultados , BotaonovoPeoduto} from "./Styles";
import { PainelEstoqueCentral } from "./estoque/Estoque"
import { PainelUsuarios } from "./usuarios/Usuarios"

 function Estoque(){
 	return (
 		 <>

			<Menu1Completo nome="Samuel Souto dos Santos" /> 
			 <Menu1LateralCompleto/>
			<PainelUsuarios/>
 
  		 </>
 	);

 }

  export default Estoque;



