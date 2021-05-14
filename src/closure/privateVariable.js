//Javascript por su naturaleza, no fomenta el uso de datos privados.
//Pero, por medio de los closure, podemos crear valores, que solo pueden ser accedidos por medio de metodos y que no van a estar disponibles fuera de la funcion. 
//Veamos un ejemplo: 

const persons = ()=>{
    var saveName = "Name"
    return {
        getName: ()=>{
            return saveName;
        },
        setName: (name)=>{
            saveName = name;
        },
    };
};

const newPerson = persons()
console.log(newPerson.getName())
newPerson.setName("Rodri");
console.log(newPerson.getName())
newPerson.setName("Golden M")
console.log(newPerson.getName())