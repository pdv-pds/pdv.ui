import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    color: white ;
  background-color : #243B55 ;
  }
`;

// --------------------------
// Componentes

export const SelectPadrao = styled.select`
 
  background: rgba(15, 23, 42, 0.9);
  color: #fff;

  padding: 10px;
  border-radius: 5px;

  border: 1px solid #334155;
  outline: none;

  font-size: 14px;
  cursor: pointer;

  transition: all 0.2s ease;

  &:hover {
    border-color: blue;
  }

  &:focus {
    border-color: #0ea5e9;
    box-shadow: 0 0 0 2px rgba(14, 165, 233, 0.3);
  }

  option {
    background: #0f172a;
    color: #fff;
  }
`;



export const SelectPadraoAll = styled.select`
     width: 100%;
  margin-top: 10px;

  background: rgba(15, 23, 42, 0.9);
  color: #fff;

  padding: 10px;
  border-radius: 5px;

  border: 1px solid #334155;
  outline: none;

  font-size: 14px;
  cursor: pointer;

  transition: all 0.2s ease;

  &:hover {
    border-color: blue;
  }

  &:focus {
    border-color: #0ea5e9;
    box-shadow: 0 0 0 2px rgba(14, 165, 233, 0.3);
  }

  option {
    background: #0f172a;
    color: #fff;
  }
`;


export const ActionButtonsComponenteHorizontal = styled.div`
  display: flex;
  gap: 12px;
  margin-top: auto ;   
`;



export const ButtonPadrao = styled.button`
  font-size: 14px;
  background: rgba(15, 23, 42, 0.9);
  margin-top: 10px;
  padding: 10px 16px;
  border-radius: 5px;
  border: 1px solid #334155;
  color: white;
  cursor: pointer;
 
    &:hover {
    border-color: blue;
  }

  &:focus {
    border-color: #0ea5e9;
    box-shadow: 0 0 0 2px rgba(14, 165, 233, 0.3);
  }

  option {
    background: #0f172a;
    color: #fff;
  }

`;



export const ButtonPadraoAllsolicitacao = styled.button`
    width: 100%;
 
  font-size: 18px;
  background: rgba(0 , 0 , 0, 0.2);
  margin-top: 10px;
  padding: 10px 16px;
  border-radius: 5px;
  border: 1px solid #334155;
   color: white;
  cursor: pointer;
   width : 100% ;
    &:hover {
    border-color:  white;
  }

  &:focus {
    border-color: #0ea5e9;
    box-shadow: 0 0 0 2px rgba(14, 165, 233, 0.3);
  }

  // option {
  //   background: #0f172a;
  //   color: #fff;
  // }

`;


export const ButtonPadraoAll = styled.button`
    width: 100%;

  font-size: 14px;
  background: rgba(15, 23, 42, 0.9);
  margin-top: 10px;
  padding: 10px 16px;
  border-radius: 5px;
  border: 1px solid #334155;
   color: white;
  cursor: pointer;
  heigth : 100%;
    &:hover {
    border-color: blue;
  }

  &:focus {
    border-color: #0ea5e9;
    box-shadow: 0 0 0 2px rgba(14, 165, 233, 0.3);
  }

  option {
    background: #0f172a;
    color: #fff;
  }

`;




export const InputPadrao = styled.input`
  width: 100%;
 
  color: white ;
  padding: 10px 10px 10px 36px;

  border-radius: 4px;
  border: none;
  outline: none;

  background: #0f172a;
  background-repeat: no-repeat;
  background-position: 10px center;
  background-size: 14px;

  font-size: 14px;

  &:focus {
    box-shadow: 0 0 0 2px rgba(14, 165, 233, 0.4);
  }
`;


export const InputPadraoReduzido = styled.input`
  margin-right : 20px ;
  color: white ;
  padding: 10px 10px 10px 36px;

  border-radius: 4px;
  border: none;
  outline: none;

  background: #0f172a;
  background-repeat: no-repeat;
  background-position: 10px center;
  background-size: 14px;

  font-size: 14px;

  &:focus {
    box-shadow: 0 0 0 2px rgba(14, 165, 233, 0.4);
  }
`;