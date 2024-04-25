//funciones HolaMundo
const Persona = require("./model/Persona")
const Alumno = require("./model/Alumno")

const persona = new Persona("Alto", "Chewaka", 40, "Solo", 50)
const persona2 = new Persona("Bajo", "R2D2", 40, "Skywalker")
const persona3 = new Persona("Mediano", "C3P0", 40, "Skywalker", 10)
const alumno = new Alumno("Bajo", "Yoda", 50, "Apellido", 0)

console.log(alumno)
alumno.matricularClase("Programacion Web II")
alumno.matricularClase("Desarrollo Movil I")

console.log(persona)


console.log(persona.nombreCompleto)
persona.nombre = "Kylo"
persona.nombreCompleto = "Otra cosa"
console.log(persona.nombreCompleto)

persona.hablar("Estoy aprendiendo mucho")
persona2.hablar("Estoy aburrido")
persona3.hablar("Terminé la práctica")

persona.ganarPuntos(10)
persona.ganarPuntos(15)
persona.ganarPuntos(20)
persona2.ganarPuntos(5)
persona3.ganarPuntos(-15)

persona.ganarAmigo(persona2)
console.log(persona)

persona.presentarNotas()
persona2.presentarNotas()
persona3.presentarNotas()
