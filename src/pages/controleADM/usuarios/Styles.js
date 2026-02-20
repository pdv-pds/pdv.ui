import styled from "styled-components";
import {  ButtonPadraoAllsolicitacao ,  ButtonPadraoAll , SelectPadrao  , ActionButtonsComponenteHorizontal , ButtonPadrao , InputPadrao , SelectPadraoAll , InputPadraoReduzido } 
from "../../../styles/css";



export const PainelCentral = styled.div` 
  margin-left: 310px;
  height: 94vh;
  padding: 16px;

  display: flex;
  flex-direction: row;   // <-- lado a lado
  gap: 16px;

  // box-shadow: 
  //   0 8px 20px rgba(0, 0, 0, 0.6),
  //   inset 0 0 0 1px rgba(255, 255, 255, 0.05);
`;


export const PainelEsquerda = styled.div`
  flex: 1; // maior
  background: rgba(0,0,0,0.1);

  // background: black;
  border-radius: 12px;
  padding: 12px;
	display : block ;

  hr {
    background: rgba(0,0,0,0.3);
    border: none;
    height: 5px;
   }


`;

export const PainelDireita = styled.div`
  flex: 2; // menor
  background: rgba(0,0,0,0.1);
  border-radius: 12px;
  padding: 12px;
	display : block ;
`;


export const PainelFiltrarUsuario = styled.div`

	margin : 10px ;
 	display : block ;
	height : 65% ;		
   padding: 5px;
	background-color : rgba(0, 0, 0, 0.1) ;

	overflow-y: auto; 
  overflow-x: hidden;

`


// ----------------------
export const CardPesquisaUser = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 16px 20px 16px 50px; /* espaço para o ícone na esquerda */
  border-radius: 1px;
  background-color: rgba(0, 0, 0, 0.6);
  margin-top: 5px;

  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }

  &::after {
    content: "";
    position: absolute;
    left: 9px;   /* <-- agora na esquerda */
    width: 28px;
    height: 28px;
    background-image: url("/user.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
`;

	
// ----------------------


export const PainelMostraUsuario = styled.div`

	margin : 10px ;
	margin-top : 4% ;
 	display : block ;
	height : 85% ;		
   padding: 50px;
	background-color : rgba(0, 0, 0, 0) ;

	overflow-y: auto; 
  overflow-x: hidden;

`





export function FunPainelMostraUsuarioRESULTADO({
	nome,
	id,
	sexo,
	acesso,
	status,
	contato
}) {
	return (
		<PainelMostraUsuario>
			<h2>Dados do usuário</h2><br/><br/>
			ID : {id} <br /><br />
			Nome : {nome} <br /><br />
			Sexo : {sexo} <br /><br />
			Acesso : {acesso} <br /><br />
			Status : {status} <br /><br />
			Contato : {contato} <br /><br />

			<br />
			<hr />
			<br />

			<ButtonPadraoAll title ="aqui modal no js" >Editar dados do usuário </ButtonPadraoAll>
			<ButtonPadraoAll>Definir nova senha de acesso</ButtonPadraoAll>
		</PainelMostraUsuario>
	);
}
