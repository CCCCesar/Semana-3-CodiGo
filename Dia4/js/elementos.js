function darFormato(){
	var parrafo = document.getElementById("parrafo");
	parrafo.style.fontSize = '5em';
	parrafo.style.border = '1px solid #ff5544';
}

function reducir(){
	var parrafo = document.getElementById("parrafo");//p
	var tamanio = window.getComputedStyle(parrafo).fontSize;//16px
	var tamanioEnTexto = tamanio.toString();//16px
	//var tamanioNumber = parseInt(tamanioEnTexto.split("p")[0]);opcion1
	var tamanioNumber = parseInt(tamanioEnTexto.slice(0,-2));
	tamanioNumber = tamanioNumber - 2;
	parrafo.style.fontSize = tamanioNumber + "px";
}

function aumentar(){
	var parrafo = document.getElementById("parrafo");//p
	var tamanio = window.getComputedStyle(parrafo).fontSize;//16px
	var tamanioEnTexto = tamanio.toString();//16px
	//var tamanioNumber = parseInt(tamanioEnTexto.split("p")[0]);opcion1
	var tamanioNumber = parseInt(tamanioEnTexto.slice(0,-2));
	tamanioNumber = tamanioNumber + 2;
	parrafo.style.fontSize = tamanioNumber + "px";
}

function negrita(){
	var parrafo = document.getElementById("parrafo");//p
	if (parrafo.style.fontWeight == "bold"){
		parrafo.style.fontWeight = "normal";
	}else{
		parrafo.style.fontWeight = "bold";
	}
}

function oblicua(){
	var parrafo = document.getElementById("parrafo");//p
	if (parrafo.style.fontStyle == 'italic'){
		parrafo.style.fontStyle="normal";
	}else{
		parrafo.style.fontStyle="italic";
	}
}

function subrayado(){
	var parrafo = document.getElementById("parrafo");//p
	parrafo.style.textDecoration = 'underline';
}

function cambiarTexto(){
	var input = document.getElementById("miInput");
	var parrafo = document.getElementById("parrafo");
	parrafo.innerHTML = input.value;
}

function insertarInput(){
	var miLabel = document.createElement("label");
	miLabel.innerHTML = "Mi Etiqueta";
	var formulario = document.getElementById("formulario");
	formulario.prepend(miLabel);
}