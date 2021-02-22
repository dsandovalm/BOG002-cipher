const cipher = {
  encode: function(offset,string){
    let alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    let mensaje = '';
    //Convierte el string en un array
    let array = string.split('');
    //Toma cada elemento del array y verifica que esté en el alfabeto
    for(let i=0;i<array.length;i++){
      let index = alphabet.indexOf(array[i]);
      
      if(index == -1){
        //Si no está, no se hace nada
        mensaje = mensaje + array[i];
      }else{
        //Si está se encripta
        mensaje = mensaje + alphabet[(index+offset)%alphabet.length];
      }
    }
    return mensaje
  },
  decode: function(offset,string){
  },
  // ...
};

export default cipher;
