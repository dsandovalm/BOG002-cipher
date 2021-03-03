# En Clave
_Desarrollado por Susan Saenz y Diana Sandoval_ 


## Descripción

En este proyecto presentamos una aplicación web que hace uso del Cifrado Cesar para encriptar y decriptar mensajes en la que el usuario puede elegir el desplazamiento para cifrar y para descifrar, aportando seguridad adicional.


## Instrucciones de uso 

### Versión web
Si no quieres descargar ahora, puedes usar una versión web [haciendo click aquí](https://caesar-cipher.susansaenz.repl.co/). 

### Descargar
Para usarla desde tu equipo, puedes descargar esta carpeta haciendo click en el botón Code y luego en Download ZIP.

Para abrir deberás descomprimir el .zip, entrar a la carpeta src y abrir el index.html, este automaticamente se abrirá con tu navegador predeterminado.  

### Usar
Una vez abierta la aplicación, verás el campo del offset y los campos para texto.

- Coloca un número en el offset, que corresponde al desplazamiento que tendrán los alfabetos de cifrado y descifrado.

**IMPORTANTE:** El offset debe ser el mismo al cifrar y al descifrar, de lo contrario no podrás obtener el mensaje correctamente.

- Si vas a cifrar un mensaje:

Escribe tu mensaje en el cuadro de texto que se encuentra al lado izquierdo y haz click en el botón de CIFRAR que se encuentra justo arriba del cuadro. 

El mensaje cifrado aparecerá en el cuadro de texto del lado derecho, ya puedes copiar y enviarlo. Asegurate de enviar también el offset que usaste para que la otra persona pueda leerlo correctamente.

- Si vas a descifrar un mensaje:

Revisa que el offset tiene el número correcto. Pon mensaje a cifrado en el cuadro de texto que se encuentra al lado derecho y haz click en el botón de DECIFRAR que se encuentra justo arriba del cuadro.

El mensaje decifrado aparecerá en el cuadro de texto del lado izquierdo.


## Funcionalidad

La aplicación permite encriptar o decriptar mensajes, remplazando las letras del alfabeto internacional por su correspondiente en el alfabeto cifrado o viceversa. Los caracteres como letras con acentos (á, ä) o de alfabetos diferentes al ingles (ñ), números y simbolos no se encriptan sino que se conservan tal cual en su misma posición. Se puede usar cualquier número para el desplazamiento.


## Decisiones de diseño

### Perfil del Usuario
La aplicación está orientada a ser usada por activistas y organizaciones de derechos humanos que se encuentren trabajando en zonas de conflicto, por lo tanto su principal preocupación es la seguridad, necesitan cubrir información sensible para evitar que esta sea vista por personas no autorizadas y de este modo comunicarse de manera efectiva con sus equipos y a la vez preservar su integridad.

### Interfaz 
La interfaz consta de una sola pantalla en la que se encuentra el encabezado, el espacio del offset que admite cualquier número y 2 secciones cada una con un cuadro de texto y un botón, simulando la interfaz del traductor, el lado izquierdo corresponde al texto decodificado, teniendo sobre él un botón para codificar y el lado derecho al texto codificado con su respectivo botón para decodificar. 

Al codificar el texto, el nuevo mensaje aparece en el cuadro de texto de la derecha y al codificarlo aparece en el cuadro de texto de la izquierda, permitiendo pasar facilmente entre una acción y la otra.

El tener las 2 pantallas permite manipular con mayor facilidad textos largos, minimizando la cantidad de mensajes necesarios para comunicarse de manera efectiva sin comprometer la facilidad del manejo para el usuario.

La paleta de colores elegida tiene el azul como color principal, asociado al entendimiento y a la seguridad.

Los campos de texto simulan notas escritas a mano, por lo que se les colocó un color amarillo que asemeja el papel antiguo y tipografía manuscrita.

