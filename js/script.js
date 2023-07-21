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
		novasOpcoes.setAttribute('id', 'valor-c');
		var opti = [];
		atributos.forEach(j => opti = Array.from(atributos));
		console.log(opti);
		form.insertBefore(novasOpcoes, document.querySelector("#btn-calcular"));
		opti.forEach(valor => {
			novasOpcoes.insertAdjacentHTML("beforeend", "<option value=\"" + valor + "\">"+valor+"</option>");
		});
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
			document.querySelector("#valor-a").placeholder='Ax² +';
			document.querySelector("#valor-b").placeholder='Bx +';
			includeThird("number");
			document.querySelector("#valor-c").placeholder='C';
		}
		else if(document.querySelector("#ex22").checked == true)
		{
			document.querySelector("#valor-a").placeholder='Primeiro Valor';
			document.querySelector("#valor-b").placeholder='Segundo Valor';
			includeThird("number");
			document.querySelector("#valor-c").placeholder='Terceiro Valor';
		}
		else if(document.querySelector("#ex24").checked == true)
		{
			includeThird('select', ['Masculino', 'Feminino']);
			document.querySelector("#valor-b").disabled = true;
			document.querySelector("#valor-a").placeholder='Altura (em cm)';
			document.querySelector("#valor-b").placeholder='';
		}
		else if (document.querySelector("#sub").checked == true)
		{
			document.querySelector("#valor-a").placeholder='Valor a Subtrair';
			document.querySelector("#valor-b").placeholder='Valor 2 a Subtrair';
		}
		else if(calcAtivas == [] || calcAtivas == "")
		{
			document.querySelector("#valor-a").placeholder='Valor a Somar';
			document.querySelector("#valor-b").placeholder='Valor 2 a Somar';
			deleteThird();
			document.querySelector("#valor-b").disabled = false;
		}
		else if (document.querySelector("#exb").checked == true)
		{
			document.querySelector("#valor-a").placeholder='Altura do Cilindro';
			document.querySelector("#valor-b").placeholder='Raio do Cilindro';
		}	
		else if(document.querySelector("#ex3").checked == true)
		{
			document.querySelector("#valor-b").disabled = true;
			document.querySelector("#valor-a").placeholder='Raio da Esfera';
			document.querySelector("#valor-b").placeholder='';
		}
		else if(document.querySelector("#ex25").checked == true)
		{
			document.querySelector("#valor-a").placeholder='Ano de nascimento';
			document.querySelector("#valor-b").disabled = true;
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
		document.querySelector("#valor-b").placeholder='C';

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
		let demarcador = document.querySelector('#valor-c');
		let cromos24 = demarcador.options[demarcador.selectedIndex].text;
		let pesoIdeal
		if(cromos24 == "Masculino"){
			pesoIdeal = Math.round(((72.7*a)/100)-58);
			alert("O peso ideal para sua altura é: " + pesoIdeal + "Kg")
		}else if(cromos24 == "Feminino"){
			pesoIdeal = Math.round(((62.1*a)/100)-44.7);
			alert("O peso ideal para sua altura é: " + pesoIdeal + "Kg")
		}else{
			alert("Por favor, escolha um sexo");
		}
	}

	if(document.querySelector("#ex25").checked == true)
	{
		const idadeVota = 16;
		const idadeCNH = 18;
		var hoje = new Date();
		var anoAtual = hoje.getFullYear();
		var idade = anoAtual - a;
		if (anoAtual < a)
		{
			alert("Por favor, digite um ano válido!");
		} else if(idade < idadeVota)
		{
			alert("Você tem "+ idade + " anos!");
		} else if(idade >= idadeVota && idade < idadeCNH)
		{
			alert("Parabéns pelos seus " + idade + " anos! Com essa idade você já pode votar! Que tal tirar seu título de Eleitor?");
		} else if (idade >= idadeCNH)
		{
			alert("Hey amigão, alto lá - passe no DETRAN para tirar sua CNH pois você já tem " + idade + " anos.");
		} else
		{
			console.log('Erro de percurso');
		}
	}
});