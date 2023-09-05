const sumar = (val1, val2) => {
	const resultado = val1 + val2;
	return resultado;
};
const resta = (val1, val2) => {
	const resultado = val1 - val2;
	return resultado;
};
const dividir = (val1, val2) => {
	const resultado = val1 / val2;
	return resultado;
};

const multiplicar = (val1, val2) => {
	const resultado = val1 * val2;
	return resultado;
};

function calculadora() {
	let operacion;
	while (operacion != "x") {
		operacion = prompt("¿Que Clase de Operacion queres hacer joven padawan?\n+: Sumar\n-: Restar\n*: Multiplicar\n/: División\nx: Salir");
		operacion = operacion.toLowerCase();

		switch (operacion) {
			case "+":
				val1 = parseInt(prompt("Ingrese el primer valor:"));
				val2 = parseInt(prompt("Ingrese el segundo valor"));
				alert("El resultado de la suma es " + sumar(val1, val2));
				break;

			case "-":
				val1 = parseInt(prompt("Ingrese el primer valor:"));
				val2 = parseInt(prompt("Ingrese el segundo valor"));
				alert("El resultado de la resta es " + resta(val1, val2));
				break;

			case "*":
				val1 = parseInt(prompt("Ingrese el primer valor:"));
				val2 = parseInt(prompt("Ingrese el segundo valor:"));
				alert("El resultado de la multiplicación es " + multiplicar(val1, val2));
				break;

			case "/":
				val1 = parseInt(prompt("Ingrese el primer valor:"));
				val2 = parseInt(prompt("Ingrese el segundo valor:"));
				alert("El resultado de la división es " + dividir(val1, val2));
				break;

			case "x":
				break;

			default:
				alert("CODE RED: LA OPERACION INGRESADA NO ES VALIDA");
		}
	}
}
function IA() {
	let operacion;
	while (operacion != "x") {
		operacion = prompt("¿Que Clase de Operacion queres hacer joven padawan?\n+: Sumar\n-: Restar\n*: Multiplicar\n/: División\nx: Salir");
		operacion = operacion.toLowerCase();

		switch (operacion) {
			case "+":
				alert("Elegiste Sumar, me parece alucinante. Relajate, ya hiciste mucho IA piensa por vos");
				val1 = Math.floor(Math.random() * 30);
				alert("Me gusta este numero para vos " + val1);
				val2 = Math.floor(Math.random() * 30);
				console.log(val2);
				alert("y tu otro numero puede ser este " + val2);

				alert("Resultado IA Operation Sumanchi es " + sumar(val1, val2));
				break;

			case "-":
				alert("Elegiste Restar, me parece alucinante. Relajate, ya hiciste mucho IA piensa por vos");
				val1 = Math.floor(Math.random() * 30);
				alert("Me gusta este numero para vos " + val1);
				val2 = Math.floor(Math.random() * 30);
				console.log(val2);
				alert("y tu otro numero puede ser este " + val2);

				alert("Resultado IA Operation Restanchi es " + resta(val1, val2));
				break;

			case "*":
				alert("Elegiste Multiplicar, me parece alucinante. Relajate, ya hiciste mucho IA piensa por vos");
				val1 = Math.floor(Math.random() * 30);
				alert("Me gusta este numero para vos " + val1);
				val2 = Math.floor(Math.random() * 30);
				console.log(val2);
				alert("y tu otro numero puede ser este " + val2);

				alert("Resultado IA Operation Multiplicanchi es " + multiplicar(val1, val2));
				break;

			case "/":
				alert("Elegiste Dividir, me parece alucinante. Relajate, ya hiciste mucho IA piensa por vos");
				val1 = Math.floor(Math.random() * 30);
				alert("Me gusta este numero para vos " + val1);
				val2 = Math.floor(Math.random() * 30);
				console.log(val2);
				alert("y tu otro numero puede ser este " + val2);

				alert("Resultado IA Operation Dividanchi es " + dividir(val1, val2));
				break;

			case "x":
				alert("No existe salida de algo que nunca fue un lugar");
				break;

			default:
				alert("IA NO ES TAN INTELIGENTE");
		}
	}
}
