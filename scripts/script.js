let arr = [];
let i = 0;
let codigo;

let qtdeCartas = prompt(`Digite a quantidade de cartas:`);

while (qtdeCartas < 4 || qtdeCartas > 14 || qtdeCartas%2 !== 0){
    alert(`Quantidade de cartas inválida!
Por favor, selecione números pares de 4 a 14.`);
    qtdeCartas = prompt("Digite a quantidade de cartas");
}

const cartasNaMesa = document.querySelector(".caixas");
for (i = 0; i <= qtdeCartas-1; i++){
    arr.push(`<div class="container-carta ${i}" onclick="virarCarta(this); contarClique()"> <li class="caixa"><img src="./imagens/back.png"></li></div>`)
    //cartasNaMesa.innerHTML += `<div class="caixa"><img src="./imagens/back.png"></div>`;
}

function virarCarta(selected){

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
        setTimeout(delayTrocarImg, 275);
        selected.classList.add("flip");

        setTimeout(comparando, 300);
        setTimeout(encerrarJogo, 400);
        
}

function comparando(){
    const cartasViradas = document.querySelectorAll(".flip");
    console.log(cartasViradas);
    if (cartasViradas.length === 2){
        if (cartasViradas[0].innerHTML == cartasViradas[1].innerHTML){
            cartasViradas[0].classList.remove("flip");
            cartasViradas[1].classList.remove("flip");
            cartasViradas[0].classList.add("combinada");
            cartasViradas[1].classList.add("combinada");
            
        } else {
            function desvirarCarta(){
                    
                cartasViradas[0].classList.remove("flip");
                cartasViradas[1].classList.remove("flip");
                function delayDestrocarImg(){
                    cartasViradas[0].innerHTML= `<li  class="caixa"><img src="./imagens/back.png"></li>`
                    cartasViradas[1].innerHTML= `<li  class="caixa"><img src="./imagens/back.png"></li>`
                }
                setTimeout(delayDestrocarImg, 275);
            }
            setTimeout(desvirarCarta, 1000);  
        }
    }
}

function encerrarJogo(){
    const contarCombinadas = document.querySelectorAll(".combinada");
    console.log(contarCombinadas)
    if (contarCombinadas.length == qtdeCartas){
        alert(`Yeeih!! Parabéns!
Você terminou em ${qtdCliques} jogadas!`);
    }
}

arr.sort(comparador);

for (i = 0; i <= qtdeCartas-1; i++){
    cartasNaMesa.innerHTML += arr[i];
}

function comparador() { 
	return Math.random() - 0.5; 
}

let qtdCliques = 0;
function contarClique(){
    qtdCliques++;
}