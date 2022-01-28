
/*Aqui eu crio constantes selecionando os IDs no html, selecionando o formulário, botão e a mensagem de erro */
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");


/*Crio um evento de click, para pegar e validar os valores de usuario e senha */
loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    /*Caso o valor corresponda, aparecerá um alerta informago Login com sucesso e iremos passar para o site da empresa*/
    if (username === "user" && password === "web_dev") {
      alert("Login com Sucesso.");
      window.location.replace("https://showdeimagem.com.br");
  
  /*Caso as informação não coresponda com o IF, será apresentado a mensagem de erro */
  } else {
      loginErrorMsg.style.opacity = 1;
  }
})

