const cipher = {
  encode: function(offset,string){
    const alphabet = 26;
    offset =  (offset === null) ? undefined : (offset<0) ? (alphabet - Math.abs(offset % alphabet)) :  offset % alphabet;
    string = typeof string === 'string' ? string : undefined;
    let mensaje = '';

    //Toma cada elemento del string y verifica que su codigo ASCII sea de una letra

    for(let i=0;i<string.length;i++){
      let charCode = string.charCodeAt(i);
      let tipo = (charCode >= 65 && charCode < 91) ? 'Mayus' : (charCode >= 97 && charCode < 123) ? 'Minus' : 'Otro'; 
      switch (tipo){
        case 'Mayus':
          //Mayusculas
          mensaje = mensaje + String.fromCharCode(65 + (charCode + offset - 65) % alphabet);
          break
        case 'Minus':
          //Minusculas
          mensaje = mensaje + String.fromCharCode(97 + (charCode + offset - 97) % alphabet);
          break
        default:
          //Caracteres que no se encuentran en el alfabeto
          mensaje = mensaje + string[i];
          break
      }
    }
    return mensaje
  },

  decode: function(offset,string){
    const alphabet = 26;
    offset =  (offset === null) ? undefined : offset % alphabet;
    string = typeof string === 'string' ? string : undefined;
    let mensaje = '';
    for(let i=0;i<string.length;i++){
      let charCode = string.charCodeAt(i);
      let tipo = (charCode >= 65 && charCode < 91) ? 'Mayus' : (charCode >= 97 && charCode < 123) ? 'Minus' : 'Otro'; 
      switch (tipo){
        case 'Mayus':
          mensaje = mensaje + String.fromCharCode(65 + (alphabet + charCode - offset - 65) % alphabet);
          break
        case 'Minus':
          mensaje = mensaje + String.fromCharCode(97 + (alphabet + charCode - offset - 97) % alphabet);
          break
        default:
          mensaje = mensaje + string[i];
          break
      }
    }
    return mensaje
  },
};
   

export default cipher;

