
//efeito do botão voltar ao Topo
var btn = document.querySelector("#back-to-top");

btn.addEventListener("click", function() {
    window.scrollTo(0, 0);
});
//Validação de Login
function login(){
    var logado= 0;
    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;

    if(usuario == "user" && senha == "253001"){
        window.location="index.html";
        logado=1;
    }

    if(logado==0){
        alert("USUÁRIO OU SENHA INVÁLIDOS")
    }
}

//Ativar alert no botão cadastrar

function cadastro() {
    alert("Cadastro com Sucesso!");
    window.location.href = 'index.html';
}