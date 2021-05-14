//Un punto importante, que debemos de tener en cuenta al trabajar con Javascript, es el concepto de Hoisting
//Hoisting, o elevamiento en español, hace refencia al levantamiento de nuestras declaracion. Veamos un jeemplo, que nos permita entender todo esto. 

a=2;
var a;
console.log(a)

//¿Cual crees que es el resultado?
//Si tu respuesta fue 2, estas en lo correcto
//El resultado que se muestra por consola es dos. 
//Pero ¿Por que?

//Como haciamos referencia, el hoisting eleva las declaraciones. 
//Entonces la variable a de la linea 5, pasa a estar en la elevacion y se coloca en primer lugar que la linea 4 (a = 2)
//Esto, luego del elevamiento, quedaria de la siguiente forma. 
//Este elevamiento ocurre antes 
var a;
a = 2;
console.log(a)//2

//Veamos otro ejemplo: 

console.log(b)
var b = 6; 

//¿Que crees que ocurrira en este caso ?
//¿Se mostrara por consola 6?
//Si crees que se mostrara por consola el numero 6, estas en lo erroneo. 

//undefined se muestra por consola. 
//Pero por que en este caso no ocurrio el elevamiento. 
//El motivo es que desde el console.log estamos intentando acceder a la variable a, pero esta misma no esta disponible. 

//Veamos otro ejemplo:

function nameOfDog(name){
    console.log(name)
}

nameOfDog("Pepe")

//Pepe

//En este ejemplo de aqui arriba, lo que ocurrira es que se va a mostrar por consola, el nombre de nuestra mascota. 
//Pero, ¿que ocurriria si invertimos los ordenes? 
//Veamos. 

nombreMascota("Pepe")

function nombreMascota(name){
    console.log(name)
}

//Pepe

//En este caso, si podemos ver el nombre de nuestra mascota. 
//Pero ¿por que?
//Si primero le pasamos el nombre a la funcion antes de declararla. 

//El motor que complila nuestro codigo en Js, lo hace antes de ser interpretado.
//Esto significa que primero se lee todas las asignaciones, se pasan a memoria, se ajustan o se adaptan segun el caso, y en memoria, se colocan como prioridad por ejemplo la funcion, y despues va a ejecutar la invocacion de la funcion 

//Nota importante: Javascript SOLO utiliza el hoisting en declaraciones (Ejemplo 1), no en inicilizaciones (Ejemplo 2)
