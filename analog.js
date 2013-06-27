var b = require('bonescript');
function ler() {
  b.analogRead('P9_39', exibir);
}
var i = 100;
function exibir(pin) {
    if (pin) console.log(pin.value);
    i--;
    if (i > 0) setTimeout(ler, 100);
}
ler();

