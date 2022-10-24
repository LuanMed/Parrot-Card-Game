let arr = []
let qtdeCartas = 0;
let qtdCliques = 0;
let contador = 0;
let codigo;

iniciarJogo();
function iniciarJogo(){
    qtdeCartas = prompt(`Digite a quantidade de cartas:`);
    while (qtdeCartas < 4 || qtdeCartas > 14 || qtdeCartas%2 !== 0){
        alert(`Quantidade de cartas inválida!\nPor favor, selecione números pares de 4 a 14.`);
        qtdeCartas = prompt("Digite a quantidade de cartas");
    }

    const largura = document.querySelector(".caixas");
    if (qtdeCartas == 4){
        largura.classList.add("largura4cartas");
    } else if (qtdeCartas == 6){
        largura.classList.add("largura6cartas");
    } else if (qtdeCartas == 8){
        largura.classList.add("largura8cartas");
    } else if (qtdeCartas == 10){
        largura.classList.add("largura10cartas");
    } else if (qtdeCartas == 12){
        largura.classList.add("largura12cartas");
    } else if (qtdeCartas == 14){
        largura.classList.add("largura14cartas");
    }
    
    for (i = 0; i <= qtdeCartas-1; i++){
        arr.push(`<div class="container-carta unfliped ${i}" onclick="virarCarta(this)"> <li class="caixa"><img src="./imagens/back.png"></li></div>`)
    }
    arr.sort(comparador);

    const cartasNaMesa = document.querySelector(".caixas");
    for (i = 0; i <= qtdeCartas-1; i++){
        cartasNaMesa.innerHTML += arr[i];
    }
    codigo = setInterval(cronometro, 1000);
}

function resetarJogo() {
    const resetarCartas = document.querySelector(".caixas");
    resetarCartas.innerHTML = "";
    arr = [];
    qtdCliques = 0;
    contador = 0;
}

function virarCarta(selected){
        contarClique();
        function delayTrocarImg(){
            if (selected.classList.contains("0") || selected.classList.contains("1")){
                selected.innerHTML= `<li class="caixa"><img src="./imagens/unicornparrot.gif"></li>`
            }
            if (selected.classList.contains("2") || selected.classList.contains("3")){
                selected.innerHTML= `<li class="caixa"><img src="./imagens/revertitparrot.gif"></li>`
            }
            if (selected.classList.contains("4") || selected.classList.contains("5")){
                selected.innerHTML= `<li class="caixa"><img src="./imagens/metalparrot.gif"></li>`
            }
            if (selected.classList.contains("6") || selected.classList.contains("7")){
                selected.innerHTML= `<li class="caixa"><img src="./imagens/fiestaparrot.gif"></li>`
            }
            if (selected.classList.contains("8") || selected.classList.contains("9")){
                selected.innerHTML= `<li class="caixa"><img src="./imagens/explodyparrot.gif"></li>`
            }
            if (selected.classList.contains("10") || selected.classList.contains("11")){
                selected.innerHTML= `<li class="caixa"><img src="./imagens/bobrossparrot.gif"></li>`
            }
            if (selected.classList.contains("12") || selected.classList.contains("13")){
                selected.innerHTML= `<li class="caixa"><img src="./imagens/tripletsparrot.gif"></li>`
            }
        }
        setTimeout(delayTrocarImg, 180);
        selected.classList.add("flip");
        selected.classList.remove("unfliped");
        const cartasViradas = document.querySelectorAll(".flip");
        if (cartasViradas.length === 2){
            setTimeout(comparando, 250);
            setTimeout(encerrarJogo, 350);
        }
}

function comparando(){
    const cartasViradas = document.querySelectorAll(".flip");
    console.log(cartasViradas[0])
    console.log(cartasViradas[1])
    if (cartasViradas.length === 2){
        desabilitarCartas();
        if (cartasViradas[0].innerHTML == cartasViradas[1].innerHTML){
            cartasViradas[0].classList.remove("flip");
            cartasViradas[1].classList.remove("flip");
            cartasViradas[0].classList.add("combinada");
            cartasViradas[1].classList.add("combinada");
            habilitarCartas();
            console.log("acertou")
        } else {
            function desvirarCarta(){
                    
                cartasViradas[0].classList.remove("flip");
                cartasViradas[1].classList.remove("flip");
                cartasViradas[0].classList.add("unfliped");
                cartasViradas[1].classList.add("unfliped");
                function delayDestrocarImg(){
                    cartasViradas[0].innerHTML= `<li  class="caixa"><img src="./imagens/back.png"></li>`
                    cartasViradas[1].innerHTML= `<li  class="caixa"><img src="./imagens/back.png"></li>`
                }
                setTimeout(delayDestrocarImg, 180);
            }
            setTimeout(desvirarCarta, 1000);
            setTimeout(habilitarCartas, 1000);
            console.log("errou")
        }
        desabilitarCombinadas();
    }
}

function encerrarJogo(){
    const contarCombinadas = document.querySelectorAll(".combinada");
    if (contarCombinadas.length == qtdeCartas){
        clearInterval(codigo);
        alert(`Yeeh!! Parabéns!!!\nVocê terminou em ${qtdCliques} jogadas!\nLevou apenas ${contador} segundos.`);
        jogarNovamente();
    }
}

function comparador() { 
	return Math.random() - 0.5; 
}

function habilitarCartas() {
    const cartasNaoViradas = document.querySelectorAll(".unfliped");
    for (let i = 0; i < cartasNaoViradas.length; i++){
        cartasNaoViradas[i].setAttribute("onclick", "virarCarta(this)");
    }
}

function desabilitarCartas() {
    const cartasNaoViradas = document.querySelectorAll(".unfliped");
    for (let i = 0; i < cartasNaoViradas.length; i++){
        cartasNaoViradas[i].removeAttribute("onclick");
    }
}

function desabilitarCombinadas() {
    const cartasCombinadas = document.querySelectorAll(".combinada");
    for (let i = 0; i < cartasCombinadas.length; i++){
        cartasCombinadas[i].removeAttribute("onclick");
    }
}

function contarClique(){
    qtdCliques++;
}

function jogarNovamente(){
    let answer = prompt("Gostaria de jogar novamente? (sim/não)");
    while (answer != "sim" && answer != "não"){
        answer = prompt(`Gostaria de jogar novamente?\n(Responda 'sim' se quiser jogar ou 'não' caso queira parar.)`);
    }
    if (answer == "sim"){
        resetarJogo();
        iniciarJogo();
    } 
}

function cronometro() {
    contador++;
    const elementoCronometro = document.querySelector(".cronometro");
    elementoCronometro.innerHTML = `<p>${contador}s</p>`
}