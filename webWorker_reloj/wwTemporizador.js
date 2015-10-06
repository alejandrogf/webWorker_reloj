var segundos = 60;

function bajar() {

    segundos--;

    self.postMessage(segundos);
    // Es una llamada recursiva. Se llama, dentro de si misma, 
    // poniendo un intervalo de tiempo.
    setTimeout("bajar()", 1000);
}

self.onmessage=function(evento) {
    if (evento.data == "reiniciar") {
        segundos = 60;
    }
        
}


bajar();