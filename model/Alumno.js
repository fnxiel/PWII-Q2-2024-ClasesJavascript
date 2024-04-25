var Persona = require('./Persona')

class Alumno extends Persona{
    clasesMatriculadas = []

    matricularClase(clase){
        this.clasesMatriculadas.push(clase)
        console.log(`La matricula de este alumno es: ${this.clasesMatriculadas}`)
    }
}

module.exports = Alumno