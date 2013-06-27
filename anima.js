var b = require('bonescript');
//              0   1   2   3   4   5   6   7
//var pinos = [11, 12, 13, 14, 15, 16, 21, 22];
//var segmentos = [5, 6, 7, 2, 1, 0];
var pinos = [16, 21, 22, 13, 12, 11];

/* setup */
for (var i=0; i<pinos.length; i++ ) {
  var p = pinos[i];
  var pin = "P9_" + p;
  b.pinMode(pin, b.OUTPUT);
  b.digitalWrite(pin, 0);
}

var tempo = 0;
var i_pino = 0;

function desligar() {
  b.digitalWrite("P9_" + pinos[i_pino], 0);
  i_pino++;
  if (i_pino == pinos.length) {
    i_pino = 0;
  }
  setTimeout(ligar, 0);
};

function ligar() {
  console.log(i_pino);
  b.digitalWrite("P9_" + pinos[i_pino], 1);
  setTimeout(desligar, tempo);
}

function ler() {
  b.analogRead('P9_39', atualizar_tempo);
}

function atualizar_tempo(p) {
  tempo = p.value * 1000;
}

ligar();
setInterval(ler, 100);

