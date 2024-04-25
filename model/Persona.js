class Persona{
    //Atributo
    tamano
    nombre
    edad
    apellido
    puntaje = 0
    fechaNacimiento = new Date()
    amigo

    //Constructor
    constructor(dimension, nombre, edad, apellido, puntajeInicial){
        this.tamano = dimension
        this.nombre = nombre
        this.edad = edad
        this.apellido = apellido
        if(puntajeInicial){
            this.puntaje = puntajeInicial
        }
    }

    //Metodos
    get nombreCompleto(){
        return `${this.nombre} ${this.apellido}`
    }
    
    get edad(){
        return //Fecha nacimiento
    }

    hablar(mensaje){
        console.log(`Yo, ${this.nombreCompleto}, declaro que: ${mensaje}`)
    }

    ganarPuntos(puntaje){
        if(this.puntaje + puntaje < 0){
            this.puntaje = 0
            this.hablar(`Mi puntaje es ${this.puntaje}`)
        }else{
            this.puntaje = this.puntaje + puntaje
            this.hablar(`Acabo de ganar ${puntaje} puntos, por lo que mi puntaje total es  ${this.puntaje}`)
        }
        
    }

    ganarAmigo(amigo){
        this.amigo = amigo
        this.hablar(`Ahora ${amigo.nombreCompleto} es mi amigo`)
    }

    presentarNotas(){
        const mensajeNota = `${this.nombre} tiene un puntaje de: ${this.puntaje}`
        console.log(mensajeNota)
        return mensajeNota
    }

}

module.exports = Persona