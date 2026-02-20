export function excluirItem ( ) {
  const senha = window.prompt("Digite o codigo de exclusão :");

  if (senha === "1234") {
    alert("Senha correta");
    return true 
// /
   } 
    alert("Senha incorreta");
    return false
  
}



export function confirmarCancelw(fecharCompra) {
  const senha = window.prompt("Digite a senha:");

  if (senha === "1234") {
    fecharCompra();
  } else {
    alert("Senha incorreta");
  }
}
