const opcoes = {
    1: {nome: "pedra", img: "img/pedra.png", pedra: "EMPATE", papel: "PERDEU", tesoura:"GANHOU"},
    2: {nome: "papel", img:"img/papel.png", pedra: "GANHOU", papel:"EMPATE", tesoura:"PERDEU"},
    3: {nome: "tesoura", img:"img/tesoura.png", pedra:"PERDEU", papel:"GANHOU",tesoura:"EMPATE"},
}

let imgJogador = document.getElementById("imgUser")
let pJogador = document.getElementById("escolhaUsuario")
let imgComputador = document.getElementById("imgComputer")
let pComputador = document.getElementById("escolhaComputador")
let resultadoFinal = document.getElementById("resultado")

let contagemPontosComputador = document.getElementById("pontosComputador")
let contagemPontosJogador = document.getElementById("pontosJogador")

let escolherJogador = {}
let escolhaComputador = {}
let pontosJogador = 0
let pontosComputador = 0

let btnPedra =document.getElementsByTagName("button")[0]
let btnPapel =document.getElementsByTagName("button")[1]
let btnTesoura = document.getElementsByTagName("button")[2]

function escolherJogada(num) {
    escolherJogador = opcoes[num]
}

function montarJogadas(numJogador, ) {
let numComp = Math.floor((Math.random()*3)+1)

escolherJogador = escolherJogada(numJogador)
escolhaComputador = escolherJogada(numComp)
}


montarJogadas()

    function avaliarGanhador(){
        if(escolherJogador[escolhaComputador.nome] == "GANHOU"){
            pontosJogador +=1
        }
        else if(escolherJogador[escolhaComputador.nome] == "PERDEU"){
            pontosComputador +=1    
        }
    }

function montarTela(){
    imgJogador.src = escolherJogador.img
    imgComputador.src = escolhaComputador.img

    imgJogador.alt = escolherJogador.nome 
    imgComputador.alt = escolhaComputador.nome

    pJogador.innerHTML = `Você escolheu ${escolherJogador.nome}`
    pComputador.innerHTML = `Computador escolheu ${escolhaComputador.nome}`

    contagemPontosComputador.innerHTML = pontosComputador
    contagemPontosJogador.inner = pontosJogador
    
    resultadoFinal.innerHTML = escolhaJogador[escolhaComputador.nome]
    switch(escolherJogador[escolhaComputador.nome]){
        case "GANHOU":
            resultadoFinal.classList="ganhou"
            break
        case "PERDEU":
            resultadoFinal.classList="perdeu"
            break
        default:
            resultadoFinal.classList="empatou"        
    }
}

function jogar(num){
    montarJogadas(num)
    avaliarGanhador()
    montarTela()

}

btnPapel.addEventListener("click", ()=> jogar(2))
btnPedra.addEventListener("click", ()=> jogar(1))
btnTesoura.addEventListener("click", ()=> jogar(3))
