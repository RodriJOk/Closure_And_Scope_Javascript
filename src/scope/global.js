//Podemos establecer una variable a nivel global. 
//Veamos un ejemplo: 
var hello = "Hello";

//Al establecerla de forma global nosotros podemos acceder a ella desde cualquier parte de nuestro codigo.
//Por ejemplo, puedo llamarla de la siguiente manera

console.log(hello) //Hello

//Veamos que ocurre cuando utilizamos let y const 

var saludoVar = "Hello en la variable Var"
let saludoLet = "Hello en la variable Let"
const saludoConst = "Hello en la variable Const"

const anotherFunction = () =>{
    console.log(saludoVar)
    console.log(saludoLet)
    console.log(saludoConst)
}

anotherFunction()

//Este codigo va a mostrar en consola:
//  Hello en la variable Var
//  Hello en la variable Let
//  Hello en la variable Const

//Esto ocurre por que las variables, tanto en var, let y const estan declara de forma global, de modo que todos pueden acceder a ella. 
// --------- Nota importante ---------
/*
Reasignar una varible en el scope global es una mala practica. 
Aunque con Var LO PODREMOS HACER. 
En cambio con Let NO LO PODREMOS HACER. 
Pero let si nos permite asignarle un nuevo valor a una variable. 
Veamos un ejemplo:

//Esto No !!
let hlet = "hlet"
let hlet = "hlet ..."

//Esto SI !!
let hlet = "hlet"
hlet = "hlet_update"

Con la variable CONST no podremos ni DECLARAR NUEVAMENTE LA VARIABLE, NI TAMPOCO ASIGNARLE UN VALOR POR SEGUNDA VEZ.
*/