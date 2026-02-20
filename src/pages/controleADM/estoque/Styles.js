import styled from "styled-components";

export const PainelCentral = styled.div` 
  margin-left: 310px; /* largura do menu */
  margin-top: 0px; /* largura do menu */

  height: 94vh;
  // width : 84% ;
  padding: 16px;

  display: flex;
  flex-direction: column;
  gap: 16px;

	  box-shadow: 
    0 8px 20px rgba(0, 0, 0, 0.6),
    inset 0 0 0 1px rgba(255, 255, 255, 0.05);

 `;


export const PainelResultados = styled.div` 
 display : block ;
 margin : 5px ;
	border-radius : 5px ;
	  padding: 16px;

 box-shadow: 
    0 8px 20px rgba(0, 0, 0, 0.6),
    inset 0 0 0 1px rgba(255, 255, 255, 0.05);
      height: 94vh;
    background: rgba(255, 255, 255, 0.15);
    overflow-y: auto; 
  overflow-x: hidden; 
	// color :rgba( 0 , 0 , 0 , 0.2 );
`;

	 

 export const BotaonovoPeoduto = styled.button`
  // position: fixed;
  // bottom: 15px;
   right:  120px; 
  width: 4%;
  height: 10%;
 
  border: none;
  border-radius: 18px;
  background-color: rgba(0 , 0, 0, 0);
  margin-left : 95%;


 	box-shadow: 
    0 8px 20px rgba(0, 0, 0, 0.6),
    inset 0 0 0 1px rgba(255, 255, 255, 0.05);


  background-image: url(${process.env.PUBLIC_URL}/novoProduto.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 50px;

  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    filter: brightness(1.15);
    background-color : gba(0 , 0, 0, 0.9);
  }
`;

export const CardProdutos = styled.div`
  position: relative; /* necessário para o botão absoluto */
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 16px 20px;
  border-radius: 1px;
  background-color: rgba(0, 0, 0, 0.35);

  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

export const AcoesAlinhaBotaos = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const EditarButton = styled.button`
  width: 44px;
  height: 44px;

  border: none;
  border-radius: 10px;

  background: rgba(0, 0, 0, 0)
    url("/editar.png") center / 24px no-repeat;
    background-size : 43px ;

  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0);
    transform: scale(1.05);
  }
`;

export const RemoverButton = styled.button`
  width: 40px;
  height: 40px;

  border: none;
  border-radius: 10px;

  background: transparent
    url("/remover.png") center / 24px no-repeat;
  background-size : 40px ;
  cursor: pointer;
  transition: transform 0.2s ease, filter 0.2s ease;

  /* alinha dentro do flex sem brigar com o pai */
  align-self: flex-start;

  &:hover {
    transform: scale(1.08);
     filter: brightness(1.1);
  }
`;

 
 export const CardInfoProduto = styled.div`
  margin : 20px ;
  display: flex;
  flex-direction: column;
  // gap: 5%;
 	// width: 50% ;

  padding: 16px 20px;
  border-radius: 5px;

  background: #243B55;		;
  color: white ;

  // box-shadow: 
  //   0 8px 20px rgba(0, 0, 0, 0.6),
  //   inset 0 0 0 1px orange;
`;

export const LinhaInfo = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 15px;


  span {
    opacity: 0.75;
  }

  strong {
    font-weight: 500;
  }
`;