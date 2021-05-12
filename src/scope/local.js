//Ahora hablemos sobre el scope local: 
//Este nos permite acceder a una variable en un bloque de codigo o en una funcion y solamente en esta estructura. 
//Y de esta forma nosotros vamos a poder ejecutar o llamar a este valor, solamente en esta estructura. 
//Veamos un ejemplo: 

const helloWorld = () => {
    const hello = "Hello World";
    console.log(hello)
};

helloWorld () //Hello World

//En este caso, cuando nosotros llamamos a la funcion, esta puede mostrar el mensaje de la variable hello, por que esta es una constante que es reconocida por el console.log()


