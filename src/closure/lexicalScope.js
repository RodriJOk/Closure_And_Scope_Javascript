//Veamos ahora como podemos convinar el concepto de ambito lexico, con el concepto de closure. 
//Tambien vamos a ver como generar nuevos alcances dentro de lo que estamos creando con nuestro codigo y como lo podemos implementar de formas distintas. 
// Creemos un nuevo closure y veamos como podemos contruir nuevos elementos a partir del mismo, y como cada uno de ellos podra recordar el valor segun el llamado que se le llegara a realizar. 

const buildCount = (i) =>{
    let count = i;
    const displayCount = ()=>{
        console.log(count ++)
    }
    return displayCount
}

const miCount = buildCount(1)

//Ahora ejecutemos la funcion. Y veamos su resultado.
miCount()//1
miCount()//2
miCount()//3
