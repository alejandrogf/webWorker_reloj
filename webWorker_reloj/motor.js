var worker;

function lanzarWorker() {
    worker = new Worker("wwTemporizador.js");
    worker.onmessage = function (evento) {
        document.getElementById("segundos").innerHTML = evento.data;
        if (evento.data == "0") {
            location.reload();
        }
    }
}


function parar() {
    worker.terminate();
    worker = undefined;
}

function reiniciar() {
    if (worker == undefined) {
        lanzarWorker();
    } else {
        worker.postMessage("reiniciar");
    }
    
}

lanzarWorker();
document.getElementById("reiniciar").addEventListener("click",reiniciar);
document.getElementById("stop").addEventListener("click", parar);