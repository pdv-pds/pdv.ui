import styled from "styled-components";

export const Menu1 = styled.div`
  padding: 20px;
  // height: 30vh;
  // margin: 10px;
  // border-radius: 12px;
  background-color: rgba(0, 0, 0, 0.4);
  color: white;
`;


export const Caixa = styled.button`
  position: absolute;
  // bottom: 15px;
  top : 1.40% ;
  right: 40px; 
  width: 3%;
  height: 6%;

  border: none;
  border-radius: 8px;
  background-color: rgba(0 , 0, 0, 0);


  background-image: url(${process.env.PUBLIC_URL}/armazem.png);
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

export const Gerencia = styled.button`
  position: absolute;
  // bottom: 15px;
  top : 1.40% ;
  right:  120px; 
  width: 3%;
  height: 6%;

  border: none;
  border-radius: 8px;
  background-color: rgba(0 , 0, 0, 0);


  background-image: url(${process.env.PUBLIC_URL}/usuario.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 45px;

  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    filter: brightness(1.15);
    background-color : gba(0 , 0, 0, 0.9);
  }
`;




export function Menu1Completo({ nome }) {
  return (
    <Menu1>
      Olá, {nome}
      {/*<Caixa/>*/}
      {/*<Gerencia/>*/}

    </Menu1>
  );
}








// --------------------------------------------------

export const Menu2 = styled.div`
  position : absolute ;
  min-height: 94%;
  width: 300px; /* melhor que % */
  // margin: 10px;
  // padding: 12px 8px;

  display: block ;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  // border-radius: 12px;
  // background-color: rgba( 0 , 0 , 0, 0.4) ;
  // background: linear-gradient(
  //   180deg,
  //   rgba(10, 10, 20, 0.85),
  //   rgba(0, 0, 0, 0.95)
  // );

background-color: #141d26 ;
  color: white;

  // box-shadow: 
  //   0 8px 20px rgba(0, 0, 0, 0.6),
  //   inset 0 0 0 1px rgba(255, 255, 255, 0.05);

  transition: width 0.25s ease;

  // &:hover {
  //   width: 500px;
  // }
`;

export const MenuButton = styled.button`
  margin-top : 4px ;
  width: 100%;
  height: 60px;

  padding: 0 12px;
  gap: 10px;

  // border-radius: 8px;
  border: none;

  background: rgba(0, 0, 0, 0.4);
  color: white;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
  }

  img {
    width: 20px;
    height: 20px;
    object-fit: contain;
  }
`;



export function Menu1LateralCompleto({   }) {
  return (
    <Menu2>
        <br/>
        < MenuButton>    <img src="/armazem.png"/> Estoque  </MenuButton>
        < MenuButton>    <img src="/relatorios.png"/>  Relátorios  </MenuButton>
        < MenuButton>    <img src="/perfil.png"/> Gerencia Acessos  </MenuButton>
    </Menu2>
  );
}



// --------------------------------------------------
