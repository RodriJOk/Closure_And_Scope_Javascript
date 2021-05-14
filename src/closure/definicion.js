//¿ Que es un closure ?

//Un closure es la convinacion entre una funcion y el ambito lexico en la cual ha sido declarada dicha funcion. 
//Teniendo en cuenta esta definicion, un closure recuerda el ambito en el cual ha sido creado. 

//Para poder tener un closure dentro de nuestro codigo, debemos tener 3 cosas importantes en nuestro codigo:
//1_ Una funcion dentro de otra funcion. O como tambien se lo conoce, una funcion ANIDADA dentro de otra funcion.
//2_ Alguna variable que se encuentre en el scope mas grande, y la funcion anidada la utilice de alguna manera. 
//3_ Invocar a la funcion interna desde un scope diferente al que fue escrita. 

//Pero, para entender mejor este concepto, veamos un ejemplo:
//Realicemos una alcancia. 

const moneyBox = (money) => {
    var guardarDinero = 0;
    guardarDinero += money;
    console.log(`El dinero de nuestra alcancia es de: $${guardarDinero}`)
}

moneyBox(10);
moneyBox(15);

//El dinero de nuestra alcancia es de: $10
//El dinero de nuestra alcancia es de: $15

//Si bien no tenemos un problema como tal, lo que esta ocurriendo es que nuestra alcancia no esta pudiendo guardar las monedas que estamos ingresando.
//Solo imprime el valor que le estamos pasando. 
//Por lo tanto no estamos generando un closure. 
//Creeemos nuevamente nuestra alcancia, pero con un closure. 

const tarroDeMonedas = () =>{
    var monedaInicial = 0
    const contadorDeMonedas = (moneda)=>{
        monedaInicial += moneda
        console.log(`La cantidad de monedas es de: $${monedaInicial}`)
    }
    return contadorDeMonedas;
}

let operacionDeMonedas = tarroDeMonedas()

operacionDeMonedas(1)
operacionDeMonedas(9)
operacionDeMonedas(10)

//La cantidad de monedas es de: $1
//La cantidad de monedas es de: $10
//La cantidad de monedas es de: $20

//En este ultimo ejemplo se cumple con los 3 requisitos que mencionabamos ante spara poder estar en presencia de un closure. 
//1_ Hay una funcion anidada dentro de otra funcion. En este caso: contadorDeMonedas esta dentro de tarroDeMonedas.
//2_ Tenemos a la variable monedaInicial que se encuentra en otro scope, pero es utilizado por la funcion anidada. 
//3_ Se invoca a la funcion desde un scope mas global. 

//Algo que tambien debemos de saber es que la clausura no solo tiene que ver con el ambito(scope), sino tambien con el contexto de ejecucion (environment)
//Vamos a ver como se relacionan estos dos conceptos, introduciendo uno nuevo: El Entorno lexico (o Lexical Environment en ingles).
//Aprender sobre los entornos lexicos nos va a ayudar a entender como el motor de Javascript ejecuta los programas

//Veamos un ejemplo mas sobre Closure. 


function crearContador (){
    //Esta variable esta unida por un vinculo inseparable. Ya que cuando se ejecuta la funcion incrementarContador esta accede a el valor que tiene la variable contador en el momento es que es ejecutada. 
    let contador = 0
    return function incrementarContador (){
        contador ++
        return contador
    };
}

const contador1 = crearContador()

console.log(contador1())//1
console.log(contador1())//2
console.log(contador1())//3
console.log(contador1())//4
console.log(contador1())//5

//Ahora imaginemos que creo una nueva constante con el nombre de contador 2, pero que invoca a la funcion crear contador. ¿Que pasaria? 
//Por ejemplo: 

const contador2 = crearContador()

//Las clausuras no solo tienen que ver con el scope, sino tambien con el contexto de ejecucion, que se van creando cada vez que se ejecuta una funcion. 

//Es por eso que podemos decir que contador 1, ni se va a enterar de que contador 2 existe. 