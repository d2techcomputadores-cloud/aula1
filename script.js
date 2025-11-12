document.title = "Novo titulo";

magenta = 0

function mudarCor(){
    magenta = magenta + 32
    document.body.style.color = 'rgb(255,0,255';


}

function zeraMagenta(){
    magenta = 0

}


botao = document.querySelector("button")

botao.addEventListener("click",mudarCor)

window.setInterval(mudarCor,100)