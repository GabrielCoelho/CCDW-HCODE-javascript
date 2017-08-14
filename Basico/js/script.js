//var resposta = confirm("Deseja excluir?");

/*
console.log(resposta);
*/

const a = 10;
const b = 33;

function somar(a, b){

	return a + b;

}

console.log(somar(2, 5));

/*
document.getElementById("btn-calcular").onclick = function(){

	var valorA = document.getElementById("valor-a").value;
	var valorB = document.getElementById("valor-b").value;

	alert(parseInt(valorA) + parseInt(valorB));

}*/

document.querySelector("#btn-calcular").addEventListener("click", function(){
	let valorA = document.querySelector("#valor-a").value;
	let valorB = document.querySelector("#valor-b").value;
	if(valorA.length > 0 && valorB.length > 0){
	alert(parseInt(valorA) + parseInt(valorB));}
	else{alert("Por favor, insira um número nas posições!")}
});