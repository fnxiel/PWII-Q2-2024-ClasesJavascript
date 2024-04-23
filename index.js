//funciones HolaMundo
function HolaMundo(persona){
    console.log("Hola,", persona.nombre)
}


class Persona{
    //Atributo
    tamano
    nombre
    edad
    apellido

    constructor(dimension, nombre, edad, apellido){
        this.tamano = dimension
        this.nombre = nombre
        this.edad = edad
        this.apellido = apellido
    }
    //Metodos
}

const objPersona = {
    tamano: "Grande",
    nombre: "Luke",
    edad: 20,
    apellido: "Skywalker"
}

const objPersona2 = {
    tamano: "Pequeña",
    nombree: "Leia",
    edad: 20,
    apellido: "Organa"
}

const persona = new Persona("Alto", "Chewaka", 40, "Solo")
const persona2 = new Persona("Bajo", "R2D2", 40, "Skywalker")
const persona3 = new Persona("Mediano", "C3P0", 40, "Skywalker")

//persona.nombre = "Darth"

HolaMundo(objPersona)
HolaMundo(objPersona2)
HolaMundo(persona)
console.log(persona)
console.log(persona2)
console.log(persona3)
//HolaMundo("Leia")
//HolaMundo("Anakin")
//HolaMundo("Chewaka")








class Mobiliario{
    //Atributos
    material
    tipoAmbiente
    color
    tipoPintura
    cantidadPersonas
    categoria //Silla
}

class Silla {
    //Atributos
    cantidadPatas
    material
    altura
    ancho
    profundidad
}

class Animal{
    //
    especie
    raza
    nombre
    dueno
}

class Factura{
    //
    rtn
    monto
    fecha
    cai
    
}

class Vehiculo{
    //
    anual
    marca
    modelo
    tipo
}
