const mensagem = document.querySelector ("#mensagem");
const formulario = document.getElementById ("iformulario");
const email = document.getElementById ("imail");
const senha = document.getElementById ("isenha");

formulario.onsubmit = (evento) =>{
    let logado;
    let dados = JSON.parse(localStorage.getItem("dados"));
   
    dados.forEach((elemento) => {
        console.log(elemento.email+" "+email.value+" "+ elemento.senha+" "+ senha.value);
        if (elemento.email == email.value && elemento.senha == senha.value){
            logado = true;
           
        }
    });
    if (logado){
        evento.preventDefault();
        let dados = JSON.parse(sessionStorage.getItem("logado")) || [];
        dados.push(
            {
                email :email.value
            }
        )
        sessionStorage.setItem("logado", JSON.stringify(dados));
        window.location.assign("minhalista.html");   
        alert("Perfil logado com sucesso");
    }
    else{
        evento.preventDefault();
        alert("E-mail ou Senha estão inválidos");
    }
}

