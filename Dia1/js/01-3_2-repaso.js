/**
 * Realice un algoritmo para determinar el sueldo semanal de un trabajador
con base en las horas trabajadas y el pago por hora, considerando que después de las 40 horas cada hora se considera como
excedente y se paga el doble. Construya el diagrama de flujo, el
pseudocódigo y el diagrama N/S.
 */

var nroHoras = 0;
var SPorHora = 10;
var total = 0;

nroHoras = prompt("Ingrese el numero de horas trabajadas");
if (nroHoras > 40){
	total = (40 * SPorHora) + ((nroHoras - 40) * SPorHora * 2);
}
else{
	total = SPorHora*nroHoras;
}
alert("Su sueldo es" + total );