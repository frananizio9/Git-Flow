
const formulario = document.getElementById("formCadastro");
const mensagem = document.getElementById("mensagem");

formulario.addEventListener("submit", function(evento) {

    evento.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const senha = document.getElementById("senha").value;

    if (nome === "" || email === "" ||
        telefone === "" || senha.trim() === "") {

        mostrarMensagem("Preencha todos os campos!", "erro");
        return;
    }

    if (nome.length < 3) {
        mostrarMensagem("Digite um nome válido!", "erro");
        return;
    }

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailValido.test(email)) {
        mostrarMensagem("Digite um e-mail válido!", "erro");
        return;
    }

    const numeroTelefone = telefone.replace(/\D/g, "");

    if (numeroTelefone.length !== 10 &&
        numeroTelefone.length !== 11) {

        mostrarMensagem("Digite um telefone válido!", "erro");
        return;
    }

    if (senha.length < 6) {
        mostrarMensagem("A senha deve ter pelo menos 6 caracteres!", "erro");
        return;
    }

    mostrarMensagem("Cadastro realizado com sucesso!", "sucesso");

    formulario.reset();
});

function mostrarMensagem(texto, tipo) {
    mensagem.textContent = texto;
    mensagem.className = tipo;
}