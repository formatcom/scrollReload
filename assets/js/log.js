var count = 0;
// Depurador
function log(texto,nueva){
	var capa=document.getElementById("log");
	if (count < 25)
		count++;
	else{
		count = 0;
		nueva = false;
	}
	if (nueva)
		capa.innerHTML+="<br/>"+texto;
	else{
		count = 0;
		capa.innerHTML=texto;
	}
}