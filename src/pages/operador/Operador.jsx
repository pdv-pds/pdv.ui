import {
  Container,
  Painel1,
  Painel2,
  Painel3,
  PainelRow,

  StatusCard,
  StatusIconSucesso,
  StatusIconNaoSucesso,
  StatusIconRetornados,
  StatusInfo,
  StatusNumber,
  StatusLabel ,

  ActionButtons,
  ActionButton,
DeleteButton,
StatusCardCompras,
DescontoButton,
  Logo ,
  PainelRegistrosCompras ,
EstoqueButton ,
UserButton ,
RelatoriosButton,
RegistrocompraButton,
QuantityInput ,
PainelRegistrosComprasLivre ,
PainelModalListaProdutos ,

} from "./Styles";

import { 
  useState, 
  useEffect } 
from "react";


import { ModalOverlay, ModalContainer , CloseButton  ,} from "../../styles/ModalGeral";

import { excluirItem  } from "./Action";
import {  
  ButtonPadraoAll ,
  SelectPadrao  ,
  ActionButtonsComponenteHorizontal ,
  ButtonPadrao ,
  InputPadrao ,
  SelectPadraoAll ,
  InputPadraoReduzido
 } from "../../styles/css";


import { Menu1Completo } from "../../styles/Menu";


// import { iniciarRegistroCaixa } from "./action";

 
 

const STORAGE_KEY = "compraAberto";


function Operador() {

// ===================================

  // ________________ aqui cria false (SIM, É AQUI)
  const [compraAberto, setCompraAberto] = useState(false);

  // ________________ ao entrar na página
  useEffect(() => {
    const salvo = localStorage.getItem(STORAGE_KEY);

    if (salvo === "true") {
      setCompraAberto(true);
    }
  }, []);

  // ________________ sempre que mudar, salva
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, compraAberto);
  }, [compraAberto]);

  // ________________ botão abrir compra
  const abrirCompra = () => {
    if (compraAberto === true) {
      alert("Finalize a compra para abrir outro atendimento");
      return;
    }

    setCompraAberto(true);
  };

  // ________________ botão fechar compra
  const fecharCompra = () => {
    setCompraAberto(false);
  };

// ===================================

  return (
    <Container>
     <Menu1Completo nome="Samuel Souto dos Santos" />


      <PainelRow>
        <Painel2>
        	<Logo />
        	
          <br/>
          {/*<center><h2> Dados do meu caixa </h2></center>*/}
          <br/><br/><br/>

          Acesso iniciada 01/01/2026 as 10:00
          <br/>

          <br/><br/>




	    <StatusCard>
	      <StatusIconSucesso />
	      <StatusInfo>
	        <StatusNumber>0</StatusNumber>
	        <StatusLabel>Vendas concluídas</StatusLabel>
	      </StatusInfo>
	    </StatusCard>


	    <StatusCard>
	      <StatusIconNaoSucesso />
	      <StatusInfo>
	        <StatusNumber>0</StatusNumber>
	        <StatusLabel>Vendas Canceladas</StatusLabel>
	      </StatusInfo>
	    </StatusCard>




	    <StatusCard>
	      <StatusIconRetornados />
	      <StatusInfo>
	        <StatusNumber>0</StatusNumber>
	        <StatusLabel>Vendas Retornadas</StatusLabel>
	      </StatusInfo>
	    </StatusCard>


    <ActionButtons>

  <ActionButton variant="primary" onClick={abrirCompra} >
    Registrar uma compra
  </ActionButton>
  <ActionButton variant="primary" onClick={abrirCompra} >
    Ajustar ou consultar uma compra
  </ActionButton>
      {/*<RetornoModalValorProdutos />*/}
       {/*  FUNÇÃO ABAIXO MODAL VER ITENS  */}
    </ActionButtons>



        </Painel2>

        <Painel3>
        	
          <br/>
 

          {!compraAberto ? (
            <PainelRegistrosComprasLivre> <br/><h1>Caixa Livre</h1> </PainelRegistrosComprasLivre >
          ) : (
            <>





           

                      <center><h1>Registos de compras</h1></center><br/>
                       <hr/> 

                               <br /> <h3>  Valor atual da compra : R$ 0,0 </h3>

              <PainelRegistrosCompras>
                {/*<StatusCardCompras>
                  <QuantityInput type="number" min="1" placeholder="Quantidade"   defaultValue={1} />
                   coca lata | R$ 3,50 
                  <DeleteButton title="Remover item da compra" />
                  <DescontoButton title="Aplicar desconto no produto"/>
                </StatusCardCompras>*/}

                <StatusCardCompras>
                  {/*<QuantityInput type="number" min="1" placeholder="Quantidade"   defaultValue={1} />*/}
                   <h2>1 Qat | Coca lata | R$ 3,50</h2> 
                  {/*<DeleteButton title="Remover item da compra" onClick={ excluirItem } />*/}

                  <DeleteButton title="Remover item da compra"  

                    onClick={
                      (e) => { 
                        const retorno = excluirItem() ; 
                        alert(`retorno ${retorno} ` );
                         }
                    } />
                   
                    <DescontoButton title="Aplicar desconto no produto" />
                </StatusCardCompras>



              </PainelRegistrosCompras>


              <br /><hr /> <br/>

              <QuantityInput type="number" min="1" placeholder="Quantidade ou pesso em kilo do produto" />

              <input
                className="input_cod_barra"
                type="number"
                placeholder="Campo do código de barras do produto e precione enter para registrar compra"
              />


              <br /><br />

              <ActionButtons>
                {/*<ActionButton variant="ok"> Consultar valor do produto </ActionButton>*/}
                      <RetornoModalValorProdutos />


                {/*<ActionButton variant="finish" onClick={fecharCompra}> Finalizar compras  </ActionButton>*/}
                 <RetornaModalConfirmaPagamento fecharCompra={fecharCompra} />
                 {/*<RetornaModalConfirmaPagamento/>*/}


                <ActionButton variant="cancel" /*onClick={fecharCompra}*/
                onClick={ 
                  (e) =>{
                      const confirmou = window.confirm("Deseja realmente finalizar a compra ?");
                      if(confirmou){  
                        alert("Compra cancelada ");

                        fecharCompra() ;
                      }else{
                        alert("Compra aberta no painel");
                      }


                  }

                }  
                > Cancelar compras </ActionButton>
              
              </ActionButtons>
            </>
          )}

        </Painel3>



      </PainelRow>
    </Container>
  );
}

export default Operador;


// --------------  Modais --------------------------------



export function RetornoModalValorProdutos() {
  const [modalAberto, setModalAberto] = useState(false);

  return (
 <>
    <ActionButton  variant="ok" onClick={() => setModalAberto(true)}> Consultar valor do produto</ActionButton>

      {modalAberto && (
        <ModalOverlay onClick={() => setModalAberto(false)}>

          <ModalContainer onClick={(e) => e.stopPropagation()}>
            
            <CloseButton onClick={() => setModalAberto(false)}> X </CloseButton>

            <h1>Listar dados do produto</h1>
            <br/><br/><br/><br/>
             <ActionButtonsComponenteHorizontal>

               <SelectPadrao>
                 <option value="codigo">Código do produto</option>
                <option value="codigoBarras">Código de barras</option>
              </SelectPadrao>
            <InputPadrao placeholder="Insira dados do filtro" type="number"/>


            </ActionButtonsComponenteHorizontal>
            <br/>
              <ButtonPadraoAll> Filtrar produto  </ButtonPadraoAll>

              <br/><br/><br/><hr/>


              <PainelModalListaProdutos> aqui dados da pesqiuisa</PainelModalListaProdutos>

          </ModalContainer>
        </ModalOverlay>
      )}
    </>
  );
}

// export function RetornaModalConfirmaPagamento(  ){

export function RetornaModalConfirmaPagamento({ fecharCompra }) {
const [valorPago, setValorPago] = useState("");
const troco =

  valorPago !== ""
    ? (parseFloat(valorPago) - 100).toFixed(2)
    : "0.00";


  const [ modalAberto2 , setModalAberto2 ] = useState (false) ;
  
  return (
    <>
      <ActionButton variant="finish" onClick={() => setModalAberto2(true)}> Finalizar compras </ActionButton>
    {modalAberto2 && ( 
        <ModalOverlay onClick={() => setModalAberto2(false)}>
          <ModalContainer onClick={(e) => e.stopPropagation()}>
                          <CloseButton onClick={() => setModalAberto2(false)}> x </CloseButton>
 

                          <h2>Produtos comprados</h2><br/><hr/>
                          <PainelModalListaProdutos> 
                            + Aqui dados da pesqiuisa
                                            <StatusCardCompras> <h2>2X coca lata | R$ 3,50</h2> </StatusCardCompras>
                                            <StatusCardCompras> <h2>2X coca lata | R$ 3,50</h2> </StatusCardCompras>

                          </PainelModalListaProdutos>

                          <br/><hr/><br/> <h2>Valor final da compra  : R$ 14,00 </h2><br/>

               <SelectPadraoAll>
                 <option value="dinheiro">Dinheiro</option>
                <option value="pix">PIX</option>
                <option value="vale alimentacao">Vali alimentação</option>
                <option value="cartao credito">Cartão de credito</option>
                <option value="cartao debito ">Cartão de debito</option>
              </SelectPadraoAll>
              <br/><br/>
            <InputPadraoReduzido placeholder="Insira de dinheiro passado pelo cliente" type="number" step="0.01"   onChange={(e) => setValorPago(e.target.value)}/> 
            Troco : R$ {troco}


                          <ButtonPadraoAll /*onClick={fecharCompra}*/


                onClick={ 
                  (e) =>{
                      const confirmou = window.confirm(" Você confirma o registro e fim da compra no sistema ?");
                      if(confirmou){  
                        alert("Compra registrada com sucesso ");
                        fecharCompra() ;
                      }else{
                        alert("Compra aberta no painel");
                      }


                  } }

                          > Confirmar pagamento </ButtonPadraoAll>

 


          </ModalContainer>
        </ModalOverlay>

      )}

    
    </>
  );
}

