import cipher from './cipher.js';

function encode(){
    let mensaje = document.getElementById('encodeT').value;
    let offset = document.getElementById('offset').value;
    document.getElementById('decodeT').value = cipher.encode(offset, mensaje);
} 

function decode(){
    let mensaje = document.getElementById('decodeT').value;
    let offset = document.getElementById('offset').value;
    document.getElementById('encodeT').value = cipher.decode(offset, mensaje);
} 

document.getElementById('encodeB').addEventListener('click', encode);
document.getElementById('decodeB').addEventListener('click', decode);

