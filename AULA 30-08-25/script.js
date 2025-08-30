console.log('Ola, Mundo!');

let form = document.getElementById("contato-form");

form.addEventListener("submit", enviarFormulario);

function enviarFormulario(event){
    event.preventDefault();
    let nome = document.getElementById("input-nome").value;
    console.log(nome);
    alert(nome+ ", Seu contato foi enviado com SUCESSO!!!!!");
}





