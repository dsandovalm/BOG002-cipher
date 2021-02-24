import cipher from './cipher.js';

function encode(){
    let mensaje = document.getElementById('texto').value;
    let offset = document.getElementById('offset').value;
    document.getElementById('texto').value = cipher.encode(offset, mensaje);
} 

function decode(){
    let mensaje = document.getElementById('texto').value;
    let offset = document.getElementById('offset').value;
    document.getElementById('texto').value = cipher.decode(offset, mensaje);
} 

document.getElementById('buttonEncode').addEventListener('click', encode);
document.getElementById('buttonDecode').addEventListener('click', decode);

