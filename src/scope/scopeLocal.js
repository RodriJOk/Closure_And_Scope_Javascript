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

//Pero, ¿que pasaria si de forma global queremos acceder a la variable hello? 
//Veamos

const functionHello = ()=>{
    var hello = "Hello World"
    console.log(hello)
}

console.log(hello)
//ReferenceError: hello is not defined

//En este caso, tenemos un error. El console.log que esta por fuera de la funcion quiere acceder a la variable que esta dentro de la funcion functionHello(). 
//Debemos recordar que desde un scope global, no podemos acceder a un scope local.  

//Veamos otro ejemplo para entenderlo mucho mejor. 

var scope = "I am Scope Global"

const functionScope = () => {
    var scope = "I am Scope Local"
    const func = () => {
        return scope
    }
    console.log(func());
}

functionScope();
//I am a Scope Local

// ¿Que esta pasanado aqui?

//Lo que esta pasando en esta funcion se llama AMBITO LEXICO (O en ingles Lexical Scope). 
//¿Que es el ambito lexico?
//El intérprete de JavaScript funciona desde el ámbito de ejecución actual y funciona hasta encontrar la variable en cuestión. Si la variable no se encuentra en ningún ámbito, se genera una excepción.

//Este tipo de búsqueda se llama ámbito léxico. El alcance de una variable se define por su ubicación dentro del código fuente, y las funciones anidadas tienen acceso a las variables declaradas en su alcance externo. No importa de dónde se llame una función, o incluso cómo se llama, su alcance léxico depende solo de dónde se declaró la función.