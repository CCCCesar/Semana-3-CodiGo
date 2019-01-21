/**
 * El dueño de un estacionamiento requiere un diagrama de flujo con
el algoritmo que le permita determinar cuánto debe cobrar por el
uso del estacionamiento a sus clientes. Las tarifas que se tienen son
las siguientes:
Las dos primeras horas a $5.00 c/u.
Las siguientes tres a $4.00 c/u.
Las cinco siguientes a $3.00 c/u.
Después de diez horas el costo por cada una es de dos pesos
 */

var nroHoras = prompt("Ingrese el numero de horas");
var total = 0;
if (nroHoras <= 2) {
	total = nroHoras * 5;
}else{
	if (nroHoras > 2 && nroHoras < 5) {
		total = 10 + ((nroHoras-2)*4);
	}else{
		if (nroHoras > 5 && nroHoras <= 10) {
			total = 22 + ((nroHoras-5)*3);
		}else{
			total = 37 + ((nroHoras-10)*2);
		}
	}
}
alert("total a pagar = " + total);
