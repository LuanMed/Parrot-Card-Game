let arr = [];

let qtdeCartas = prompt("Digite a quantidade de cartas");

while (qtdeCartas < 4 || qtdeCartas > 14 || qtdeCartas%2 !== 0){
    alert("Quantidade de cartas inválida! Por favor, selecione números pares de 4 a 14.");
    qtdeCartas = prompt("Digite a quantidade de cartas");
}

const cartasNaMesa = document.querySelector(".caixas");
for (let i = 0; i <= qtdeCartas-1; i++){
    arr.push(`<div class="caixa"><img src="./imagens/back.png" alt="${i}"></div>`)
    //cartasNaMesa.innerHTML += `<div class="caixa"><img src="./imagens/back.png"></div>`;
}
arr.sort(comparador);

for (let i = 0; i <= qtdeCartas-1; i++){
    cartasNaMesa.innerHTML += arr[i];
}

function comparador() { 
	return Math.random() - 0.5; 
}



