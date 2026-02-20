import {PainelCentral ,PainelResultados , BotaonovoPeoduto  ,CardProdutos , EditarButton ,  RemoverButton , AcoesAlinhaBotaos , CardInfoProduto , LinhaInfo } from "./Styles";
import { useEffect , useState } from "react";
import {  ButtonPadraoAllsolicitacao ,  ButtonPadraoAll , SelectPadrao  , ActionButtonsComponenteHorizontal , ButtonPadrao , InputPadrao , SelectPadraoAll , InputPadraoReduzido } 
from "../../../styles/css";
import { ModalOverlay, ModalContainer , CloseButton  } from "../../../styles/ModalGeral";




export function PainelEstoqueCentral() {
	return (<>

			<PainelCentral>
				<br/>
				<center><h2>Estoque</h2></center>
								{/*<ButtonPadraoAllsolicitacao>  <img src="/relatorios.png" width ="10px" />   Adicionar novo produto </ButtonPadraoAllsolicitacao>*/}

  				<SelectPadrao>
  					<option value="codigo">Filtrar todos os produtos</option>
  					<option value="codigo">FIltra pelo nome do produto</option>
  					<option value="codigo">FIltra pelo código/id do produto</option>
  					<option value="codigo">FIltra pelo código de barra doS produto</option>
  					<option value="codigo">FIltra pela  categoria produto</option>
  				</SelectPadrao>

				<InputPadrao placeholder="Insira valores do item procurado"/>
				<ButtonPadraoAllsolicitacao>Aplicar filtro</ButtonPadraoAllsolicitacao>
								<hr/>
					{/*<BotaonovoPeoduto title ="Adicionar novo produto ao armazem" />*/}

          <RetornaModalAddProduto/>
				<PainelResultados>
					Resultado da pesquisa : <br/><br/>
 
            <CardProdutos>
              <span>Coca cola lata</span>
              <AcoesAlinhaBotaos>
                <RetornaModalEditar />
                <RemoverButton title="Excluir produto" />
              </AcoesAlinhaBotaos>
            </CardProdutos>

            <CardProdutos>
              <span>Fanta Laranja lata</span>
              <AcoesAlinhaBotaos>
                <RetornaModalEditar />
                <RemoverButton title="Excluir produto" />
              </AcoesAlinhaBotaos>
            </CardProdutos>

             
            <CardProdutos>
              <span>Pepis cola lata</span>
              <AcoesAlinhaBotaos>
                <RetornaModalEditar />
                <RemoverButton title="Excluir produto" />
              </AcoesAlinhaBotaos>
            </CardProdutos>
             

 				</PainelResultados>

			</PainelCentral>



		</>
		);

}


export default PainelEstoqueCentral;
 


export function RetornaModalEditar() {
   


  const [ modalAberto2 , setModalAberto2 ] = useState (false) ;
  
  return (
    <>

	  <EditarButton  title="Editar produto" onClick={() => setModalAberto2(true)}  />

    {modalAberto2 && ( 
        <ModalOverlay onClick={() => setModalAberto2(false)}>
          <ModalContainer onClick={(e) => e.stopPropagation()}>
                          <CloseButton onClick={() => setModalAberto2(false)}> X </CloseButton>
 						
 							<center><h2>ID do produto 190243</h2></center>
              <br/>
 							<hr/>


                      <CardInfoProduto>
                        <LinhaInfo>
                          <span>Item código</span>
                          <strong>00000123212</strong>
                        </LinhaInfo>
                      </CardInfoProduto>

                      <CardInfoProduto>
                        <LinhaInfo>
                          <span>Código de barras</span>
                          <strong> <InputPadrao value ="1323" /> </strong>
                        </LinhaInfo>
                      </CardInfoProduto>

                      <CardInfoProduto>
                        <LinhaInfo>
                          <span>Nome</span>
                          <strong> <InputPadrao value ="Coca-cola lata 300ml "/> </strong>
                        </LinhaInfo>
                      </CardInfoProduto>

                      <CardInfoProduto>
                        <LinhaInfo>
                          <span>Quantidade</span>
                          <strong> <InputPadrao value ="90 "/> </strong>
                        </LinhaInfo>
                      </CardInfoProduto>


                      <CardInfoProduto>
                        <LinhaInfo>
                          <span>Valor do produto</span>
                           <strong> <InputPadrao value ="3.50" /> </strong>
                        </LinhaInfo>
                      </CardInfoProduto>

                      <CardInfoProduto>
                        <LinhaInfo>
                          <span>Valor em estoque</span>
                          <strong> <InputPadrao value ="270,50"/> </strong>
                        </LinhaInfo>
                      </CardInfoProduto>

                      <CardInfoProduto>
                        <LinhaInfo>
                          <span>Categoria</span>
                          <strong>
                              <SelectPadraoAll>
                                      <option value="vale alimentacao">Categoria do produto cadastrada</option>
                              </SelectPadraoAll>
                          </strong>
                        </LinhaInfo>
                      </CardInfoProduto>
                 

                      <CardInfoProduto>
                        <LinhaInfo>
                               <SelectPadraoAll>
                      <option value="Disponivel">Produto ativo</option>
                      <option value="Indisponivel">Produto inativo</option>
              </SelectPadraoAll>

                                      </LinhaInfo>
                      </CardInfoProduto>
                      <hr/>
                       <br/>
                                <ButtonPadraoAll>Salvar edição</ButtonPadraoAll>

 
 

          </ModalContainer>
        </ModalOverlay>

      )}

    
    </>
  );
}






export function RetornaModalAddProduto() {
   
    const [valor, setValor] = useState(""); // <----------------

  const [ modalAberto2 , setModalAberto2 ] = useState (false) ;
  
  return (
    <>

    <BotaonovoPeoduto  title="Adicionar novo produto" onClick={() => setModalAberto2(true)}  />

    {modalAberto2 && ( 
        <ModalOverlay onClick={() => setModalAberto2(false)}>
          <ModalContainer onClick={(e) => e.stopPropagation()}>
              <CloseButton onClick={() => setModalAberto2(false)}> X </CloseButton>
            
              <center><h2>Adicionar novo produto</h2></center>
              <br/>
              <hr/>
               <br/><br/><br/>
               <InputPadrao placeholder ="Codigo de barra do produto " type="number"/>
                <br/><br/><br/>
               <InputPadrao placeholder ="Nome do produto "/>
               <br/><br/><br/>
               <InputPadrao placeholder ="Quantidade de produto" type="number" />
               <br/><br/><br/>
               {/*<InputPadrao placeholder ="Valor do produto "/>*/}


              <InputPadrao   // <----------------
                type="number"
                step="0.01"
                placeholder="Valor do produto"
                value={valor}
                onChange={
                  (e) => setValor(e.target.value)
                }
              />

               <br/><br/><br/>
              <SelectPadraoAll>
                      <option value="vale alimentacao">Categoria do produto cadastrada</option>
                      <option value="vale alimentacao">Categoria do produto cadastrada</option>
                      <option value="vale alimentacao">Categoria do produto cadastrada</option>
              </SelectPadraoAll>

              <br/><br/><br/>

              <SelectPadraoAll>
                      <option value="Disponivel">Produto ativo</option>
                      <option value="Indisponivel">Produto inativo</option>
              </SelectPadraoAll>

              <br/><br/><br/><br/>
              <hr/>
                             <br/><br/>   <ButtonPadraoAll>Salvar edição</ButtonPadraoAll>


 

          </ModalContainer>
        </ModalOverlay>

      )}

    
    </>
  );
}

