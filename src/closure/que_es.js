//¿ Que es un closure ?

//Un closure es la convinacion entre una funcion y el ambito lexico en la cual ha sido declarada dicha funcion. 
//Teniendo en cuenta esta definicion, un closure recuerda el ambito en el cual ha sido creado. 
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