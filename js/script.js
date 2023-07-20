var form = document.querySelector('#form');

function includeThird(tipo, atributos){
	deleteThird();
	if(tipo != 'select')
	{
		var novoItem = document.createElement("input");
		novoItem.setAttribute('type', tipo);
		novoItem.setAttribute('id', 'valor-c');
		novoItem.setAttribute('placeholder', 'valor 3');
		form.insertBefore(novoItem, document.querySelector("#btn-calcular"));
	}
	else 
	{
		var novasOpcoes = document.createElement("select");
		novasOpcoes.setAttribute('id', 'valor-c')
		var opti = [];
		atributos.forEach(j => opti = Array.from(atributos));
		console.log(opti);
		var setOptionDOM = [];
		opti.forEach(valor => {
			novasOpcoes.insertAdjacentHTML("beforeend", "<option value=\"" + opti[valor] + "\" />")});
		
	}

}

function deleteThird(){
	if(document.querySelector("#valor-c"))
	{
		var delItem = document.querySelector("#valor-c");
		delItem.remove();
	}
}

var calcs = document.querySelectorAll('input[type=checkbox]');
let calcAtivas = [];

calcs.forEach(function(checkbox){
	checkbox.addEventListener('change', function(){
		calcAtivas = Array.from(calcs).filter(i => i.checked).map(i => i.value)
		if(document.querySelector("#ex1").checked == true)
		{
			includeThird("number");
		}
		else if(document.querySelector("#ex22").checked == true)
		{
			includeThird("number");
		}
		else if(document.querySelector("#ex24").checked == true)
		{
			includeThird("text");
			document.querySelector("#valor-b").disabled = true;
		}
		else
		{
			deleteThird();
			document.querySelector("#valor-b").disabled = false;
		}
	})
});

document.querySelector("#btn-calcular").addEventListener("click", function(){
	let a = document.querySelector("#valor-a").value;
	let b = document.querySelector("#valor-b").value;

	if(calcAtivas == [] || calcAtivas == "")
	{
		if(a.length > 0 && b.length > 0)
		{
			alert(parseInt(a) + parseInt(b));
		}
		else
		{
			alert("Por favor, insira um número nas posições!")
		}
	}


	if (document.querySelector("#sub").checked == true)
	{
		alert(parseInt(a) - parseInt(b));
	}
	if (document.querySelector("#exb").checked == true)
	{
		let areaC = (3.14 * (b * b)) + (2 * 3.14 * a * b);
		litro = areaC / 3;
		quant = Math.round(litro / 5)
		custo = quant * 50
		alert("Para pintar o cilindro com as informações recebidas, você irá precisar de um total de " + parseInt(quant) + " latas, totalizando o valor de R$ " + parseInt(custo));
	}
	if(document.querySelector("#ex1").checked == true)
	{
		let c = document.querySelector("#valor-c").value;

		let x = ((-b + (Math.sqrt((b * b) - 4 * a * c))) / (2 * a));
		let xNeg = ((-b - (Math.sqrt((b * b) - 4 * a * c))) / (2 * a));

		alert("X pode ser: " + x + " ou " + xNeg);
	}
	if(document.querySelector("#ex3").checked == true)
	{
		let volume = (4 / 3) * (3.14 * (Math.pow(a, 3)));
		alert("O Volume da esfera é: " + volume);
	}
	if(document.querySelector("#ex22").checked == true)
	{
		let c = document.querySelector("#valor-c").value;
		console.log(a, b, c);
		var mediador = a;
		if(b>a)
		{
			mediador = b;
			b = a;
			a = mediador
			if(c>a)
			{
				mediador = c;
				c = a;
				a = mediador
			}
			if(c>b)
			{
				mediador = c;
				c = b;
				b = mediador;
			}
		} else{
			if(c>b)
			{
				mediador = c;
				c = b;
				b = mediador;
			}
			if(b>a)
			{
				mediador = b;
				b = a;
				a = mediador
			}
		}
		console.log(a,b,c);
		alert(a + "maior que " + b + " que é maior que " + c);
	}

	if(document.querySelector("#ex24").checked == true)
	{
		let cromos24 = document.getElementById('#valor-c').value;

		if(cromos24 == "masculino");
	}
});