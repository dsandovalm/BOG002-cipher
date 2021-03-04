import cipher from './cipher.js';

document.getElementById("encodeB").addEventListener("click", buttonEncode);

function buttonEncode() {
  let offset = document.getElementById('offset').value;
  let texto = document.getElementById('encodeT');
  let resultado = document.getElementById('decodeT');
  texto.style.color = '#6F7085';
  resultado.style.color = '#000'; 
  resultado.value = cipher.encode(offset,texto.value);
}

document.getElementById("decodeB").addEventListener("click", buttonDecode);

function buttonDecode() {
  let offset = document.getElementById('offset').value;
  let texto = document.getElementById('decodeT');
  let resultado = document.getElementById('encodeT');
  texto.style.color = '#6F7085';
  resultado.style.color = '#000'; 
  resultado.value = cipher.decode(offset,texto.value);
}
