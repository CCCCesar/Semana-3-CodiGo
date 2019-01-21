// var cb = 0;
// var tp = prompt("Ingrese el tipo de poliza / A / B").toUpperCase();
// var bb = prompt("¿Es usted todo un bebedor? S/N").toUpperCase() == "S" ? true : false;
// var lentes = prompt("¿Usa lentes? S/N").toUpperCase() == "S" ? true : false;
// var enfermedad = prompt("¿Padece usted de enfermedades? S/N").toUpperCase() == "S" ? true : false;
// var edad = parseInt(prompt("Ingrese su edad"));
// var total = 0;

// cb = tp == "A" ? 1200 : 950;
// total = bb ? (cb + (cb * 0.1)) : cb;
// total = lentes ? total + (cb * 0.05) : total;
// total = enfermedad ? total + (cb * 0.05) : total;
// total = edad > 40 ? total + (cb * 0.2) : total + (cb * 0.1);

// alert(`Costo total de la poliza => ${total} Soles`);
// alert("Costo total de la poliza => " + total + "Soles");
// 

// var a = 9;
// var b = 9;
// var total = 0;

// for (var i = 0; i < b; i++) {
// 	total = total + a;
// }
// alert(total);

var D = 100;
var d = 9;
var q = 0;

while(D >= d){
	D-=d;
	q++;
}

alert(`El cociente es = ${q} y residuo = ${D}`);