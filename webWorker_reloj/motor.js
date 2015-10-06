var worker = new worker("wwTemporizador.js");

worker.onmessage= function(evento) {

    document.getElementById("segundos").innerHTML = evento.data;

    if (evento.data == 0) { 
        location.reload();
    }

}