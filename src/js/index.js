// Botão modo escuro

//variaveis:
const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const imagemBotaoSol = document.querySelector(".imagem-botao")

//codigo que escuta o evento do click para modo escuro:
botaoAlterarTema.addEventListener("click", () => {
    //se o atributo ja tiver o class = Modo escuro, remove ele:
    if (body.classList.contains("modo-escuro")) {
        body.classList.remove("modo-escuro");
        imagemBotaoSol.setAttribute("src", "./src/imagens/sun.png");
    }
    //se não tiver, ele adiciona:
    else{
        body.classList.add("modo-escuro");
    imagemBotaoSol.setAttribute("src", "./src/imagens/moon.png");}
})



