import { Container, Left, Right, LoginBox , Logo } from "./Styles";

function Login() {
  return (
    <Container>
      <Left />
      <Right>
        <LoginBox>
          <Logo />

          <br/> 
          {/*<h1>Painel de login </h1>*/}
            <br/> 
          <input className="input_user" placeholder="Usuário" />
          <input className="input_pass" type="password" placeholder="Senha" />
          <button>Entrar</button>
          <br/><br/>
        </LoginBox>
      </Right>
    </Container>
  );
}

export default Login;
