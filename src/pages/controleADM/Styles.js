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

  // background: red;
`;


export const PainelResultados = styled.div` 
 display : flex ;
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
