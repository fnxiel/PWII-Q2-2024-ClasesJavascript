//funciones HolaMundo
const Persona = require("./model/Persona")
const Alumno = require("./model/Alumno")

//Arreglos.
const textos =  ['', 'texto 2', 'Varias cosas', 1, true]



const persona = new Persona("Alto", "Chewaka", 40, "Solo", 50, 1)
const persona2 = new Persona("Bajo", "R2D2", 40, "Skywalker", 0, 2)
const persona3 = new Persona("Mediano", "C3P0", 40, "Skywalker", 10, 3)
const persona4 = new Persona("Bajo", "Yoda", 50, "Apellido", 0, 4)

const alumno = new Alumno("Bajo", "Yoda", 50, "Apellido", 0)


let listadoAsistencia = [persona, persona2, persona3]

//CRUD Create Read Update Delete - Crear Leer Actualizar Eliminar

//INSERT
listadoAsistencia.push(persona4)

//Select * FROM listadoAsistencia
console.log(listadoAsistencia)

//Obtener por indice
console.log(listadoAsistencia[2].nombre)

//Select Nombre from listadoAsistencia
//for
console.log("For")
for (let index = 0; index < listadoAsistencia.length; index++) {
    const elemento = listadoAsistencia[index];
    console.log(elemento.nombre)
}

console.log("For each")
listadoAsistencia.forEach(function(fila){
    console.log(fila.nombre, fila.apellido)
})

console.log("For each con funcion de flecha")
const nombres = listadoAsistencia.forEach(elemento => console.log(elemento.nombre))
console.log(nombres)

console.log("Map")
const porcentajes = listadoAsistencia.map(elemento => `${elemento.puntaje/100}%`)
console.log(porcentajes)

//Select * from listadoAsistencia Where Puntaje > 40
const alumnosAprobados = listadoAsistencia.filter(elemento => elemento.puntaje >= 10)
console.log(alumnosAprobados)

//Select * from listadoAsistencia Where apellido = Skywalker
const alumnosSkywalker = listadoAsistencia.filter(elemento => elemento.apellido === 'Skywalker')
console.log(alumnosSkywalker)

//Select * from listadoAsistencia Where id = 3
const alumnoConIdTres = listadoAsistencia.find(elemento => elemento.id === 3)

const alumnoConApellidoSkywalker = listadoAsistencia.find(elemento => elemento.apellido === 'Skywalker')
console.log(alumnoConIdTres)
console.log(alumnoConApellidoSkywalker)

//UPDATE listadoAsistencia SET puntaje = 100 WHERE id = 3
alumnoConIdTres.puntaje = 100
alumnoConIdTres.nombre = "REI"
console.log(listadoAsistencia)

//DELETE FROM listadoAsistencia WHERE id = 2
listadoAsistencia = listadoAsistencia.filter(elemento => elemento.id !== 2)
console.log(listadoAsistencia)

//Funciones de flecha
//function hola(){
//    console.log("hola")
//}

const hola = (mensaje) => {
    console.log(mensaje)
    console.log("Mensaje")
}
const funcionFlecha = () => console.log("Esto es una funcion de flecha.")

hola("Hola")

//Tipo de datos Javascript
let saludo
console.log(saludo)
saludo = "Texto"
console.log(saludo)
saludo = 1
console.log(saludo)
saludo = true
console.log(saludo)
saludo = new Date()
console.log(saludo)
saludo = {}
console.log(saludo)
saludo = []
console.log(saludo)





// console.log(alumno)
// alumno.matricularClase("Programacion Web II")
// alumno.matricularClase("Desarrollo Movil I")

// console.log(persona)


// console.log(persona.nombreCompleto)
// persona.nombre = "Kylo"
// persona.nombreCompleto = "Otra cosa"
// console.log(persona.nombreCompleto)

// persona.hablar("Estoy aprendiendo mucho")
// persona2.hablar("Estoy aburrido")
// persona3.hablar("Terminé la práctica")

// persona.ganarPuntos(10)
// persona.ganarPuntos(15)
// persona.ganarPuntos(20)
// persona2.ganarPuntos(5)
// persona3.ganarPuntos(-15)

// persona.ganarAmigo(persona2)
// console.log(persona)

// persona.presentarNotas()
// persona2.presentarNotas()
// persona3.presentarNotas()
