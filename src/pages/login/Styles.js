import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

export const Left = styled.div`
  flex: 1;
  background-image: url("/img2.png");
  background-size: cover;
  background-position: center;
`;

export const Right = styled.div`
  flex: 1;
  background: linear-gradient(
    135deg,
    #0B0F1A 0%,
    #0B0F1A 30%,
    #243B55 100%
  );

  // background: #243B55;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginBox = styled.div`
  color : white ;
  width: 700px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding : 10px ;

  // border: 2px solid rgba( 0 , 0, 0 , 0.3);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);


  h1 {
    text-align: center;
    font-size : 25px;
  }

 

  .input_user {
    color: white;
    padding: 8px 8px 8px 36px;
    border-radius: 4px;
    border: none;
    height : 50px ;
    background-color: rgba(0, 0, 0, 0.9);
    background-image: url(${process.env.PUBLIC_URL}/user_imput.png);
    background-repeat: no-repeat;
    background-position: 10px center;
    background-size: 20px;
  }

  .input_pass {
    color: white;
    padding: 8px 8px 8px 36px;
    border-radius: 4px;
    border: none;
    height : 50px ;

    background-color: rgba(0, 0, 0, 0.9);
    background-image: url(${process.env.PUBLIC_URL}/pass_imput.png);
    background-repeat: no-repeat;
    background-position: 10px center;
    background-size: 20px;
  }


  button {
    margin-top : 15px ;
    padding: 10px;
    border: none;
    background: orange -;
    color: #003247;
    font-weight: bold;
    cursor: pointer;
  }  
  button:hover {
    background: rgba(0, 0, 0, 0.7);
    color: white;
  }
`;


export const Logo = styled.div`
  width: 100px;
  height: 100px;
  margin: 0 auto 16px;
  background-image: url(${process.env.PUBLIC_URL}/logo192.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;
