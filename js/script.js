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

	if (document.querySelector("#sub").checked == true)
	{
	alert(parseInt(valorA) - parseInt(valorB));
	}
	else
	{
		if (document.querySelector("#exb").checked == true)
		{
			let areaC = (3.14 * (valorB * valorB)) + (2 * 3.14 * valorA * valorB);
			litro = areaC / 3;
			quant = Math.round(litro / 5)
			custo = quant * 50
			alert("Para pintar o cilindro com as informações recebidas, você irá precisar de um total de " + parseInt(quant) + " latas, totalizando o valor de R$ " + parseInt(custo));
		}
		else
		{
			if(document.querySelector("#ex1").checked == true)
			{
				let valorC = document.querySelector("#valor-c").value;

				let x = ((-valorB + (Math.sqrt((valorB * valorB) - 4 * valorA * valorC))) / (2 * valorA));
				let xNeg = ((-valorB - (Math.sqrt((valorB * valorB) - 4 * valorA * valorC))) / (2 * valorA));

				alert("X pode ser: " + x + " ou " + xNeg);
			}
			else
			{
				if(document.querySelector("#ex3").checked == true)
				{
					let volume = (4 / 3) * (3.14 * (Math.pow(valorA, 3)));
					alert("O Volume da esfera é: " + volume);
				}
				else
				{
					if(valorA.length > 0 && valorB.length > 0)
					{
					alert(parseInt(valorA) + parseInt(valorB));
					}
					else
					{
						alert("Por favor, insira um número nas posições!")
					}
				}
			}
		}
	}
});

document.querySelector("#ex1").addEventListener("change", function(){
	var form = document.querySelector('#form');

	if(document.querySelector("#ex1").checked == true)
	{
		var novoItem = document.createElement("input");
		novoItem.setAttribute('type', 'number');
		novoItem.setAttribute('id', 'valor-c');
		novoItem.setAttribute('placeholder', 'valor 3');
		console.log(novoItem)
		form.appendChild(novoItem);
	}
	else
	{
		var delItem = document.querySelector("#valor-c");
		delItem.remove();
	}

})
