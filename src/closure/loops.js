//Podemos crear closures de diferentes formas, y tambien de formas involuntarias.
//Esto significa que no estamos teniendo control sobre lo que estamos creando.
//Vamos a tomar un ejemplo para entender un poco como vamos
//a crear un closure, que no estamos controlando, y que de alguna manera, 
//al entender que va a recordar el contexto en donde se creo, vamos a obtener 
//un valor muy particular.
// Entonces mejor vamos a ese codigo, y entendamos juntos como lo vamos a manejar. 

const anotherFunction = () => {
    for(var i = 0; i<10; i++){
        setTimeout(()=>{
            console.log(i);
        }, 1000)
    }
}

anotherFunction()

//10
//10
//10
//10
//10
//10
//10
//10
//10
//10

//¿Que problema ocurria en este caso ?
//Que en la consola solo se muestran 10 veces, el numero 10.
//En vez de eso, nosotros queremos que se muestren los valores del 1-10. 
//¿Cual es el problema?
//El problema esta en la variable var, que no mantiene el scope en 
//el loopeo o iteracion. La solucion es muy sencilla 
//Solo deberiamos de cambiar la varible var por let y ¡Listo!
//Veamos como quedaria nuestro codigo. 

const anotherFunction = () => {
    for(let i = 0; i<10; i++){
        setTimeout(()=>{
            console.log(i);
        }, 1000)
    }
}

anotherFunction()

//0
//1
//2
//3
//4
//5
//6
//7
//8
//9