import cipher from './cipher.js';

//console.log(cipher);

document.getElementById("encodeB").addEventListener("click", buttonEncode);

//document.getElementById("encodeT").

function buttonEncode() {
  let offset = document.getElementById('offset').value;
  let texto = document.getElementById('encodeT').value;
  let resultado = document.getElementById('decodeT');
  resultado.innerHTML = cipher.encode(offset,texto);
}

document.getElementById("decodeB").addEventListener("click", buttonDecode);

function buttonDecode() {
  let offset = document.getElementById('offset').value;
  let texto = document.getElementById('decodeT').value;
  let resultado = document.getElementById('encodeT');
  resultado.value = cipher.decode(offset,texto);
}
