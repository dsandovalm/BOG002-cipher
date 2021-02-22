const cipher = {
  encode: function(offset,string){
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let mensaje = '';
    //Toma cada elemento del array y verifica que esté en el alfabeto
    for(let i=0;i<string.length;i++){
      let index = alphabet.indexOf(string[i]);
      
      if(index == -1){
        //Si no está, no se hace nada
        mensaje = mensaje + string[i];
      }else{
        //Si está se encripta
        mensaje = mensaje + alphabet[(index+offset)%alphabet.length];
      }
    }
    return mensaje
  },
  decode: function(offset,string){
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let mensaje = '';
    for(let i=0;i<string.length;i++){
      let index = alphabet.indexOf(string[i]);
      
      if(index == -1){
        mensaje = mensaje + string[i];
      }else{
        mensaje = mensaje + alphabet[(alphabet.length+index-offset)%alphabet.length];
      }
    }
    return mensaje
  },
  // ...
};
   

export default cipher;
