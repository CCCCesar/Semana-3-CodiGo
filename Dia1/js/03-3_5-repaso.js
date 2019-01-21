var directorio = new Array();
var persona1 = new Array();
var persona2 = new Array();
var persona3 = new Array();
var persona4 = new Array();

persona1["nombre"] = "Juan";
persona1["edad"] = 30;
persona2["nombre"] = "Felipe";
persona2["edad"] = 78;
persona3["nombre"] = "Daniel";
persona3["edad"] = 10;
persona4["nombre"] = "Carlos";
persona4["edad"] = 8;

directorio.push(persona1,persona2, persona3, persona4);
var menor = directorio[0]["edad"];
var indice = 0;

for (var i = 1; i <= directorio.length; i++) {
	if (menor > directorio[i]["edad"]) {
		menor = directorio[i]["edad"];
		indice = i;
	}
}
alert("la persona de menor edad es => "+directorio[indice]["nombre"]);