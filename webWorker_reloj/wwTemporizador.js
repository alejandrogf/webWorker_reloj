var segundos = 60;

function bajar() {

    segundos--;

    self.postMessage(segundos);

    setTimeout("bajar()", 1000);
}

bajar();