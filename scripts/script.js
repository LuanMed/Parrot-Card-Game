let arr = [];
let i = 0;

let qtdeCartas = prompt("Digite a quantidade de cartas");

while (qtdeCartas < 4 || qtdeCartas > 14 || qtdeCartas%2 !== 0){
    alert("Quantidade de cartas inválida! Por favor, selecione números pares de 4 a 14.");
    qtdeCartas = prompt("Digite a quantidade de cartas");
}

const cartasNaMesa = document.querySelector(".caixas");
for (i = 0; i <= qtdeCartas-1; i++){
    arr.push(`<div class="container-carta ${i}" onclick="virarCarta(this); contarClique()"> <li class="caixa"><img src="./imagens/back.png"></li></div>`)
    //cartasNaMesa.innerHTML += `<div class="caixa"><img src="./imagens/back.png"></div>`;
}

function virarCarta(selected){
    selected.classList.add("virada");
    function delayTrocarImg(){
        if (selected.classList.contains("0") || selected.classList.contains("1")){
            selected.innerHTML= `<li onclick="virarCarta(this)" class="caixa"><img src="./imagens/unicornparrot.gif"></li>`
        }
        if (selected.classList.contains("2") || selected.classList.contains("3")){
            selected.innerHTML= `<li onclick="virarCarta(this)" class="caixa"><img src="./imagens/revertitparrot.gif"></li>`
        }
        if (selected.classList.contains("4") || selected.classList.contains("5")){
            selected.innerHTML= `<li onclick="virarCarta(this)" class="caixa"><img src="./imagens/metalparrot.gif"></li>`
        }
        if (selected.classList.contains("6") || selected.classList.contains("7")){
            selected.innerHTML= `<li onclick="virarCarta(this)" class="caixa"><img src="./imagens/fiestaparrot.gif"></li>`
        }
        if (selected.classList.contains("8") || selected.classList.contains("9")){
            selected.innerHTML= `<li onclick="virarCarta(this)" class="caixa"><img src="./imagens/explodyparrot.gif"></li>`
        }
        if (selected.classList.contains("10") || selected.classList.contains("11")){
            selected.innerHTML= `<li onclick="virarCarta(this)" class="caixa"><img src="./imagens/bobrossparrot.gif"></li>`
        }
        if (selected.classList.contains("12") || selected.classList.contains("13")){
            selected.innerHTML= `<li onclick="virarCarta(this)" class="caixa"><img src="./imagens/tripletsparrot.gif"></li>`
        }
    } 
    
    setTimeout(function(){
        
        delayTrocarImg()
    }, 300);
    
    function desvirarCarta(){
        selected.classList.remove("virada");
        function delayDestrocarImg(){
            selected.innerHTML= `<li onclick="virarCarta(this)" class="caixa"><img src="./imagens/back.png"></li>`
        }
        setTimeout(function(){
        
            delayDestrocarImg()
        }, 300);
    }

    setTimeout(function(){
        
        desvirarCarta()
    }, 2000);
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
    console.log(qtdCliques);
}
