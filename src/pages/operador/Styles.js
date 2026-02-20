import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background: #243B55 ;

  // background: linear-gradient(
  //   135deg,
  //   #0B0F1A 0%,
  //   #0B0F1A 30%,
  //   #243B55 100%
  // );
`;

// export const Painel1 = styled.div`
//   padding: 20px;
// 	// height: 30vh;
//   margin: 10px;
//   border-radius: 12px;
//   background-color: rgba(0, 0, 0, 0.4);
//   color: white;
// `;

 export const PainelRow = styled.div`
  display: flex;
  gap: 0px;
  flex: 1;
  margin: 0 10px 10px;
`;


export const Painel2 = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;   
  padding: 12px;
  border-radius: 12px;
  background-color: rgba(0, 0, 0, 0);
`;


export const Painel3 = styled.div`
  flex: 3;
  padding: 20px;
  border-radius: 12px;
  // background-color: #2B124C;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);


 .input_cod_barra {
	width: 100%;
  // height: 150px;
	margin-top : 2% ;
    color: black;
    padding: 8px 8px 8px 36px;
    border-radius: 4px;
    border: none;

    // background-color: rgba(0, 0, 0, 0.4);
    background-image: url(${process.env.PUBLIC_URL}/cod_barra.png);
    background-repeat: no-repeat;
    background-position: 10px center;
    background-size: 16px; //
  }

`;


  


// =======================================


export const StatusCard = styled.div`
 margin-top : 15px ;
  display: flex;
  align-items: center;
  gap: 16px;

  padding: 16px 20px;
  border-radius: 12px;

  // background: linear-gradient(
  //   135deg,
  //   #16213e,
  //   #1a1a2e
    
  // );

	background : rgba( 0 , 0 ,0 , 0.9);

  color: white;
  min-width: 220px;

  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
`;

export const StatusIconSucesso = styled.div`
  width: 48px;
  height: 48px;

  background-image: url(${process.env.PUBLIC_URL}/vendido.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

export const StatusIconNaoSucesso = styled.div`
  width: 48px;
  height: 48px;

  background-image: url(${process.env.PUBLIC_URL}/naoVendidos.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

export const StatusIconRetornados = styled.div`
  width: 48px;
  height: 48px;

  background-image: url(${process.env.PUBLIC_URL}/vedidosretornados.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

export const StatusInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StatusNumber = styled.span`
  font-size: 24px;
  font-weight: bold;
`;

export const StatusLabel = styled.span`
  font-size: 12px;
  opacity: 0.8;
`;



// =======================================


export const ActionButtons = styled.div`
  display: flex;
  gap: 12px;
  margin-top: auto ;   
`;

export const ActionButton = styled.button`
  flex: 1;
  padding: 12px;

  border: none;
  border-radius: 8px;

  font-weight: bold;
  cursor: pointer;

  transition: all 0.2s ease;



	background: ${({ variant }) =>
	  variant === "primary"
	    ? "rgba(0, 0, 0, 0.5)"
	    : variant === "ok"
	    ? "linear-gradient(135deg, #2563eb, #1d4ed8)"
	    : variant === "cancel"
	    ? "linear-gradient(135deg, #7f1d1d, #dc2626)"
	    : variant === "finish"
	    ? "linear-gradient(135deg, #14532d, #4ade80)"
	    : "rgba(0, 0, 0, 0.5)"
	};



  color: white;

  &:hover {
    opacity: 0.9;
    transform: translateY(-1px);
  }
`;




// ===========================================



 
// export const FiltroContainer = styled.div`
//   position: relative;
//   display: inline-block;
// `;

// export const FiltroBotao = styled.button`
//   padding: 10px 16px;
//   border-radius: 8px;
//   border: 1px solid #334155;
//   background: #0f172a;
//   color: white;
//   cursor: pointer;
// `;

// export const FiltroOpcoes = styled.div`
//   position: absolute;
//   top: 110%;
//   left: 0;

//   background: #020617;
//   border: 1px solid #334155;
//   border-radius: 8px;
//   overflow: hidden;
//   min-width: 180px;
//   z-index: 10;
// `;

// export const FiltroOpcao = styled.button`
//   width: 100%;
//   padding: 10px 14px;
//   background: transparent;
//   border: none;
//   color: white;
//   text-align: left;
//   cursor: pointer;

//   &:hover {
//     background: #1e293b;
//   }
// `;


// =======================================


export const Logo = styled.div`
  width: 105px;
  height: 150px;
  margin: 0 auto 50px;
  margin-top: 10%;
  background-image: url(${process.env.PUBLIC_URL}/logo192.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center; 
`;


// =======================================

export const PainelRegistrosCompras = styled.div`
  margin-top: 15px;
  margin-bottom : 15px;
  // margin-boton: 15px;
  display: block;
   gap: 16px;

  // flex: 3;  

  padding: 16px 20px;
  border-radius: 12px;

  // background:  #f3f7f9 ;
	background-color : rgba( 0, 0 ,0 , 0.2 );
  color: white ;
	  height: 55vh; 
  min-width: 220px;

  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
	overflow-y: auto; 
  overflow-x: hidden; 
`;


export const PainelRegistrosComprasLivre = styled.div`
  margin-top: 15px;

  display: flex;
  flex-direction: column;
  gap: 16px;
   
  flex: 3;  

   border-radius: 12px;

 
	background-image: url(${process.env.PUBLIC_URL}/open.png);

  // background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  background-color: rgba(0, 0, 0, 0);
  color: white;
	align-items : center ;
  height: 80vh;
  min-width: 220px;

  // box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);

  
`;


// =======================================

export const StatusCardCompras = styled.div`
  position: relative;  
  margin-top: 15px;
  display: flex;
  align-items: center;
  gap: 16px;

  padding: 16px 20px 16px; /* espaço pro botão */
  border-radius: 1px;

  background: rgba(0, 0, 0, 0.2);
  color: white;

  min-width: 220px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
`;

export const DeleteButton = styled.button`
  position: absolute;
  right: 12px; 
  // bottom: 12px;
  width:  50px;
  height: 50px;

  border: none;
  border-radius: 8px;

  background-color: rgba(0 , 0, 0, 0);
  background-image: url(${process.env.PUBLIC_URL}/excluir.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 30px;

  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    filter: brightness(1.15);
    background-color : gba(0 , 0, 0, 0.9);
  }
`;


export const DescontoButton = styled.button`
  position: absolute;
  // bottom: 12px;
  right: 72px; 
  width:  50px;
  height: 50px;
  border: none;
  border-radius: 8px;

  background-color: rgba(0 , 0, 0, 0);
  background-image: url(${process.env.PUBLIC_URL}/desconto.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 30px;

  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    filter: brightness(1.15);
    background-color : gba(0 , 0, 0, 0.9);
  }
`;



// =======================================


// export const EstoqueButton = styled.button`
//   position: absolute;
//   // bottom: 15px;
//   top : 1.40% ;
//   right: 40px; 
//   width: 3%;
//   height: 6%;

//   border: none;
//   border-radius: 8px;
//   background-color: rgba(0 , 0, 0, 0);


//   background-image: url(${process.env.PUBLIC_URL}/armazem.png);
//   background-repeat: no-repeat;
//   background-position: center;
//   background-size: 45px;

//   cursor: pointer;
//   transition: all 0.2s ease;

//   &:hover {
//     filter: brightness(1.15);
//     background-color : gba(0 , 0, 0, 0.9);
//   }
// `;

// export const UserButton = styled.button`
//   position: absolute;
//   // bottom: 15px;
//   top : 1.40% ;
//   right:  120px; 
//   width: 3%;
//   height: 6%;

//   border: none;
//   border-radius: 8px;
//   background-color: rgba(0 , 0, 0, 0);


//   background-image: url(${process.env.PUBLIC_URL}/usuario.png);
//   background-repeat: no-repeat;
//   background-position: center;
//   background-size: 45px;

//   cursor: pointer;
//   transition: all 0.2s ease;

//   &:hover {
//     filter: brightness(1.15);
//     background-color : gba(0 , 0, 0, 0.9);
//   }
// `;

// export const RelatoriosButton = styled.button`
//   position: absolute;
//   // bottom: 15px;
//   top : 1.40% ;
//   right:  190px; 
//   width: 3%;
//   height: 6%;

//   border: none;
//   border-radius: 8px;
//   background-color: rgba(0 , 0, 0, 0);


//   background-image: url(${process.env.PUBLIC_URL}/relatorios.png);
//   background-repeat: no-repeat;
//   background-position: center;
//   background-size: 45px;

//   cursor: pointer;
//   transition: all 0.2s ease;

//   &:hover {
//     filter: brightness(1.15);
//     background-color : gba(0 , 0, 0, 0.9);
//   }
// `;

// export const RegistrocompraButton = styled.button`
//   position: absolute;
//   // bottom: 15px;
//   top : 1.40% ;
//   right:  260px; 
//   width: 3%;
//   height: 6%;

//   border: none;
//   border-radius: 8px;
//   background-color: rgba(0 , 0, 0, 0);


//   background-image: url(${process.env.PUBLIC_URL}/loja.png);
//   background-repeat: no-repeat;
//   background-position: center;
//   background-size: 45px;

//   cursor: pointer;
//   transition: all 0.2s ease;

//   &:hover {
//     filter: brightness(1.15);
//     background-color : gba(0 , 0, 0, 0.9);
//   }
// `;


export const QuantityInput = styled.input`
  margin-top : 11px;
  width: 100%;
  padding: 6px 8px;
  right : 12px ;
  border-radius: 6px;
  border: none;
  background: rgba(0, 0, 0, 0.6);
  color: white;

  font-size: 16px;
  text-align: center;

  outline: none;

  &:focus {
    box-shadow: 0 0 0 2px rgba(34, 197, 94, 0.6);
  }
`;


export const Button = styled.button`
  background: ${({ $variant }) =>
    $variant === "primary"
      ? "rgba(0,0,0,0.5)"
      : $variant === "ok"
      ? "linear-gradient(135deg, #1e40af, #3b82f6)"
      : $variant === "cancel"
      ? "linear-gradient(135deg, #7f1d1d, #ef4444)"
      : $variant === "finish"
      ? "linear-gradient(135deg, #166534, #22c55e)"
      : "rgba(0,0,0,0.5)"
  };
`;


// =======================================

// ===============  Para modal ========================
// =======================================
// =======================================


// ===============  Para modal 1


export const PainelModalListaProdutos = styled.div`
  flex: 1;
  padding: 20px;
  border-radius: 12px;
  background-color: #0f172a ;
 box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
	margin-top : 40px;
	width: 100%;
  height: 65%;
	display : black ;
	overflow-y: auto; 
  // overflow-x: hidden; 

`;


// ===============  Para modal 1


 