import {PainelCentral , PainelEsquerda,PainelDireita , PainelFiltrarUsuario , CardPesquisaUser , FunPainelMostraUsuarioRESULTADO  } from "./Styles";
import { useEffect , useState } from "react";
import {  ButtonPadraoAllsolicitacao ,  ButtonPadraoAll , SelectPadrao  , ActionButtonsComponenteHorizontal , ButtonPadrao , InputPadrao , SelectPadraoAll , InputPadraoReduzido } 
from "../../../styles/css";
import { ModalOverlay, ModalContainer , CloseButton  } from "../../../styles/ModalGeral";

 
export function PainelUsuarios() {

		return (<> 
<PainelCentral>
  <PainelEsquerda>
  	<br/>
  	    <center><h1> Buscar usuário </h1></center><br/>
      
  	    <InputPadrao placeholder="Adicione os valores para aplicar o filtro"/>

	<SelectPadraoAll>
		<option value="nome">Filtrar pelo nome do usuário</option>
		<option value="id">Filtrar por código do usuário </option>
	</SelectPadraoAll>

		
		<SelectPadraoAll>
 		<option value="true" >Filtrar por usuário ativos </option>
		<option value="false">Filtrar por usuário desativados </option>

	</SelectPadraoAll>

    <ButtonPadraoAll>  Buscar usuário </ButtonPadraoAll>
    <br/><br/>
    
    <br/> 

    <PainelFiltrarUsuario>
     
 
			<CardPesquisaUser>
              	<span>  Samuel Souto dos Santos </span>
            </CardPesquisaUser>
    
    </PainelFiltrarUsuario>


  </PainelEsquerda>

  <PainelDireita>
  	<br />
  	<center>
    	<h2>Registro dos usuários</h2>
    </center>
    <br/><br/>
    <hr/>
	<FunPainelMostraUsuarioRESULTADO
	  id={1}
	  nome="Samuel Souto"
	  sexo="Masculino"
	  acesso="Administrador"
	  status="Ativo"
	  contato="(34) 99999-9999"
	/>
  </PainelDireita>


   
</PainelCentral>

			 </>

        );

}


export default PainelUsuarios ;