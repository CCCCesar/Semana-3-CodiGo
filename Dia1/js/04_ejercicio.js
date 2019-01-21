var nombres = ["jorge","faniel","carlos","flor"];
var indice = -1;
for (var i = 0; i < nombres.length; i++) {
	if ("luchito" == nombres[i]) {
		indice = i;
	}
}
if (indice == -1) {
	alert("no se encuentra, salió");	
}
else  {
	alert("posicion encontrada => " +  indice);	
}
