// Depurador
function log(texto,nueva){
	var capa=document.getElementById("log");
	if (nueva)
		capa.innerHTML = texto + "<br/>" + capa.innerHTML;
	else
		capa.innerHTML=texto;
}