const mensagem = document.querySelector ("#mensagem");
const formulario = document.getElementById ("iformulario");
const email = document.getElementById ("imail");
const senha = document.getElementById ("isenha");

formulario.onsubmit = (evento) =>{
    let dados = JSON.parse(localStorage.getItem("dados"));
   
    dados.forEach((elemento) => {
        if (elemento.email === email.value && elemento.senha === senha.value){
            evento.preventDefault();
            window.location.assign("minhalista.html");   
            alert("Perfil logado com sucesso");
            return true;
        }
        else{
            evento.preventDefault();
            senha.value = "";
            alert("E-mail ou Senha estão inválidos");
        }

    });
}